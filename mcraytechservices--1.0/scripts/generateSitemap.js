import { SitemapStream, streamToPromise } from "sitemap";
import { writeFileSync } from "fs";

const sitemap = new SitemapStream({
  hostname: "https://mcraytechservices.com",
});

const routes = ["/", "/about", "/blog", "/faq", "/contact"];

async function generateSitemap() {
  routes.forEach((route) => {
    sitemap.write({
      url: route,
      changefreq: "weekly",
      priority: route === "/" ? 1.0 : 0.7,
    });
  });

  sitemap.end();

  const sitemapOutput = await streamToPromise(sitemap);

  writeFileSync("./public/sitemap.xml", sitemapOutput.toString());
}

generateSitemap();
