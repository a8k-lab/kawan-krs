# ADR-0003: Frontend Architecture and Technology Stack

- **Status:** Accepted (implementation pending)
- **Date:** 2026-10-23
- **Decision makers:** KawanKRS development team (frontend direction confirmed in architecture discussion; team-wide sign-off to be verified)
- **Related:** [ADR-0001](./0001-monorepo-architecture.md), [ADR-0002](./0002-type-safe-api-communication.md)

## Context

KawanKRS is a browser-based study-planning application for S1 PJJ Informatika students and academic staff. The existing `apps/web` application uses React, Vite, TypeScript, and Tailwind CSS, with local React state controlling which demo page is displayed. The UI has registration, login, and role-specific dashboard views, but this does not constitute authenticated routing or protected navigation.

As the application moves from UI slicing to end-to-end workflows, the team needs consistent conventions for routing, remote data, forms, and reusable UI components. The frontend should remain compatible with the Hono RPC communication decision in ADR-0002, avoid unnecessary custom infrastructure, and be understandable to human developers and AI coding agents.

## Decision

The frontend will remain a **React + TypeScript single-page application built with Vite** and adopt the following tools:

| Concern | Tool | Responsibility |
| --- | --- | --- |
| UI components | **shadcn/ui** | Locally owned, composable components and accessible UI primitives |
| Styling | **Tailwind CSS** | Utility-first styling, supported by shared design tokens |
| Routing | **TanStack Router** | Type-safe route definitions, navigation, URL/search parameters, and route-level context |
| Server state | **TanStack Query** | Remote data fetching, caching, mutations, invalidation, and loading/error state |
| Form state | **TanStack Form** | Form field state, submission lifecycle, and field-level errors |
| Form validation | **Zod** | Runtime validation of client form inputs; API request validation remains enforced on the server |
| Typed API client | **Hono RPC** | Type-safe HTTP calls to the Hono backend, per ADR-0002 |

This decision does **not** adopt TanStack Start or introduce SSR as a requirement. It also does not require a global client-state library unless a clear use case emerges.

## Rationale

1. **Consistent frontend primitives:** A single approach to routes, forms, data fetching, and UI makes the codebase easier for the team to maintain.
2. **Type safety across boundaries:** TanStack Router provides typed navigation, TanStack Form uses typed values, and Hono RPC uses the backend's inferred API contract. These mechanisms are complementary, not interchangeable.
3. **Local ownership of UI:** shadcn/ui components live in the application source and may be customized. The team is responsible for maintaining them and preserving accessibility.
4. **Separation of concerns:** Query owns remote/server state; Form owns in-progress form state; Router owns route and URL state; React local state handles component interactions.
5. **Incremental migration:** Existing React and Tailwind code can be migrated view by view, instead of restarting the project.

## Architectural guidelines

### Routing and access control

- Replace the temporary `currentView`-based switching in `App.tsx` with TanStack Router routes and layouts.
- Prefer file-based routing for route discovery and consistency unless the team identifies a specific reason not to.
- Use route guards and redirects for user experience, **not** as the authoritative permission boundary.
- The backend must authenticate and authorize every protected request. Role-specific navigation must not rely on the demo `RoleSwitcher`.
- Keep route search parameters typed when they represent application state (filters, pagination, selected semester).

### Remote data

- Centralize Hono RPC client creation and authentication behavior in the API client layer.
- Encapsulate domain fetches/mutations in query options/hooks where reuse improves clarity; avoid calling `fetch` ad hoc throughout UI components.
- Define stable query keys for resources such as student profile, transcript, course catalog, study-plan drafts, and recommendations.
- Invalidate or update affected caches after successful mutations; do not assume a mutation updates every existing view automatically.
- Use TanStack Router loaders for route-level coordination and preloading where useful, while allowing TanStack Query to own fetched server state. Avoid maintaining duplicate independent caches.

### Forms and validation

- Use TanStack Form for user-editable forms (registration, academic history, study-plan parameters, administrative forms).
- Use Zod schemas appropriate to their boundary. Reuse a schema only when its semantics really are identical; client validation never replaces backend validation.
- Show field-level errors and request-level errors clearly. Disable duplicate submissions or otherwise handle idempotency where appropriate.
- Keep domain constraints such as prerequisite eligibility, credit caps, and finalization rules enforced server-side.

### UI composition

- Initialize shadcn/ui in `apps/web` and keep generated/owned primitives in a conventional location such as `src/components/ui`.
- Build domain-specific components separately from UI primitives. Prefer composition over large role-specific monolithic page components.
- Establish and maintain consistent spacing, colors, typography, empty states, error states, and responsive behavior.
- Preserve keyboard navigation, visible focus, form labels, and accessible feedback when customizing components.

### Suggested organization (illustrative, not mandatory)

```text
apps/web/src/
├── app/                  # Providers, router wiring, application bootstrap
├── routes/               # TanStack Router route modules
├── components/
│   └── ui/               # shadcn/ui primitives
├── features/             # Academic, auth, recommendations, etc.
│   └── <feature>/        # Feature-specific components, forms, queries
└── lib/                  # Hono RPC client, shared frontend utilities
```

Avoid reorganizing the entire tree solely to match this example; migrate as features are touched.

## Alternatives considered

- **React Router:** Widely used and flexible, but TanStack Router is preferred for its typed route/search-param ergonomics alongside the chosen TanStack tools.
- **React Hook Form:** A sound alternative with shadcn/ui support; TanStack Form is chosen for consistency with the team's selected frontend ecosystem and typed form patterns.
- **Custom component library from scratch:** More design/control work than is appropriate at this stage.
- **A fully bundled UI component framework:** Faster in some scenarios but offers less local ownership of component implementation and styling.
- **Manual fetching with React effects:** Adds repetitive request lifecycle and cache synchronization code.

## Consequences and trade-offs

### Benefits

- Predictable routing, data-fetching, form, and component patterns.
- Stronger compile-time feedback across frontend navigation and backend API usage.
- A maintainable baseline for collaborative implementation and future role-specific workflows.

### Costs / risks

- The team must learn and maintain multiple focused libraries; their boundaries should be clearly documented.
- shadcn/ui is source-owned code: upgrades, accessibility, and consistency require ongoing review.
- TanStack Router file-route generation requires build/tooling configuration.
- Type safety and client-side validation cannot guarantee backend authorization or correct academic rules.
- Migration must avoid regressions in demo pages and existing login/registration flows.

## Rollout plan

1. Add dependencies and initialize TanStack Router, Query, Form, shadcn/ui, and Zod in `apps/web`, keeping versions compatible with React and Vite.
2. Create application providers and the typed Hono RPC client outlined in ADR-0002.
3. Move login, registration, and one role-specific dashboard to real routes; remove production exposure of the demo role switcher.
4. Migrate one form end to end using TanStack Form and Zod; verify server-side validation and authorization independently.
5. Add stable query keys and mutation invalidation around that same workflow.
6. Gradually migrate remaining pages, add typecheck/lint/build checks, and test protected routes and core user journeys.

## Verification criteria

- Route navigation works after refresh and deep linking.
- Frontend typecheck catches incompatible Hono RPC request changes.
- A protected API request fails for an unauthenticated or unauthorized user regardless of frontend route state.
- A migrated form exposes useful field-level and server errors.
- Query invalidation refreshes affected data after successful writes.
- All new components follow accessibility and responsive design conventions.

## References

- https://tanstack.com/router/latest/docs/framework/react/overview
- https://tanstack.com/query/latest/docs/framework/react/overview
- https://tanstack.com/form/latest/docs/framework/react/overview
- https://ui.shadcn.com/docs/forms/tanstack-form
- https://tanstack.com/router/latest/docs/how-to/integrate-shadcn-ui
