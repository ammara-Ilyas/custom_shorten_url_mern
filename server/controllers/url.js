import { nanoid } from "nanoid";
import URL from "../models/urls.js";

export const handleUrl = async (req, res) => {
  // console.log("body", req.body);
  const body = req.body;

  if (!body.url) {
    return res.status(400).json({ msg: "URL is required" });
  } else {
    try {
      const urlExist = await URL.findOne({ redirectURL: body.url });
      console.log("url", urlExist);

      if (urlExist) {
        return res.json(urlExist);
      } else {
        const shortid = nanoid(8);
        const newUrl = await URL.create({
          shortId: shortid,
          redirectURL: body.url,
          visitHistory: [],
        });
        console.log("url in controller");

        res.json(newUrl);
      }
    } catch (error) {
      console.error("Error creating URL:", error.message);
      console.error("Stack Trace:", error.stack);
      res.status(500).json({ msg: "Internal server error" });
    }
  }
};
