import { Router } from "express"

import {  GetAllUsers,
    SignUp,
    UpdateUser,
    DeleteUser,
    SearchUserLike,
    SearchUser,
    SearchUserIN,
    SearchUserOldest,
    SignIn} from "../controllers/users.controller.js"
const router= Router()



router.route('/').get(GetAllUsers).post(SignUp)
router.route('/searchUserLike').get(SearchUserLike)
router.route('/SearchUser').get(SearchUser)
router.route('/SearchUserIN').get(SearchUserIN)
router.route('/SearchUserOldest').get(SearchUserOldest)
router.route('/SignIn').get(SignIn)






router.route('/:id').put(UpdateUser).delete(DeleteUser)

export default router