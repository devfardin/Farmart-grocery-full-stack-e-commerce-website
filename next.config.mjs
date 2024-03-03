/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol: 'https',
                hostname: 'farmart.botble.com'
            }
        ]
    }
};

export default nextConfig;
