import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, resp) => {
    try {
        const postMessages = await PostMessage.find();

        resp.status(200).json(postMessages);
    } catch (error){
        resp.status(404).json({message: error.message})
    }
};

export const createPost = (req, resp) => {
    resp.send('Post Creation')
}