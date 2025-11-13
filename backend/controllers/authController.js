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

        const defaultRole = await prisma.role.findUnique({ where : {name : "User"}});

        if(!defaultRole){
            return res.status(500).json({ status :false , message : "Default role not found in database"})

        }
        const user = await prisma.user.create ({
            data : {
                name , email , password :hashpassword , 
                role : {
                    connect : { id : defaultRole.id}
                } , 
                includes : {role : true}
            }
        })
        res.status(201).json({message : "User Registerion" , user : { id : user.id , name : user.name , email : user.email , roles : user.roles}})


    }
    catch(e){
        console.log("")
            return res.status(404).json({message : "Error in the Register Controller"})
    }

}