import { serve } from "@hono/node-server";

import { app } from "./app.js";

const port = Number(process.env.PORT) || 3001;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
