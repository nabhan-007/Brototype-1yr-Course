const adminSchema=require("../model/adminModel")
const userSchema=require("../model/userModel")
const bcrypt=require("bcrypt")


const loadLogin=(req,res)=>{
    res.render("admin/login")
}
const loginAdmin=async(req,res)=>{
    try{
        const{email,password}=req.body
        const user= await adminSchema.findOne({email})
        if(!user) return res.render("admin/login",{message:"sorry, no users found"})
        
        const isMatch= await bcrypt.compare(password,user.password)
        if(!isMatch) return res.render("admin/login",{message:"invalid password",email})
        req.session.admin=true;
        return res.redirect("/admin/dashboard")
    }
    catch(error){
        console.log(error)
        return res.render("admin/login",{message:"something unexpected happen",email})
    }
}

const loadDashboard = async (req, res) => {
    try {
       
        const message = req.query.message;
        const error = req.query.error;

        const users = await userSchema.find({});

 
        res.render("admin/dashboard", { 
            users, 
            message,  
            error 
        });
    }
    catch(error) {
        console.log("error fetching users:", error);
        res.render("admin/dashboard", { 
            users: [], 
            message: "database connection error" 
        });
    }
}

const editUser=async(req,res)=>{
    try{
        const {email,password,id}=req.body
        let updatedUser= {email}
        if(password&&password.trim().length>0){
            const hashedPassword=await bcrypt.hash(password,10)
            updatedUser.password=hashedPassword;
        }
        const user= await userSchema.findByIdAndUpdate({_id:id},{$set:updatedUser},{new:true})
        console.log(user)
        res.redirect("/admin/dashboard")
    }
    catch(error){
        console.log(error)
    }
}

const deleteUser=async(req,res)=>{
    try{
        const {id}=req.params
        const user= await userSchema.findByIdAndDelete({_id:id})
        res.redirect("/admin/dashboard")
    }
    catch(error){
        console.log(error)
    }
}

const addUser=async(req,res)=>{
    try{
        const {email,password}=req.body;
        const existingUser= await userSchema.findOne({email})
        if(existingUser){
            const users= await userSchema.find({})
            return res.render("admin/dashboard",{
                users,
                email,
                error:"user already exists"
            })
        } 
        const hashedPassword=await bcrypt.hash(password,10)
        const newUser=await new userSchema({email,password:hashedPassword})
        await newUser.save()

        res.redirect("/admin/dashboard?message=User created successfully");
    }
    catch(error){
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
}

const logout=(req,res)=>{
    req.session.admin=null
    res.redirect("/admin/login") 
}

module.exports={loadLogin,loginAdmin,loadDashboard,logout,editUser,deleteUser,addUser}