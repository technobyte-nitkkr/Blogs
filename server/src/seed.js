import mongoose from "mongoose";
import Blog from "./model/blog.js";
import Comment from "./model/comment.js";
import Tag from "./model/tags.js";
import User from "./model/user.js";

const MONGODB_URI = "";

async function seedDatabase() {
  try {
    // Connect to the database
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    // Clear existing data
    await Blog.deleteMany({});
    await Comment.deleteMany({});
    await Tag.deleteMany({});
    await User.deleteMany({});
    console.log("Cleared existing data");

    // Insert Users
    const users = await User.insertMany([
      {
        email: "john.doe@example.com",
        name: "John Doe",
        role: "user",
        newsletterIsSubscribed: true,
        gAuth: { provider: "google", id: "123456789" },
      },
      {
        email: "jane.admin@example.com",
        name: "Jane Admin",
        role: "admin",
        newsletterIsSubscribed: false,
      },
    ]);
    console.log("Inserted Users:", users);

    // Insert Tags
    const tags = await Tag.insertMany([
      { name: "Technology" },
      { name: "Programming" },
      { name: "LifeStyle" },
    ]);
    console.log("Inserted Tags:", tags);

    // Insert Blogs
    const blogs = await Blog.insertMany([
      {
        title: "Introduction to MongoDB",
        content: "MongoDB is a NoSQL database...",
        image: "https://example.com/image1.jpg",
        review: "approved",
        reviewMessage: "Well-written!",
        tags: [tags[0]._id, tags[1]._id],
        description: "A beginner's guide to MongoDB.",
      },
      {
        title: "Top 10 Programming Tips",
        content: "Here are the top 10 tips...",
        image: "https://example.com/image2.jpg",
        review: "pending",
        tags: [tags[1]._id],
        description: "Enhance your coding skills with these tips.",
      },
    ]);
    console.log("Inserted Blogs:", blogs);

    // Insert Comments
    const comments = await Comment.insertMany([
      {
        content: "Great post! Very informative.",
        blog: blogs[0]._id,
        user: users[0]._id,
      },
      {
        content: "Looking forward to more posts like this.",
        blog: blogs[1]._id,
        user: users[1]._id,
      },
    ]);

    // Add comments to blogs
    blogs[0].comments.push(comments[0]._id);
    blogs[1].comments.push(comments[1]._id);
    await blogs[0].save();
    await blogs[1].save();

    console.log("Inserted Comments:", comments);

    console.log("Database seeding completed successfully!");
  } catch (error) {
    console.error("Error seeding the database:", error);
  } finally {
    // Close the connection
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  }
}

seedDatabase();
