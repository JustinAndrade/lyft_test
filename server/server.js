const express = require("express");
const server = express();

const modify = (request) => {
  let string = "";
  for (let i = 2; i < request.length; i += 3) {
    string += request[i];
  }
  return string;
};

server.use(express.json());

server.get("/", (req, res) => {
  res
    .status(200)
    .json({
      message: "Hire me and you won't regret it I promise! - Justin Andrade",
    });
});

server.post("/test", async (req, res) => {
  try {
    const { string_to_cut } = req.body;
    if (!string_to_cut) {
      res.status(422).json({ message: '"string_to_cut" required key in body' });
    }
    const return_string = modify(await string_to_cut);
    res.status(201).json({ return_string });
  } catch (err) {
    console.log(err);
  }
});

module.exports = server;
