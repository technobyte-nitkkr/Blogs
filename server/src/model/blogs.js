// models.js

import mongoose, { Schema } from "mongoose";
import User from "./user.js"; 

// Define the Tag schema
const tagSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

// Define the Comment schema
const commentSchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  content: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// Define the Blog schema
const blogsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  tags: [{
    type: Schema.Types.ObjectId,
    ref: 'Tag',
    default:null
  }],
  image: {
    type: String,
    required: true
  },
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'Comments',
    default:null
  }],
  review: {
    type: String,
    enum: ['pending', 'approved', 'update'],
    default: 'pending'
  },
  reviewMessage: {
    type: String,
    default: null
  }
});

const Blog = mongoose.model('Blog', blogsSchema);
const Comments = mongoose.model('Comments', commentSchema);
const Tag = mongoose.model('Tag', tagSchema);

export { Blog, Tag, Comments, User };
