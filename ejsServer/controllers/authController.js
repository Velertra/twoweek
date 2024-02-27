const bcrypt = require("bcryptjs");
const generateToken = require('../utilities/generateToken');
const User = require('../model/userModel')

const signup = async(req, res) => {
    try {
        const { fullName, userName, password, confirmPassword } = req.body;

        if(password !== confirmPassword) {
            return res.status(400).json({error: "Passwords don't match"})
        }


        const user = await User.findOne({userName});

        if(user) {
            return res.status(400).json({error:"Username already exists"})
        }

        
        /* const newUser = new User({
            fullName,
            userName,
            password,
        });
        
        
        await newUser.save();
        
        
        res.status(201).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            userName: newUser.userName,
        }) */

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            fullName,
            userName,
            password: hashedPassword,
        });

        if(newUser){

            await generateToken(newUser._id, res);
            await newUser.save();
        
            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                userName: newUser.userName,
            }) 

        } else {
            res.status(400).json({ error: "Invalid user data"});
        }

    } catch(error) {
        console.log("Error in signup controller", error.message);
        res.status(500).json({error:"Internal Server Error"})
    }
}

const login = async(req, res) => {
    console.log("loginUser");
    try {
        const { userName, password } = req.body;
        const user = await User.findOne({ userName });
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

        if(!user || !isPasswordCorrect) {
            return res.status(400).json({error: "Invalid username or password"});
        }

        generateToken(user._id, res);

        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            userName: user.userName,

        })

    } catch(error) {
        console.log("Error in login controller", error.message);
        res.status(500).json({error:"Internal Server Error"})
    }
}

const logout = (req, res) => {
    console.log("logoutUser");
    try {
        res.cookie("jwt", "", { maxAge: 0 });
        res.status(200).json({ message: "Logged out successfully"})

    } catch(error) {
        console.log("Error in logout controller", error.message);
        res.status(500).json({error:"Internal Server Error"})
    }
}


module.exports = { signup, login, logout };