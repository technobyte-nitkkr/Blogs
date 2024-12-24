import User from "../model/user.js";
import transporter from "../config/nodemailer.js";

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({ newsletterIsSubscribed: true });
    console.log("Fetched subscribed users:", users);
    res.send(users);
  } catch (error) {
    console.error("Error fetching subscribed users:", error);
    res.status(500).json({ message: "Failed to fetch subscribed users." });
  }
};

const sendMailToSubscribedUsers = async (req, res) => {
  try {
    const { subject, body } = req.body;
    console.log(
      "Received newsletter request with subject:",
      subject,
      "and body:",
      body
    );

    const SubscribedUsers = await User.find({ newsletterIsSubscribed: true });
    if (!SubscribedUsers || SubscribedUsers.length == 0) {
      console.log("No subscribed user found");
      return res.status(404).json({ message: "No subscribed user found" });
    }

    const recipients = SubscribedUsers.map((user) => user.email);
    console.log("Sending newsletter to recipients:", recipients);

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: " ",
      bcc: recipients.join(" "),
      subject: subject,
      text: body,
    });

    console.log("Newsletter sent successfully!");
    res.status(200).json({ message: "Newsletter sent successfully!" });
  } catch (error) {
    console.error("Error sending newsletter:", error);
    res.status(500).json({ message: "Failed to send newsletter." });
  }
};

export { getAllUsers, sendMailToSubscribedUsers };
