const userSchema=require("../model/userModel")
const bcrypt=require("bcrypt")


const loadRegister= (req,res)=>{
    
    res.render("user/register")
}
const registerUser=async(req,res)=>{
    try{
        const {email,password}=req.body
        
        const user = await userSchema.findOne({email})
        if(user) return res.render("user/register",{message:"user already exists⭕",email})

        const hashedPassword= await bcrypt.hash(password,10)

        const newUser= new userSchema({
            email,
            password:hashedPassword
        })

        await newUser.save()
        res.redirect("/user/login?message=user%20created%20successfully%E2%9C%85");
    }
    catch(error){
        console.log(error)
    }
}

const loadLogin=(req,res)=>{
    const message=req.query.message||req.query.error
    res.render("user/login",{message})
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userSchema.findOne({ email });
        
        if (!user) return res.render("user/login", { message: "❌no user found❌" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.render("user/login", { message: "invalid password❌", email });

        
        req.session.user = {
            _id: user._id,
            email: user.email
        };
        
        return res.redirect("/user/home");
    } catch (error) {
        console.log(error);
        return res.render("user/login", { message: "Error occurred", email });
    }
}

const loadHome= (req,res)=>{
    res.render("user/home",{email:req.session.user.email})
}

const logout=(req,res)=>{
    req.session.user=null;
    res.redirect("/user/login")
}
module.exports={registerUser,loginUser,loadLogin,loadRegister,loadHome,logout}