// @ts-ignore
import tracker from '@middleware.io/agent-apm-nextjs';
// const tracker = require('@middleware.io/node-apm');

export function register() {

    tracker.track({
        projectName: "vercel-project-61",
        serviceName: "vercel-service-62",
        accessToken: "xusuusalpvush63ud7zcg8bi3mauuptds528",
        target: "vercel",
    });

    /*tracker.track({
        projectName: "ABCxyz-1008",
        serviceName: "ABCxyz-2008",
        accountKey: "xusuusalpvush63ud7zcg8bi3mauuptds528",
        target: "https://p2i13hg.middleware.io:443",
    });*/

    // https://app.stage.env.middleware.io/api/v1/auth
    // https://profiling.stage.env.middleware.io
    // MW_AUTH_URL=https://app.stage.env.middleware.io/api/v1/auth MW_PROFILING_SERVER_URL=https://profiling.stage.env.middleware.io  npm run dev

    /*tracker.track({
        projectName: "profiling-matters-51",
        serviceName: "profiling-matters-52",
        accessToken: "deoorojzrgpsvihfcgkcsvhrwnmzqeahvhou",
        target: "https://deofs.stage.env.middleware.io:443",
    });*/

    /*tracker.track({
        projectName:"Node1-1001",
        serviceName:"Node1-2001",
    })*/

    tracker.info("Profiling matter continues...123");
}