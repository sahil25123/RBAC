import prisma from "../config/prisma";

export const loginController = async(req , res) =>{
    try{
        const {email , password} =req.body;

        if(!email || password){
            return res.status(400).json({message : "Missing Fields"})

        }
        const existing = prisma.user.findUnique({})

    }
    catch(e){
        return res.status(404).json({message: "Error in the Login Controller"})
    }
}

export const registerController = async(req, res) =>{

    try {
        const { name , email , password } = req.body;
        if(!name || email || password) {
            res.status(400).json({message : "Missing Fields"})
        }
        const existing = await prisma.user.findUnique({where : {email}});
        const salt = await bcrypt.genSalt(10);
        const hashpassword = await bcrypt.hash(password , salt)


    }
    catch(e){
        console.log("")
            return res.status(404).json({message : "Error in the Register Controller"})
    }

}