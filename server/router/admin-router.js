const authMiddleWare =require("../middleware/auth-middleware")
const adminMiddleWare=require("../middleware/admin-middleware")
//admin-user router to fetch user details from database
const express=require("express");
const router=express.Router();
const adminRoute=require("../controller/admin-controller")
router.route('/admin/user').get(authMiddleWare,adminMiddleWare,adminRoute.getAllUsers);
router.route('/admin/contact').get(authMiddleWare,adminMiddleWare,adminRoute.getAllContacts);
router.route('/admin/user/delete/:id').delete(authMiddleWare,adminMiddleWare,adminRoute.deleteUser);

// TODO: update the user data in database.
// router.route('/admin/user/update/:id').update(authMiddleWare,adminMiddleWare,adminRoute.updateUser);

module.exports=router;

