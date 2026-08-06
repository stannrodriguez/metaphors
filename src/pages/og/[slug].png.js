import sharp from 'sharp'
import { GET as renderSvg, getStaticPaths } from './[slug].svg.js'

export { getStaticPaths }

export async function GET(context) {
  const svg = renderSvg(context)
  const png = await sharp(Buffer.from(await svg.arrayBuffer()))
    .png({ compressionLevel: 9 })
    .toBuffer()

  return new Response(png, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  })
}
