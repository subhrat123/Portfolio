const User=require('../models/user_schema');
const Contacts=require('../models/contact_schema');
const skills=require('../models/skills_schema');
const Projects=require('../models/projects_schema');


const getAllUsers=async (req,res)=>{

    try{
        const user=await User.find({},{password:0});
        if(!user || user.length===0) {
            return res.status(404).json({message:"error getting user in admin-controller"})
        }
       return res.status(200).json(user);
    }catch(error){
        console.log("error from admin-controller");
        next(error);
    }
}

const getAllContacts=async (req,res)=>{
    try{
        const contacts=await Contacts.find();
        console.log(contacts);
        if(!contacts || contacts.length===0)
            return res.status(404).json({message:"no contacts found..."})
    return res.status(200).json(contacts);
    }catch(error){
        console.log("error in getAllContacts..");
        next(error);
    }
}

const deleteUser=async (req,res)=>{
    try {
        const id=req.params.id;
        await User.deleteOne({_id:id});
        return res.status(200).json({msg:"user deleted successfully"});
        
    } catch (error) {
        next(error);
    }
}

const getSkills= async (req,res)=>{
    try {

        const skillslist= await skills.find();
        if (!skillslist || skillslist.length === 0) {
            return res.status(404).json({ message: 'No skills found' });
        }
        
        res.status(200).json(skillslist);

    }
    catch(error){

        console.error('Error fetching skills:', error);

        res.status(500).json({message:'unable to fetch skills'});
    }
}

const addSkills= async(req,res)=>{
    try{
        const {url,name,description}=req.body;
        if(!url || !name || !description){
            return res.status(400).json({ message: 'All fields are required' });
        }
        const newSkill = new skills({
            url,name,description
        })
        await newSkill.save();
        res.status(201).json({ message: 'Skill added successfully', skill: newSkill });
    }catch(error){
        console.error('Error adding skill:', error);
        res.status(500).json({ message: 'Unable to add skill' });
    }
}

const addProjects= async(req,res)=>{
    try{
        const {name,description,url,liveLink}=req.body;
        const newProject = new Projects({name,description,url,liveLink});
        await newProject.save();
        res.status(201).json({message:"Project added successfully", Project:newProject});
    }catch(error){
        console.error("Error while adding project");
        res.status(500).json({message:'uable to add project'});

    }
}

const getProjects= async (req, res) => {
    try {
        const projects = await Projects.find();
        if (!projects || projects.length === 0) {
            return res.status(404).json({ message: 'No projects found' });
        }
        res.status(200).json(projects);
    } catch (error) {
        console.error('Error fetching projects:', error);
        res.status(500).json({ message: 'Unable to fetch projects' });
    }
}

const updateProjects= async (req,res)=>{
    try {
        const id = req.params.id;
        
        const updatedProject = await Projects.findByIdAndUpdate(id,req.body, { new: true });

        if (!updatedProject) {
            return res.status(404).json({ message: 'Project not found' });
        }

        res.status(200).json({ message: 'Project updated successfully', project: updatedProject });
    } catch (error) {
        console.error('Error updating project:', error);
        res.status(500).json({ message: 'Unable to update project' });
    }
}



// const updateUser=async (req,res)=>{

// }

module.exports={getAllUsers,getAllContacts, deleteUser,getSkills,addSkills,getProjects,addProjects,updateProjects};