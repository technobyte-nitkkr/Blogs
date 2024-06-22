// import authRoutes from "./router/auth.js";
import blog  from "../src/model/blogs.js"; //created a model for blog just for testing
function routes(app) {
    app.get("/", (req, res) => {
        res.send("Hello from server");
    });

    // app.use('/auth', authRoutes);
    app.get("/blogs/get/:id",(req,res)=>{
        const id_name=(req.params.id);
        blog.findById(id_name).then((result) => {
            if(result){
                res.send(result)
            }
        }).catch((err) => {
            res.send("Something went wrong!Couldn't get the blog ;(")
        });
    });
}

export default routes;