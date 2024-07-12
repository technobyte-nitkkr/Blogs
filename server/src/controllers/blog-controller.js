import Blog from '../model/blog.js';

export const updateBlog = async(req,res) =>{
    try
    {
        const id=req.params.id;
        const title=req.params.title;
        const content=req.params.content;
        const image=req.params.image;
        let data={}
        if (title!==undefined)
        {
            data.title=title;
        }
        if (content!==undefined)
        {
            data.content=content;
        }
        if (title!==undefined)
        {
             data.image=image;
        }
        const blogtobeupdated= await Blog.findByIdAndUpdate
        (
            id,
            data,
            {new: true, runValidators:true}
        );
        if (!blogtobeupdated)
        {
            return res.status(404).json({message:"Blog not found!"})
        }

        return res.status(200).json({message:'Blog Updated Successfully!'})

    }
    catch(error)
    {
        return res.status(500).json({message:"Error while updating Blog",error: error.message})
    }
}