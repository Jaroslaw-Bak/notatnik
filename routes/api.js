import express from 'express'
const router = express.Router()
import testActions from '../actions/api/test.js'

router.get('/', testActions.homepage)

export default router;