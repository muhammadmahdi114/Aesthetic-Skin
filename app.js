const express = require("express");
const cors = require("cors");
const usersauth = require("./src/models/mongo"); 
const bcrypt = require("bcryptjs");
const cookieParser = require("cookie-parser");
const session = require('express-session');
const Comment = require("./src/models/comments");
const Blog = require("./src/models/blog");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

app.use(session({
    secret: 'shhh',
    resave: false,
    saveUninitialized: false, 
    cookie: {
        maxAge: 24 * 60 * 60 * 1000, // 1 day
        httpOnly: true,
        secure: false,
    }
}));

app.post("/", async (req, res) => {
    const { email, password } = req.body;
    if (!password) {
        return res.json({ success: false, message: "Password is required" });
    }
    try {
        const user = await usersauth.findOne({ email });
        if (user && await bcrypt.compare(password, user.password)) {
            req.session.userId = user._id;
            return res.status(200).json({
                success: true,
                username: user.name,
            });
        } else {
            return res.json({ success: false, message: "Invalid email or password" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
});

app.post("/signup", async (req, res) => {
    const { name, email, password, age, gender } = req.body;

    const data = {
        name,
        email,
        password,
        age,
        gender,
        cart: [],
        wishlist: [],
    };

    try {
        const check = await usersauth.findOne({ email: email });

        if (check) {
            return res.json("exist");
        } else {
            const EncPassword = await bcrypt.hash(password, 10);
            const user = await usersauth.create({
                name,
                email,
                password: EncPassword,
                age,
                gender,
                cart: data.cart,
                wishlist: data.wishlist,
            });
            req.session.userId = user._id; // Store user's _id in session

            res.status(201).json(user);
            return;
        }
    } catch (error) {
        console.error(error);
        res.json("fail");
        return;
    }
});

app.post("/add-comment", async (req, res) => {
    const { text, userName } = req.body;
    if (!userName) {
        return res.status(401).json({ success: false, message: "Unauthorized" });
    }
    try {
        const newComment = new Comment({
            text,
            userName,
            createdAt: new Date()
        });
        await newComment.save();
        return res.status(201).json({ success: true, comment: newComment });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
});

app.get("/comments", async (req, res) => {
    try {
        const comments = await Comment.find().sort({ createdAt: -1 });
        return res.status(200).json({ success: true, comments });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
});

app.post("/add-blog", async (req, res) => {
    const { title, content, author } = req.body;
    if (!author) {
        return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    try {
        const newBlog = new Blog({
            title,
            content,
            author,
            createdAt: new Date()
        });
        await newBlog.save();
        return res.status(201).json({ success: true, blog: newBlog });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
});

app.get("/blogs", async (req, res) => {
    try {
        const blogs = await Blog.find().sort({ createdAt: -1 });
        return res.status(200).json({ success: true, blogs });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
});

app.listen(8000, () => {
    console.log("Server is running on port 8000");
});
