const express = require("express");
const User = require("../models/user_schema");
const bcrypt = require("bcryptjs");

const home =async (req, res) => {
    try {
        res.status(200).json({message:"Home page is created"});
    }
    catch (err) {
        res.status(400).send({ msg: "error" });
    }
};

const register = async (req, res) => {
    try {

        // res.send("subhrat is great lovely boy!!");

        const { username, email, password } = req.body;

        console.log(req.body);

        const userExist = await User.findOne({ email });
        if (userExist) {   
            return res.status(400).send({ message: "user already exists!" });
        }
        
        // const saltRound = 10;
        // const hash_password = await bcrypt.hash(password,saltRound);

        const n = await User.create({ username, email, password});

        res.status(201).json({ msg: n, token: await n.generateToken(), userId: n._id.toString() });

    }

    catch (err) {
        console.log(err);
        next(err);
        // res.status(400).send({ msg: "err" });

    }
};
const login = async (req, res) => {
    try {

        const userExist = await User.findOne({ email: req.body.email });
        console.log(req.body);
        if (!userExist) {
            return res.status(400).send("Invalid credentials");
        }

        const passwordMatch = await bcrypt.compare(req.body.password, userExist.password,);
        if (!passwordMatch) {
            return res.status(400).send("Invalid password");
        }

        // Assuming generateToken is a method defined in your User model
        const token = await userExist.generateToken();

        res.status(200).json({ message: "Login successful", token: token, userId: userExist._id.toString() });
    }
    catch (err) {
        console.error(err);
        res.status(500).send({ error: "Internal Server Error" });
    }

};

module.exports = { home, register, login };

