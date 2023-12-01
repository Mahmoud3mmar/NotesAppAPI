import { Router } from "express"

import { GetAllUsers,SignUp,UpdateUser,DeleteUser} from "../controllers/users.controller.js"
const router= Router()

router.route('/').get(GetAllUsers).post(SignUp)
router.route('/:id').put(UpdateUser).delete(DeleteUser)

export default router