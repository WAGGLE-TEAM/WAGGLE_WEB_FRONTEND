require("dotenv").config();

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    env: {
        STAGE: process.env.NEXT_PUBLIC_RUN_MODE
    }
  }
  
  export default nextConfig;