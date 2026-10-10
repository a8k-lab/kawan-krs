import { Hono } from 'hono';
import { cors } from 'hono/cors';

const app = new Hono().basePath('/api');

app.use('*', cors());

const routes = app.get('/health', (c) => {
  return c.json({ status: 'ok', message: 'KawanKRS API is running' });
});

export type AppType = typeof routes;
export { app };
