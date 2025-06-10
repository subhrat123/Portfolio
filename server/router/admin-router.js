const authMiddleWare =require("../middleware/auth-middleware")
const adminMiddleWare=require("../middleware/admin-middleware")
const uploadImg=require("../controller/upload-controller")
const adminRoute=require("../controller/admin-controller")


const { upload } = require("../middleware/multer");
//admin-user router to fetch user details from database
const express=require("express");
const router=express.Router();
router.route('/admin/user').get(authMiddleWare,adminMiddleWare,adminRoute.getAllUsers);
router.route('/admin/contact').get(authMiddleWare,adminMiddleWare,adminRoute.getAllContacts);
router.route('/admin/user/delete/:id').delete(authMiddleWare,adminMiddleWare,adminRoute.deleteUser);
router.route('/admin/skills').get(adminRoute.getSkills);
router.route('/admin/skills/add').post(adminRoute.addSkills);
router.route('/admin/upload').post(upload.single('skill'),uploadImg);
router.route('/admin/project/upload').post(upload.single('project'),uploadImg);
router.route('/admin/projects').get(adminRoute.getProjects);
router.route('/admin/projects/add').post(adminRoute.addProjects);
router.route('/admin/projects/:id/update').put(adminRoute.updateProjects);

// POST   /admin/project/upload         // for image upload (same like skills)
// GET    /admin/projects               // get all projects
// POST   /admin/projects/add           // add project
// PUT    /admin/projects/:id/update 

// TODO: update the user data in database.
// router.route('/admin/user/update/:id').update(authMiddleWare,adminMiddleWare,adminRoute.updateUser);

module.exports=router;

