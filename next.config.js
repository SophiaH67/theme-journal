const withPWA = require("next-pwa");

/** @type {import('next').NextConfig} */
let nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["lh3.googleusercontent.com", "source.unsplash.com"],
  },
};

nextConfig = withPWA({
  ...nextConfig,
  pwa: {
    dest: "public",
    runtimeCaching: [
      {
        urlPattern: /^https:\/\/fonts\.googleapis\.com/,
        handler: "CacheFirst",
        options: {
          cacheName: "google-fonts-stylesheets",
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 60 * 60 * 24 * 30, // 1 month
          },
        },
      },
      {
        urlPattern: /^https:\/\/fonts\.gstatic\.com/,
        handler: "CacheFirst",
        options: {
          cacheName: "google-fonts-webfonts",
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 60 * 60 * 24 * 30, // 1 month
          },
        },
      },
      {
        // All images go cache-first
        urlPattern: /\.(?:png|jpg|jpeg|svg|gif)$/,
        handler: "CacheFirst",
        options: {
          cacheName: "images",
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 60 * 60 * 24 * 30, // 1 month
          },
        },
      },
      {
        // All css, js go cache-first
        urlPattern: /\.(?:js|css)$/,
        handler: "CacheFirst",
        options: {
          cacheName: "static-resources",
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 60 * 60 * 24, // 1 day in case I messed up
          },
        },
      },
      {
        // Firebase calls go network-only
        urlPattern: /^https:\/\/firestore\.googleapis\.com/,
        handler: "NetworkOnly",
        options: {
          cacheName: "firebase-firestore",
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 1, // 1 second
          },
        },
      },
      {
        // All other requests go network-first
        urlPattern: /^https?:\/\/.*/,
        handler: "NetworkFirst",
        options: {
          cacheName: "other",
          expiration: {
            maxEntries: 100,
            maxAgeSeconds: 60 * 60 * 24 * 30, // 1 month
          },
        },
      },
    ],
  },
});

module.exports = nextConfig;
