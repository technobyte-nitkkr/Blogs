// import authRoutes from "./router/auth.js";
import {Blog,Tag,Comments,User} from '../src/model/blogs.js'; //created a model for blog just for testing
function routes(app) {
    app.get("/", (req, res) => {
        res.send("Hello from server");
    });

    // app.use('/auth', authRoutes);
    app.get("/blogs/get/:id",(req,res)=>{
        const id_name=(req.params.id);
        Blog.findById(id_name)
        .populate('comments')  
        .populate('tags')
        .then((result) => {
            if(result){
                res.send(result)
            }
            else{
                res.send("oh Snap X(")
            }
        }).catch((err) => {
            res.send("Something went wrong!Couldn't get the blog ;(")
        });
    });
}

export default routes;