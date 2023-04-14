import express from 'express'
import { landing } from '../../controllers'
// import { sendLoginOtp, login, signingData, signatureVerifyAndLogin, logout } from '../../controllers/authentication'
// import { verifyLoggedIn } from '../../middleware/verifyLoggedIn'

const router = express.Router()

router.get('/connect', landing)

// router.post('/signingdata', signingData)
// router.post('/cryptologin', signatureVerifyAndLogin)

export default router
