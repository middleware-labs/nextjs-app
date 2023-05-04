// instrumentation.ts
// @ts-ignore
import { track } from '@middleware.io/agent-apm-nextjs';
// import { registerOTel } from '@vercel/otel'

export function register() {
    // registerOTel('next-app')
    /*track({
        projectName: "vercel-mw-test-project",
        serviceName: "vercel-mw-test-service",
        target: "https://4ef1-59-144-126-168.ngrok-free.app:443",
        accountKey: "vgvilfnfntfhvsnercuzlsemoiavrnvxbhcb"
    });*/

    track({
        projectName: "vercel-deployed-project222",
        serviceName: "vercel-deployed-service222",
        target: "vercel",
    });
}