# ADR-0002: Type-Safe Frontend–Backend Communication

- **Status:** Accepted (implementation pending)
- **Date:** 2026-10-23
- **Decision makers:** KawanKRS development team (decision confirmed in architecture discussion; team-wide sign-off to be verified)

## Context

KawanKRS currently has a Hono API and React frontend in a pnpm monorepo. The API exports an `AppType` and the web workspace declares a dependency on `@kawan-krs/api`, but the frontend currently uses local view switching and the API only registers health/auth routes. Having one repository does not, by itself, provide runtime request validation, authenticated requests, or synchronized server state.

We want minimal duplication of request/response shapes, fast iteration across the frontend/backend boundary, and clear responsibility for data ownership and security.

## Decision

Adopt:

1. **Hono RPC (`hc<AppType>`)** for the primary, typed TypeScript frontend → Hono API client.
2. **Zod** with **`@hono/zod-validator`** for runtime validation of API inputs. Handlers must return intentionally typed HTTP responses and status codes.
3. **TanStack Query** for frontend remote/server-state fetching, caching, loading/error states, mutations, and invalidation.
4. **HTTP/JSON** as the actual network transport; Hono RPC is a typed client interface, not a custom wire protocol.

The server remains authoritative for authorization, academic constraints, recommendation behavior, and persistence.

## Rationale

- Types can be inferred from backend route signatures without independently maintaining a frontend DTO copy.
- Validation catches malformed and hostile input at runtime, not just at TypeScript compile time.
- Query/mutation lifecycle logic stays separate from components and HTTP handlers.
- This approach fits the existing TypeScript/Hono monorepo without adding an OpenAPI client-generation pipeline prematurely.

## Implementation boundaries

- Export **only types** (`AppType`) from the API package to the frontend; use `import type`.
- Keep Prisma, backend services, environment secrets, and direct database access server-side.
- Register routes using a chained Hono app definition so the exported `AppType` retains route information.
- Align installed Hono versions across API/client packages to avoid inference incompatibilities.
- Use Zod schemas at input boundaries and explicit error response formats; do not treat inferred types as runtime validation.
- Authentication must use a deliberate session/token strategy, with server-side authorization on protected endpoints. A frontend role switcher is **not** a permission boundary.
- Query keys and cache invalidation should be designed around domain resources (profile, academic history, study plan, recommendations).
- Preserve ability to expose/document the HTTP API separately if non-TypeScript clients become necessary.

## Consequences

### Benefits

- Compiler-visible contract drift in frontend integrations.
- Less boilerplate and fewer duplicated API types.
- Predictable server-state behavior in React.

### Costs and risks

- RPC inference is primarily useful to TypeScript consumers and depends on compatible dependency versions.
- Type checking alone does not guarantee correct runtime behavior or secure access control.
- The API contract can grow hard to maintain if routes omit explicit validation and response conventions.
- Existing manually implemented auth and demo navigation require careful migration, not a mechanical client swap.

## Alternatives considered

- **OpenAPI + generated client:** Better language-neutral contract and standardized API documentation, but extra specification/generation workflow for the current scope.
- **Manually maintained fetch + duplicated DTOs:** Lightweight dependencies but contract drift risk.
- **tRPC:** End-to-end TypeScript typing, but would introduce another API abstraction despite Hono already being in use.

## Rollout plan

1. Align Hono dependency versions and establish a minimal typed client factory in `apps/web`.
2. Introduce Zod validation and consistent typed success/error responses for a single endpoint.
3. Integrate one **vertical slice**, preferably `login → session → authenticated dashboard`, with TanStack Query where server state is involved.
4. Confirm that changing a backend request/response type causes the expected frontend typecheck failure.
5. Expand to academic history, course catalog, study plans, and recommendation APIs incrementally.

**Security blocker before a public release:** Existing public registration accepts a caller-provided role and maps it to privileged `ADMIN`/`SUPERADMIN` roles. The public registration flow must not permit privilege selection; privileged account creation must be authorized separately.

## Acceptance criteria

- Fresh workspace typecheck/build succeeds.
- Input validation rejects invalid payloads at runtime.
- Unauthorized requests to protected API routes fail regardless of frontend state.
- Login/session flow works end-to-end without demo role switching as an access mechanism.
- Contract changes produce detectable type errors before merge.

## Related decisions

- [ADR-0001: TypeScript Monorepo with pnpm Workspaces](./0001-monorepo-architecture.md)
