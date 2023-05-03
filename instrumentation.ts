// instrumentation.ts
// @ts-ignore
import { track } from '@middleware.io/agent-apm-nextjs';

export function register() {
    track({
        projectName: "vercel-mw-test-project",
        serviceName: "vercel-mw-test-service",
        target: "vercel"
    });
}