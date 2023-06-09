import tracker from '@middleware.io/agent-apm-nextjs';

export default async function handler(req, res) {
    tracker.info("TESTING INFO FROM HELLO API.");
    tracker.error("TESTING ERROR FROM HELLO API.");
    tracker.warn("TESTING WARN FROM HELLO API.", {
        "tester": "Jagrut123",
    });
    tracker.debug("TESTING DEBUG FROM HELLO API.");

    const ms = Math.floor(Math.random() * 1000);
    res.status(200).json({ greetings: `Hello There.. ${ms}-${globalThis.message}` });

    // span.end();
}
