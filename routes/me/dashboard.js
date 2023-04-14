import express from 'express'
import { profile, dashboard, nft, token, transactions, getAllNotificationsController, getChatsController, getSubscriptionsController } from '../../controllers/index.js'
const router = express.Router()

// me dashboard
router.get('/:chain/:address', dashboard)
router.get('/nft/:chain/:address', nft)
router.get('/token/:chain/:address', token)
router.get('/profile/:chain/:address', profile)
router.get('/transactions/:chain/:address', transactions)
router.get('/notifications/:chain/:address', getAllNotificationsController)
router.get('/chats/:chain/:address', getChatsController)
router.get('/subscriptions/:chain/:address', getSubscriptionsController)

export default router
