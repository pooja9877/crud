import express from 'express';
import User from '../model/userModel';
const router = express.Router();

router.post("/register", async(req, res, next) => {
    try {
       const result = await User.create(req.body);
        
    } catch (error) {
        console.log(error)
    }
})
router.get("/users", async(req, res, next) => {
    try {
       const result = await User.find();
       res.send(result)
       console.log(result)
    } catch (error) {
        console.log(error)
    }
})



export default router;