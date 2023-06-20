// @ts-ignore
import tracker from '@middleware.io/agent-apm-nextjs';
// const tracker = require('@middleware.io/node-apm');

export function register() {

    tracker.track({
        projectName: "vercel-project-1000",
        serviceName: "vercel-service-1000",
        accountKey: "xusuusalpvush63ud7zcg8bi3mauuptds528",
        target: "vercel",
    });

    /*tracker.track({
        projectName: "ABCxyz-1004",
        serviceName: "ABCxyz-2004",
        accountKey: "xusuusalpvush63ud7zcg8bi3mauuptds528",
        target: "https://p2i13hg.middleware.io:443",
    });*/

    /*tracker.track({
        projectName:"Node1-1001",
        serviceName:"Node1-2001",
    })*/

    tracker.info("Twooo222211 TIME INSTRUMENTATION DONE with SECOND TRY..");
}