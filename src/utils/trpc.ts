import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "~/server/api/root";

// Create the client-side tRPC hooks
export const trpc = createTRPCReact<AppRouter>();