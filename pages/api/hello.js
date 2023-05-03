// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { trace, context } from '@opentelemetry/api'
import { Resource } from '@opentelemetry/resources'
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions'
import {
    BasicTracerProvider,
    ConsoleSpanExporter,
    SimpleSpanProcessor,
} from '@opentelemetry/sdk-trace-base'
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http'

const provider = new BasicTracerProvider({
    resource: new Resource({
        [SemanticResourceAttributes.SERVICE_NAME]: 'next-app',
    }),
})

provider.addSpanProcessor(new SimpleSpanProcessor(new OTLPTraceExporter()))
provider.addSpanProcessor(new SimpleSpanProcessor(new ConsoleSpanExporter()))
provider.register()
const tracer = trace.getTracer("next-app-tracer");


export default async function handler(req, res) {
    const span = tracer.startSpan("handler", undefined, context.active());
    const ms = Math.floor(Math.random() * 1000);
    span.setAttribute("sleep", ms);
    await new Promise((resolve) => setTimeout(resolve, ms));
    res.status(200).json({ greetings: `Hi there ${ms}!` });
    span.end();
}
