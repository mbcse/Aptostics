import express from 'express'
import { nativeTransactions, nftTransfers, tokenTransfers } from '../../controllers'
const router = express.Router()

router.get('/nft/:chain/:address', nftTransfers)
router.get('/token/:chain/:address', tokenTransfers)
router.get('/native/:chain/:address', nativeTransactions)

// router.post('/signingdata', signingData)
// router.post('/cryptologin', signatureVerifyAndLogin)

export default router
