import { Hono } from "hono";
import { cors } from "hono/cors";

import { authRoutes } from "./routes/auth.js";

const app = new Hono().basePath("/api");

app.use("*", cors());

const routes = app
  .get("/health", (c) => {
    return c.json({ status: "ok", message: "KawanKRS API is running" });
  })
  .route("/auth", authRoutes);

export type AppType = typeof routes;
export { app };
