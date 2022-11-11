import express from 'express'
const router = express.Router()
import noteActions from '../actions/api/noteActions.js'

router.get('/notes', noteActions.getAllNotes)
router.get('/note/:id', noteActions.getNote)
router.post('/notes', noteActions.saveNote)
router.put('/notes/:id', noteActions.updateNote)
router.delete('/notes/:id', noteActions.deleteNote)

export default router;