import { Router } from "express"

import {GetAllNotes,AddNote } from "../controllers/task.controller.js"
const router= Router()

router.route('/').get(GetAllNotes).post(AddNote)
router.route('/:id').put().delete()

export default router