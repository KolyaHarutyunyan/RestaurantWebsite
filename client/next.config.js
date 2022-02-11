const withPlugins = require("next-compose-plugins");
const withPWA = require("next-pwa");

const withMDX = require("@next/mdx")({
    extension: /\.mdx?$/,
});
const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
});
module.exports = withPlugins([[withBundleAnalyzer], [withMDX], [withPWA]], {
    pageExtensions: ["js", "jsx", "md", "mdx"],
    future: {
        webpack5: true,
    },
    webpack: (config, { dev, isServer }) => {
        config.module.rules.push({
            test: /\.(png|jpe?g|gif|mp4)$/i,
            use: [
                {
                    loader: "file-loader",
                    options: {
                        publicPath: "/_next",
                        name: "static/media/[name].[hash].[ext]",
                    },
                },
            ],
        });

        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"],
        });

        module.exports = withPWA({
            pwa: {
                dest: "public",
                register: true,
                skipWaiting: true,
                disable: process.env.NODE_ENV === "development",
            },
        });


        return config;
    },
});