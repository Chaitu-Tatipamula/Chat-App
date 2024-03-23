const { addMessage, getAllMessage } = require('../controllers/messagesController')

const router = require('express').Router()

router.post("/addmsg/",addMessage)
router.get("/getMsg/",getAllMessage)

module.exports =router