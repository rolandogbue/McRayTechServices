import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import { SitemapStream, streamToPromise } from "sitemap";
import { writeFileSync } from "fs";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.VITE_SUPABASE_ANON_KEY,
);

const BASE_URL = "https://mcraytechservices.com";

const staticRoutes = [
  "/",
  "/about",
  "/case-study",
  "/blog",
  "/faq",
  "/contact",
];

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: BASE_URL });

  // Static pages
  staticRoutes.forEach((route) => {
    sitemap.write({
      url: route,
      changefreq: "weekly",
      priority: route === "/" ? 1.0 : 0.7,
    });
  });

  // Dynamic blog posts
  const { data: posts } = await supabase
    .from("blog_posts")
    .select("slug, updated_at")
    .eq("published", true);

  posts?.forEach((post) => {
    sitemap.write({
      url: `/blog/${post.slug}`,
      lastmod: post.updated_at,
      changefreq: "weekly",
      priority: 0.8,
    });
  });

  sitemap.end();

  const sitemapOutput = await streamToPromise(sitemap);
  writeFileSync("./public/sitemap.xml", sitemapOutput.toString());
}

generateSitemap();
