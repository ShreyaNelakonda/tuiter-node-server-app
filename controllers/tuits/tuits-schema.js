import mongoose from 'mongoose';
const schema = mongoose.Schema({
    topic: String,
    userName: String,
    time: String,
    title: String,
    image: String,
    liked: Boolean,
    disliked: Boolean,
    replies: Number,
    retuits: Number,
    likes: Number,
    dislikes: Number,
    handle: String,
    tuit: String,
},
{collection: 'tuits'});
export default schema;