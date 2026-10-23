import { Outlet } from "@tanstack/react-router";

import { DosenStateContext, useDosenFeatureState } from "./state";

export function DosenLayout() {
  const state = useDosenFeatureState();
  return (
    <DosenStateContext value={state}>
      <div className="min-h-screen bg-[#f8fafc] pb-16 font-sans text-slate-800">
        <Outlet />
      </div>
    </DosenStateContext>
  );
}
