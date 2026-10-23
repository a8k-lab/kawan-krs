import { createFileRoute } from "@tanstack/react-router";

import { DosenLayout } from "../features/dosen/dosen-layout";

export const Route = createFileRoute("/dosen")({ component: DosenLayout });
