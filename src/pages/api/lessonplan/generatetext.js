import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.CHATGPT_API_KEY,
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    const content = req.body
    try {
      const chatCompletion = await openai.chat.completions.create({
        messages: [
          {
            role: "user",
            content: content,
          },
        ],
        model: "gpt-3.5-turbo",
      });

    //   console.log(chatCompletion.choices);
    //   // await openai.audio.translations

      res.status(200).json({ data: chatCompletion?.choices[0]?.message?.content });
    } catch (error) {
      console.log(error);
      res.status(500);
    }
  }
}
