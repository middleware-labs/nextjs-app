// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { trace, context } from '@opentelemetry/api'
const tracer = trace.getTracer("next-app-tracer");

export default async function handler(req, res) {
    const span = tracer.startSpan("helloHandler", {
        attributes: {
            "http.method": req.method,
            "http.url": req.url,
        },
    }, context.active());
    const ms = Math.floor(Math.random() * 1000);
    // span.setAttribute("sleep", ms);
    // await new Promise((resolve) => setTimeout(resolve, ms));

    res.status(200).json({ greetings: `Hi there ${ms}!` });

    span.end();
}
