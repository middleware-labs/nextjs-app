// @ts-ignore
import tracker from '@middleware.io/agent-apm-nextjs';

export function register() {

    /*tracker.track({
        projectName: "vercel-mw-test-project",
        serviceName: "vercel-mw-test-service",
        target: "https://lveha.front.env.middleware.io:443",
        accountKey: "kyrqzxybzmqfoaoqwclrposbacczzfgztpmk"
    });*/

    tracker.track({
        projectName: "vercel-project-1000",
        serviceName: "vercel-service-1000",
        accountKey: "xusuusalpvush63ud7zcg8bi3mauuptds528",
        target: "vercel",
    });

    tracker.info("ONE TIME INSTRUMENTATION DONE");
}