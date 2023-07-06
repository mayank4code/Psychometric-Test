const router = require('express').Router();
const User = require("../mongodb/Models/User");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const fetchPerson = require("../middlewares");


router.get('/', (req,res)=>{
    res.send("Anurag");
})

//Register
router.post("/register", async(req,res)=>{
    try{
        //generate new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        req.body.password = hashedPassword;

        const newUser = await new User(req.body);

        //save user and response
        const user = await newUser.save();
        res.status(200).json(user);
    } catch(err){
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
            mongoID: user._id
        };
        const token = jwt.sign(data, process.env.JWT_SECRET);

        res.status(200).json({success: true, message: "Logged in successfully", token});

    } catch(err){
        res.status(500).json({success: false, message: err});
    }
})



module.exports = router;