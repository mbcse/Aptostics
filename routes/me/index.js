import express from 'express'
// import auth from './auth.js'
import dashboard from './dashboard.js'
import transfers from './transfers.js'
const router = express.Router()

// router.use('/auth', auth)
// router.use('/event', event)
router.use('/dashboard', dashboard)
router.use('/transfers', transfers)

export default router
