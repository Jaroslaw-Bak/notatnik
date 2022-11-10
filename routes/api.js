import express from 'express'
const router = express.Router()
import noteActions from '../actions/api/notes.js'

router.get('/', noteActions.homepage)
router.get('/newNote', noteActions.saveNote)

export default router;