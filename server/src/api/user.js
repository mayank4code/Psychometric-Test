const router = require('express').Router();
const User = require("../mongodb/Models/User");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const fetchPerson = require("../middlewares");
const Question = require("../mongodb/Models/Question");


//Register
router.post("/register", async(req,res)=>{
    console.log("register request received");
    try{
        //generate new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        req.body.password = hashedPassword;

        const newUser = await new User(req.body);

        //save user and response
        const user = await newUser.save();
        res.status(200).json({success: true, user});
    } catch(err){
        console.log(err);
        res.status(500).json(err);
    }
});

//LOGIN
router.post("/login", async (req,res)=>{
    console.log("login request received");
    try {
        const user = await User.findOne({mobile: req.body.mobile});

        if(!user){
            return res.status(403).send("User not found");
        }

        const validPassword = await bcrypt.compare(req.body.password, user.password);

        if(!validPassword){
            return res.status(400).json("Wrong password");
        }

        // generate token - expiry time is 24 hours
        const data = {
            exp: Math.floor(Date.now() / 1000) + 60*60*24,
            mongoID: user._id,
            isAdmin: user.role===2?true:false
        };
        const token = jwt.sign(data, process.env.JWT_SECRET);

        res.status(200).json({success: true, message: "Logged in successfully", token});

    } catch(err){
        res.status(500).json({success: false, message: err});
    }
})

router.post("/verify-user", fetchPerson, async (req,res)=>{
    
    res.json({success: true, message: "Token verified succesfully", isAdmin: req.isAdmin});
})


//Get questions

router.get("/get-questions", fetchPerson, async (req,res)=>{

    try {
        const questions = await Question.find();
        res.status(200).json({success: true, message: "Questions fetched successfully", questions});
    } catch (error) {
        res.status(500).json({success: false, message: error.message});
    }

})



module.exports = router;