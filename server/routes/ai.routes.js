const express = require("express");
const openAI = require("../openAI/openAI.js");

const aiRoutes = express.Router();

aiRoutes.post("", async (req, res) => {
  const message = req.body.body;
  try {
    const response = await openAI.createCompletion({
      model: "text-davinci-003",
      prompt: `${message}`,
      max_tokens: 10,
      temperature: 0,
    });
    console.log(response.data);
    if (!response.data.choices[0].text)
      throw Error("oops.. something went wrong. please try again");
    res.json({ message: response.data.choices[0].text });
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
});

module.exports = aiRoutes;
