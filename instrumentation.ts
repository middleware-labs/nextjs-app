// instrumentation.ts
// @ts-ignore
import tracker from '@middleware.io/agent-apm-nextjs';
// import { registerOTel } from '@vercel/otel'

export function register() {
    // registerOTel('next-app')
    /*tracker.track({
        projectName: "vercel-mw-test-project",
        serviceName: "vercel-mw-test-service",
        target: "https://lveha.front.env.middleware.io:443",
        accountKey: "kyrqzxybzmqfoaoqwclrposbacczzfgztpmk"
    });*/
    tracker.track({
        projectName: "vercel-project-1000",
        serviceName: "vercel-service-1000",
        accountKey: "kyrqzxybzmqfoaoqwclrposbacczzfgztpmk",
        target: "vercel",
    });

    tracker.info("One time INSTRUMENTATION DONE");
}