# ADR-0001: TypeScript Monorepo with pnpm Workspaces

- **Status:** Accepted
- **Date:** 2026-10-23
- **Decision makers:** KawanKRS development team (decision confirmed in architecture discussion; team-wide sign-off to be verified)

## Context

KawanKRS is a web application for planning academic study, with a React frontend and a TypeScript HTTP API. The project is developed collaboratively and needs coordinated changes across user interfaces, request/response contracts, and backend business logic.

Separate repositories increase context switching for both developers and AI coding agents and make cross-cutting changes to API contracts harder to review together.

## Decision

Use a **TypeScript monorepo managed with pnpm workspaces**, with deployable applications separated under `apps/`:

```text
apps/
  web/  # React frontend
  api/  # Hono HTTP API
pnpm-workspace.yaml
package.json
```

Maintain clear application boundaries, even though the code shares one repository. Shared packages may be added when real reuse justifies them, not preemptively.

## Rationale

1. **API contract coordination:** Make frontend and backend contract changes in one revision, with compiler feedback on integration mismatches.
2. **Less context switching:** Developers work on end-to-end features within one repository and toolchain.
3. **AI-agent context:** Agents can inspect related frontend/backend code and associated decisions together.
4. **Practical collaboration:** A single place for reviews, reproducible setup, and eventual cross-application quality checks.

Monorepo placement alone does **not** guarantee type-safe API communication; that is addressed in [ADR-0002](./0002-type-safe-api-communication.md).

## Consequences

### Benefits

- Cross-application changes can be reviewed together.
- Workspace dependencies support type-only API contracts.
- A consistent development entry point and dependency lockfile.

### Costs and risks

- CI/CD must identify affected applications and avoid unnecessary work as the repository grows.
- TypeScript package and Hono versions must stay compatible.
- Shared repository access can encourage unwanted imports from backend implementation into frontend code.
- Builds/deployments should remain independently runnable for each application.

## Guardrails

- `apps/web` must not import backend runtime internals (e.g., Prisma clients, database code, server secrets).
- Expose intentional API types/entrypoints only.
- Use workspace-scoped scripts for independent builds and checks.
- Keep dependencies and generated outputs out of Git (`node_modules/`, build directories, environment secrets).

## Alternatives considered

- **Separate frontend and backend repositories:** Clear repository isolation, but heavier coordination and context switching for the current team.
- **Single full-stack app without separate workspace apps:** Simpler initial layout but less explicit separation of responsibilities and deployment boundaries.

## Validation

- Both applications install and build from a fresh pnpm workspace checkout.
- A backend contract change generates a frontend type error when clients become incompatible.
- API and frontend remain deployable independently.

## Related decisions

- [ADR-0002: Type-Safe API Communication](./0002-type-safe-api-communication.md)
