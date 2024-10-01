/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
      // Add a rule to handle video files
      config.module.rules.push({
        test: /\.(mp4|webm|ogg|ogv|mov|avi|flv|wmv)$/,
        use: {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/videos/',
            outputPath: `${isServer ? '../' : ''}static/videos/`,
            name: '[name].[hash].[ext]',
          },
        },
      });
  
      return config;
    },
  };
  
  export default nextConfig;