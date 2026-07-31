import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Serve os arquivos diretamente. O otimizador do Cloudflare depende dos
  // bindings ASSETS/IMAGES, que não existem no servidor local do `vinext dev`.
  // As imagens do site já estão dimensionadas e usam loading="lazy".
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
