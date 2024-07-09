import express from 'express';
import authRoutes from "./router/auth.js";
import newsletterRoutes from "./router/newsletter.js";

const router=express.Router();

function routes(app) {
    app.get("/", (req, res) => {
        res.send("Hello from server");
    });
    
    app.use('/auth', authRoutes);
    app.use('/admin',newsletterRoutes);
}


export default routes;
