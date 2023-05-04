// instrumentation.ts
// @ts-ignore
import { track } from '@middleware.io/agent-apm-nextjs';

export function register() {

    /*track({
        projectName: "vercel-mw-test-project",
        serviceName: "vercel-mw-test-service",
        target: "https://4ef1-59-144-126-168.ngrok-free.app:443",
        accountKey: "vgvilfnfntfhvsnercuzlsemoiavrnvxbhcb"
    });*/

    track({
        projectName: "vercel-mw-test-project",
        serviceName: "vercel-mw-test-service",
        target: "vercel",
    });
}