import { NextSeoProps } from "next-seo";

// eslint-disable-next-line import/no-anonymous-default-export
const SEO: NextSeoProps = {
  openGraph: {
    type: "website",
    locale: "en_US",
    site_name: "Poetic Stardust",
  },
  additionalLinkTags: [
    {
      rel: "manifest",
      href: "/manifest.json",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/ios/180.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "152x152",
      href: "/ios/152.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "167x167",
      href: "/ios/167.png",
    },
    {
      rel: "preconnect",
      href: "https://theme-system-journal-next.firebaseapp.com",
    },
    {
      rel: "preconnect",
      href: "https://apis.google.com",
    },
  ],
  additionalMetaTags: [
    {
      name: "theme-color",
      content: "#60a5fa",
    },
  ],
  canonical: "https://poetic-stardust-235069.netlify.app",
  title: "Poetic Stardust",
  description: "An app that helps you keep track of and achieve your goals.",
  twitter: {
    handle: "@marnixah",
  },
};

export default SEO;
