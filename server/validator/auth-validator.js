const z=require("zod");

const signUpSchema = z.object({
    
    username:z
    .string({required_error:"Name is required"})
    .trim()
    .min(3,{message:"name must be atleast of three character"})
    .max(255,{message:" name must not be more than 255 character"}),
    
    email:z
    .string({required_error:"email is required"})
    .trim()
    .min(3,{message:"email must be atleast of three character"})
    .max(255,{message:"email must not be more than 255 character"}),
    
    password:z
    .string({required_error:"password is required"})
    .trim()
    .min(6,{message:"password must be atleast of 6 character"})
    .max(1024,{message:"password must not be more than 1024 character"}),
})

module.exports = signUpSchema;
