const express = require("express");
const cors = require("cors");
const usersauth = require("./mongo");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post("/", async (req, res) => {
    const { email, password } = req.body;

    if (!password) {
        return res.json({ success: false, message: "Password is required" });
    }

    try {
        const user = await usersauth.findOne({ email: email });

        if (user) {
            if (user.password === password) {
                return res.json({ success: true, username: user.name });
            } else {
                return res.json({ success: false, message: "Invalid password" });
            }
        } else {
            return res.json({ success: false, message: "User does not exist" });
        }
    } catch (error) {
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
        gender
    };

    try {
        const check = await usersauth.findOne({ email: email });

        if (check) {
            return res.json("exist");
        } else {
            await usersauth.insertMany([data]);
            return res.json("notexist");
        }
    } catch (e) {
        return res.json("fail");
    }
});

app.listen(8000, () => {
    console.log("port connected");
});
