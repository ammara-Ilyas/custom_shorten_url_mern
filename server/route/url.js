import { Router } from "express";
import express from "express";
import URL from "../models/urls.js";
import { handleUrl } from "../controllers/url.js";
import { handleShortUrl } from "../controllers/urlId.js";
import { handleURLAnalytic } from "../controllers/analytic.js";

const router = express.Router();
console.log("route");

router.get("/", async (req, res) => {
  const allUrls = await URL.find();
  //   console.log("urls", allUrls);

  res.json(allUrls);
});

router.post("/url", handleUrl);

router.post("/analytic/:shortId", handleURLAnalytic);

router.get("/:shortId", handleShortUrl);

export default router;
