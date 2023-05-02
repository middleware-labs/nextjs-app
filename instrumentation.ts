// instrumentation.ts
import { registerOTel } from '@vercel/otel'

export function register() {
    registerOTel('vercel-testing-service-instru')
}