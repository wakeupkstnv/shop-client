/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      'picsum.photos',
      'i.imgur.com',
      'images.samsung.com',
      'store.storeimages.cdn-apple.com',
      'fdn2.gsmarena.com',
      'p1-ofp.static.pub',
      'dlcdnwebimgs.asus.com',
      'gmedia.playstation.com',
      'kz.jbl.com',
      'dyson-h.assetsadobe2.com',
      'images.philips.com',
      'static.nike.com',
      'assets.adidas.com',
      'static.canon.com.ru',
      'stormsend1.djicdn.com',
      'assets.bose.com',
      'resource.logitech.com',
      'www.ikea.com'
    ],
    unoptimized: true,
  },
}

export default nextConfig
