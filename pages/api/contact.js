// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim === ""
    ) {
      res.status(422).json({ message: "Invalid Input. " });
      return;
    }

    //Store in a database

    const newMessage = {
      email,
      name,
      message,
    };

    console.log(newMessage);

    res.status(201).json({ message: "Success", result: newMessage });
  }

  res.status(200).json({ message: "Success" });
}
