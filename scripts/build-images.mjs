import sharp from 'sharp'
import { readFileSync, writeFileSync } from 'node:fs'

const bg = [0x12, 0x3b, 0x35]
const logo = await sharp('public/images/logo.png').png({ compressionLevel: 9, palette: true }).toBuffer()
writeFileSync('public/images/logo.png', logo)

const raw = await sharp('public/images/logo.png').ensureAlpha().raw().toBuffer({ resolveWithObject: true })
const { data, info } = raw
for (let i = 0; i < data.length; i += 4) {
  data[i] = Math.round(255 - ((255 - data[i]) * (255 - bg[0])) / 255)
  data[i + 1] = Math.round(255 - ((255 - data[i + 1]) * (255 - bg[1])) / 255)
  data[i + 2] = Math.round(255 - ((255 - data[i + 2]) * (255 - bg[2])) / 255)
  data[i + 3] = 255
}
const logoForest = await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } }).png().toBuffer()
writeFileSync('public/images/logo-forest.png', logoForest)

await sharp(logoForest).resize(32, 32).png().toFile('public/icon.png')
await sharp(logoForest).resize(180, 180).png().toFile('public/apple-icon.png')

const cups = await sharp('public/images/cups.png').png({ compressionLevel: 9 }).toBuffer()
writeFileSync('public/images/cups.png', cups)

const logoB64 = logoForest.toString('base64')
const og = Buffer.from(`
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <rect width="1200" height="630" fill="#123b35"/>
  <image x="420" y="70" width="360" height="360" href="data:image/png;base64,${logoB64}"/>
  <text x="600" y="490" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="44" fill="#eee5d7">Good coffee. Good company.</text>
  <text x="600" y="545" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="18" letter-spacing="6" fill="#c7a06a">MY SOUL KUWAIT · ZAMALEK, CAIRO</text>
</svg>`)
await sharp(og).png().toFile('public/og.png')
console.log('done')
