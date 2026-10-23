import { createMemoryHistory, RouterProvider } from "@tanstack/react-router";
import {
  act,
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { createAppRouter } from "./router";

beforeEach(() => {
  vi.spyOn(window, "scrollTo").mockImplementation(() => {});
  vi.spyOn(window, "alert").mockImplementation(() => {});
  vi.spyOn(window, "confirm").mockReturnValue(true);
  localStorage.clear();
});

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});

async function openPage(url: string) {
  const history = createMemoryHistory({ initialEntries: [url] });
  const router = createAppRouter(history);
  await act(async () => {
    render(<RouterProvider router={router} />);
    await router.load();
  });
  return router;
}

const pages = [
  ["/login", "Masuk ke Akun"],
  ["/register", "Registrasi Akun"],
  ["/mahasiswa/rekomendasi", "Rekomendasi Paket KRS Cerdas"],
  ["/mahasiswa/riwayat", "Riwayat Studi & Transkrip Mahasiswa"],
  ["/dosen/mahasiswa", "Portal Dosen Pembimbing Akademik"],
  ["/dosen/mahasiswa/1", "Workspace PA - Detail Mahasiswa"],
  ["/admin", "Dashboard Admin Akademik"],
  ["/admin/mata-kuliah", "Master Mata Kuliah"],
  ["/admin/biaya", "Biaya Semester & Tarif SKS"],
  ["/admin/pengguna", "Manajemen Pengguna"],
  ["/superadmin", "Dashboard Super Admin"],
  ["/superadmin/pengguna", "Manajemen Pengguna (Super Admin)"],
  ["/superadmin/audit", "Log Aktivitas Sistem & Audit Trail"],
];

describe("file-based routes", () => {
  it.each(pages)(
    "opens %s directly without changing demo access",
    async (url, title) => {
      const router = await openPage(url);
      expect(router.state.location.pathname).toBe(url);
      await waitFor(() => expect(document.title).toBe(`Kawan KRS | ${title}`));
      if (url === "/login" || url === "/register") {
        expect(document.querySelector("form")).not.toBeNull();
      } else {
        expect(screen.getAllByRole("main")).toHaveLength(1);
      }
      expect(screen.queryByText("Something went wrong!")).toBeNull();
      expect(
        screen.getByRole("complementary", { name: "Demo Role Switcher" })
      ).toBeTruthy();
    }
  );

  it.each([
    ["/", "/login"],
    ["/mahasiswa", "/mahasiswa/rekomendasi"],
    ["/dosen", "/dosen/mahasiswa"],
  ])("redirects %s to %s", async (url, destination) => {
    const router = await openPage(url);
    await waitFor(() =>
      expect(router.state.location.pathname).toBe(destination)
    );
  });

  it.each(["/missing", "/admin/missing", "/mahasiswa/missing"])(
    "shows a recoverable 404 for %s",
    async (url) => {
      const router = await openPage(url);
      expect(
        screen.getByRole("heading", { name: "Halaman tidak ditemukan" })
      ).toBeTruthy();
      fireEvent.click(
        screen.getByRole("link", { name: "Kembali ke halaman masuk" })
      );
      await waitFor(() =>
        expect(router.state.location.pathname).toBe("/login")
      );
    }
  );

  it("uses the demo switcher to navigate between roles", async () => {
    const router = await openPage("/login");
    const switcher = screen.getByRole("complementary", {
      name: "Demo Role Switcher",
    });
    fireEvent.click(within(switcher).getByRole("link", { name: "Admin" }));
    await waitFor(() => expect(router.state.location.pathname).toBe("/admin"));
    expect(screen.getByRole("navigation")).toBeTruthy();
  });
});

describe("nested navigation and layout state", () => {
  it("keeps recommendation inputs across tabs and back/forward, but resets on a fresh mount", async () => {
    const router = await openPage("/mahasiswa/rekomendasi");
    fireEvent.change(screen.getByRole("slider"), { target: { value: "24" } });
    fireEvent.change(screen.getByDisplayValue("7.500.000"), {
      target: { value: "9.000.000" },
    });
    fireEvent.click(screen.getByRole("link", { name: /Riwayat Studi/ }));
    await waitFor(() =>
      expect(router.state.location.pathname).toBe("/mahasiswa/riwayat")
    );
    expect(screen.queryByRole("slider")).toBeNull();
    await act(async () => {
      router.history.back();
    });
    await waitFor(() =>
      expect(screen.getByRole("slider").getAttribute("value")).toBe("24")
    );
    expect(screen.getByDisplayValue("9.000.000")).toBeTruthy();
    await act(async () => {
      router.history.forward();
    });
    await waitFor(() =>
      expect(router.state.location.pathname).toBe("/mahasiswa/riwayat")
    );
    fireEvent.click(
      screen.getByRole("link", { name: /Rekomendasi Paket KRS/ })
    );
    await waitFor(() =>
      expect(screen.getByRole("slider").getAttribute("value")).toBe("24")
    );
    cleanup();
    await openPage("/mahasiswa/rekomendasi");
    expect(screen.getByRole("slider").getAttribute("value")).toBe("20");
    expect(screen.getByDisplayValue("7.500.000")).toBeTruthy();
  });

  it("preserves admin filters and demo mutations across sections", async () => {
    const router = await openPage("/admin/mata-kuliah");
    const search = screen.getByPlaceholderText(
      "Cari mata kuliah, kode MK, atau deskripsi..."
    );
    fireEvent.change(search, { target: { value: "CS101" } });
    const row = screen.getByRole("row", { name: /CS101/ });
    // Existing prototype row actions are icon-only: edit, then delete.
    fireEvent.click(within(row).getAllByRole("button")[1]);
    await act(async () => {
      await router.navigate({ to: "/admin/biaya" });
    });
    fireEvent.click(screen.getByRole("link", { name: "Mata Kuliah" }));
    await waitFor(() =>
      expect(router.state.location.pathname).toBe("/admin/mata-kuliah")
    );
    expect(screen.getByDisplayValue("CS101")).toBeTruthy();
    expect(screen.queryByRole("row", { name: /CS101/ })).toBeNull();
    const nav = screen.getByRole("navigation");
    expect(
      within(nav)
        .getByRole("link", { name: "Mata Kuliah" })
        .getAttribute("aria-current")
    ).toBe("page");
    expect(
      within(nav)
        .getByRole("link", { name: "Dashboard" })
        .getAttribute("aria-current")
    ).toBeNull();
  });

  it("preserves superadmin search state across sections", async () => {
    const router = await openPage("/superadmin/audit");
    fireEvent.change(
      screen.getByPlaceholderText(
        "Cari aktivitas, nama user, atau event sistem..."
      ),
      { target: { value: "Security" } }
    );
    await act(async () => {
      await router.navigate({ to: "/superadmin/pengguna" });
    });
    fireEvent.click(screen.getByRole("link", { name: "Audit Logs" }));
    await waitFor(() =>
      expect(screen.getByDisplayValue("Security")).toBeTruthy()
    );
  });

  it("links a student detail URL and preserves lecturer list filters", async () => {
    const router = await openPage("/dosen/mahasiswa");
    const search = screen.getByRole("textbox");
    fireEvent.change(search, { target: { value: "Nadya" } });
    const detailLink = screen.getByRole("link", { name: /Detail/ });
    expect(detailLink.getAttribute("href")).toBe("/dosen/mahasiswa/1");
    fireEvent.click(detailLink);
    await waitFor(() =>
      expect(router.state.location.pathname).toBe("/dosen/mahasiswa/1")
    );
    fireEvent.click(
      screen.getByRole("link", { name: "Daftar Mahasiswa Bimbingan" })
    );
    await waitFor(() => expect(screen.getByDisplayValue("Nadya")).toBeTruthy());
  });
});

describe("existing authentication behavior", () => {
  it.each([
    ["MAHASISWA", "/mahasiswa/rekomendasi"],
    ["DOSEN", "/dosen/mahasiswa"],
    ["ADMIN", "/admin"],
    ["SUPERADMIN", "/superadmin"],
  ])("keeps login storage and the %s redirect", async (role, destination) => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        success: true,
        data: {
          sessionToken: "demo-token",
          user: { fullName: "Demo", role },
        },
      }),
    });
    vi.stubGlobal("fetch", fetchMock);
    const router = await openPage("/login");
    fireEvent.submit(document.querySelector("form")!);
    await waitFor(
      () => expect(router.state.location.pathname).toBe(destination),
      { timeout: 2000 }
    );
    expect(fetchMock).toHaveBeenCalledWith(
      "/api/auth/login",
      expect.objectContaining({
        method: "POST",
        body: JSON.stringify({
          identifier: "nadya.salsabila@kawankrs.ac.id",
          password: "SecretPassword123",
        }),
      })
    );
    expect(localStorage.getItem("kawan_krs_token")).toBe("demo-token");
    expect(JSON.parse(localStorage.getItem("kawan_krs_user")!).role).toBe(role);
  });

  it("preserves registration payloads and the delayed return to login", async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValue({ ok: true, json: async () => ({ success: true }) });
    vi.stubGlobal("fetch", fetchMock);
    const router = await openPage("/register");
    const fields = {
      fullName: "Demo Student",
      identifier: "1234567890",
      role: "mahasiswa",
      email: "demo@example.com",
      password: "Password123",
      confirmPassword: "Password123",
    };
    for (const [name, value] of Object.entries(fields)) {
      fireEvent.change(document.querySelector(`[name="${name}"]`)!, {
        target: { value },
      });
    }
    fireEvent.submit(document.querySelector("form")!);
    await waitFor(() => expect(router.state.location.pathname).toBe("/login"), {
      timeout: 2500,
    });
    const { confirmPassword: _, ...payload } = fields;
    expect(fetchMock).toHaveBeenCalledWith(
      "/api/auth/register",
      expect.objectContaining({ method: "POST" })
    );
    expect(JSON.parse(fetchMock.mock.calls[0][1].body)).toEqual(payload);
  });

  it("keeps API errors on the login page", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: false,
        json: async () => ({
          success: false,
          message: "Credentials rejected",
        }),
      })
    );
    const router = await openPage("/login");
    fireEvent.submit(document.querySelector("form")!);
    expect(await screen.findByText("Credentials rejected")).toBeTruthy();
    expect(router.state.location.pathname).toBe("/login");
    expect(localStorage.getItem("kawan_krs_token")).toBeNull();
  });
});
