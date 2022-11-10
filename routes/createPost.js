const express = require("express");
const router = express.Router();
const firestore = require("firebase/firestore");

const db = firestore.getFirestore();

const createPostForm = `
<h1>Create Post</h1>
<form action="/create/submit">
    <div style="display: flex; flex-direction: column; max-width: 400px;"
        <label for="title">Title</label>
        <input type="text" name="title" placeholder="Title" />
        <label for="text">Text</label>
        <input type="text" name="text" placeholder="Text" />
        <label for="Name">Name</label>
        <input type="text" name="author" placeholder="Author" />
        <button type="submit">Submit</button>
</form>
`;



router.use((_, __, next)=>{
    next();
});

router.get("/", (req,res)=>{
    res.send(createPostForm);
})





router.get("/submit", (req,res)=>{
    const queryParams = req.query;
    const title = queryParams.title;
    const text = queryParams.text;
    const author = queryParams.author;
    // Create ID From Title
    const idFromTitle = title.replace(/\s+/g,"-").toLowerCase();
    // Submit post to Firebase
    const setBlogPost = firestore.setDoc(
        firestore.doc(db, "posts", idFromTitle),
        {
            title: title,
            text: text, 
            author: author
        }
    );

    setBlogPost
        .then((response) => {
            // if successful send correct message
            res.send(`
            <h1>Submission Successful</h1>
            <p><a href="/create">Add Another Post </a></p>
            <p><a href="/">Return Home</a></p>
            `)
        })
        .catch((errror)=>{
            console.warn(error);
            res.send(`Error Submitting: ${error.toString()}`);
        })
});

module.exports = router;