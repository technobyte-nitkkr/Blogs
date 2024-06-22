//dummy schema for blog
import mongoose from "mongoose";
const blogs=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    image:{
        data:Buffer,
        type:String,
        required:true
    },
})

const Blog = mongoose.model('Blogs', blogs);

export default Blog;