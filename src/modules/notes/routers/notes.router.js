import { Router } from "express"

import {GetAllNotes,AddNote,GetAllNotesWithOwner,DeleteNote,UpdateNote } from "../controllers/notes.controller.js"
const router= Router()

router.route('/').get(GetAllNotes).post(AddNote)
router.route('/NotesWithOwner').get(GetAllNotesWithOwner)

router.route('/:id/:id').delete(DeleteNote).put(UpdateNote)

export default router