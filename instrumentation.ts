// @ts-ignore
import tracker from '@middleware.io/agent-apm-nextjs';

export function register() {

    tracker.track({
        projectName: "vercel-project-1000",
        serviceName: "vercel-service-1000",
        accountKey: "xusuusalpvush63ud7zcg8bi3mauuptds528",
        target: "vercel",
    });

    /*tracker.track({
        projectName: "ABC-1",
        serviceName: "ABC-2",
        accountKey: "xusuusalpvush63ud7zcg8bi3mauuptds528",
        target: "https://p2i13hg.middleware.io:443",
    });*/

    tracker.info("ONE TIME INSTRUMENTATION DONE with SECOND TRY..");
}