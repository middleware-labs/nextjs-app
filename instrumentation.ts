// instrumentation.ts
// import { registerOTel } from '@vercel/otel'
'use strict';
import { Resource } from "@opentelemetry/resources";
import { SemanticResourceAttributes } from "@opentelemetry/semantic-conventions";
import { NodeTracerProvider, SimpleSpanProcessor } from "@opentelemetry/sdk-trace-node";
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-http";
import process from 'process';

export function register() {
    /*track({
        ser
        pro
        source: 'vercel'
    })*/
    // registerOTel('vercel-testing-service-instrumentation')
    if (process.env.NEXT_RUNTIME === 'nodejs') {
        const resourceAttributes = {
            [SemanticResourceAttributes.SERVICE_NAME]: 'service-name-12',
            ['mw_agent']: true,
            ['project.name']: 'project-name-12',
        };

        const provider = new NodeTracerProvider({
            resource: new Resource(resourceAttributes),
        });

        provider.register();

        provider.addSpanProcessor(new SimpleSpanProcessor(new OTLPTraceExporter(
            {}
        )));

        return provider;
    }
}