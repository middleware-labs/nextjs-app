// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { trace } from '@opentelemetry/api'
export default function handler(req, res) {
  return trace
      .getTracer('nextjs-example')
      .startActiveSpan('handler', async (span) => {
        try {
          res.status(200).json({ name: 'John Doe' })
        } finally {
          span.end()
        }
      })
}
