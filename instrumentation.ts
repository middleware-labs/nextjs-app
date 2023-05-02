// instrumentation.ts
import { registerOTel } from '@vercel/otel'

export function register() {
    console.log("here came...");
    registerOTel('vercel-testing-service-instrumentation')
}