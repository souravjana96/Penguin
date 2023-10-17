// pages/api/lessonplan/transcript.js

import formidable from "formidable"; // Import the 'formidable' library for parsing form data
import fs from "fs"; // Import the 'fs' module for file handling
import OpenAI from "openai";
// import fetch from 'node-fetch';

const openai = new OpenAI({
  apiKey: process.env.CHATGPT_API_KEY,
});
export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10mb",
    },
  },
};

const getText = async (fileStream) => {
  const transcription = await openai.audio.translations.create({
    file: fileStream,
    model: "whisper-1",
  });
//   console.log("Transcription", transcription);
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    // const body = JSON.parse(req.body)
    const { blobUrl } = req.body;
    // console.log("Req.body", blobUrl);
    
    res.send("Audio data received and processed successfully");
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}

