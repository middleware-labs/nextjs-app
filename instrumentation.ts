// instrumentation.ts
// @ts-ignore
import { track } from '@middleware.io/agent-apm-nextjs';
// import { registerOTel } from '@vercel/otel'

export function register() {
    // registerOTel('next-app')
    /*track({
        projectName: "vercel-mw-test-project",
        serviceName: "vercel-mw-test-service",
        target: "https://dc5d-59-144-126-168.ngrok-free.app:443",
        accountKey: "vgvilfnfntfhvsnercuzlsemoiavrnvxbhcb"
    });*/

    track({
        projectName: "vercel-project-311",
        serviceName: "vercel-service-311",
        target: "vercel",
    });
}