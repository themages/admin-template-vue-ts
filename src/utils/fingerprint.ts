import FingerprintJS from '@fingerprintjs/fingerprintjs'
import type { GetResult, Agent } from '@fingerprintjs/fingerprintjs'
export async function fingerprint (): Promise<string> {
  const fpPromise = FingerprintJS.load({ monitoring: false })
  return await fpPromise
    .then(async (fp: Agent): Promise<GetResult> => await fp.get())
    .then((result: GetResult) => {
      return result.visitorId
    })
    .catch(() => '')
}
