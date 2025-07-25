import mongoose from "mongoose";
import express from 'express'
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import User from "../models/users.js";
import jwt from "jsonwebtoken";

const router = express.Router()



// sign up 
router.post('/signup', async (req, res) => {

    try {
        const { username, email, password } = req.body
        const findExistingEmail = await User.findOne({email});
        const findExistingUsername = await User.findOne({username});

        // return already exists message if email or username already in the database

        if (findExistingEmail || findExistingUsername) {

            return res.status(500).json({ message: findExistingEmail ? 'Email already exists' : 'Username already exists' })
        }
        else {
            const hashedPassword =await bcrypt.hash(password, 10)

            // creating a new user with hashed password 

            const newUser = {
                username,
                email,
                password : hashedPassword 
            }

            await User.create(newUser)  //saving the user's data to dtabase

            return res.status(200).json({ "message": "User registered successfully" })
        }
    }
    catch (e) {
        res.status(400).json('fill all the feilds')
    }
})


// login

router.post('/login', async(req, res)=>{
    const {username, email, password} = req.body

    try{
        const user = await User.findOne({ email })

        if(!user){
            return res.status(400).json({message: "no user found"})
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if(!isMatch){
             return res.status(400).json({message: "wrong password"})
        }
        else{
            
            // create token
            const token = jwt.sign({ _id: user._id,username: user.username, email: user.email},
                process.env.SECRET,
                {expiresIn: '24h'})

                
                return res.status(200).json({token, message: "welcome to the dashboard"})
        }


    }
    catch(er){

        res.status(400).json({
            message: "server error"
        })

    }
})


export default router;



