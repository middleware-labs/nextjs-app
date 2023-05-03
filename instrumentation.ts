// instrumentation.ts
// import { registerOTel } from '@vercel/otel'
import { NodeSDK } from '@opentelemetry/sdk-node'
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http'
import { Resource } from '@opentelemetry/resources'
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions'
import { SimpleSpanProcessor } from '@opentelemetry/sdk-trace-node'

export function register() {
    // registerOTel('vercel-testing-service-instrumentation')
    if (process.env.NEXT_RUNTIME === 'nodejs') {
        const sdk = new NodeSDK({
            resource: new Resource({
                [SemanticResourceAttributes.SERVICE_NAME]: 'tested-next-app-test122',
            }),
            spanProcessor: new SimpleSpanProcessor(new OTLPTraceExporter()),
        })
        sdk.start()
    }
}