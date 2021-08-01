// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { MongoClient } from "mongodb";

export default async function handler(req, res) {
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

    let client;

    try {
      client = await MongoClient.connect(
        "mongodb+srv://thetooaung:thetooaung@cluster0.uclkr.mongodb.net/next-blog?retryWrites=true&w=majority"
      );
    } catch (error) {
      res.status(500).json({
        message:
          "Something went wrong on the server. Could not connect to the database",
      });
    }

    const db = client.db();

    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage._id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Storing Message failed!" });
      return;
    }
    client.close();
    res.status(201).json({ message: "Success", result: newMessage });
  }

  // res.status(200).json({ message: "Success" });
}
