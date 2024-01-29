const express = require("express");
const path = require("path");
const fs = require("fs");
import { getPostById } from "../src/routes/Routes";

const app = express();

const PORT = process.env.PORT || 5000;
const indexPath = path.resolve(__dirname, "..", "build", "index.html");

// static resources should just be served as they are
if (process.env.NODE_ENV === "production") {
  app.use(
    express.static(path.resolve(__dirname, "..", "build"), { maxAge: "30d" })
  );

  // here we serve the index.html page
  app.get("/*", (req, res, next) => {
    fs.readFile(indexPath, "utf8", (err, htmlData) => {
      if (err) {
        console.error("Error during file reading", err);
        return res.status(404).end();
      }

      // get post info
      const postId = req.query.id;
      const post = getPostById(postId);
      if (!post) return res.status(404).send("Post not found");

      // inject meta tags
      htmlData = htmlData
        .replace(
          '<meta property="og:title" content="__META_OG_TITLE__">',
          `<meta property="og:title" content="${post.title}">`
        )
        .replace(
          '<meta name="description" content="__META_DESCRIPTION__">',
          `<meta name="description" content="${post.description}">`
        );
      return res.send(htmlData);
    });
  });
} else {
  // In development, use Vite's middleware
  const vite = require("vite");
  (async () => {
    const viteApp = await vite.createServer({
      root: __dirname,
      server: {
        middlewareMode: "ssr", // Use 'ssr' mode for JSX files
      },
    });
    // listening...
    app.listen(PORT, (error) => {
      if (error) {
        return console.log("Error during app startup", error);
      }
      console.log("listening on " + PORT + "...");
    });
  })();
}
