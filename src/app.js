require('dotenv').config()
const express = require('express')
const cors = require('cors')
const pupFunc = require('./services/function')
const pupFuncByPdf = require('./services/function2')
const pdfFunc = require('./services/pdf')

const app = express()
const route = express.Router()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
app.use('/api', route)

route.get('/', async (req, res) => {
    try {
        res.status(200).json({ msg: 'This is the home page' })
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

route.post('/new', async (req, res) => {
    try {
        const getGame = await pupFunc(req.body)
        if (getGame.error) {
            return res.status(400).json(getGame)
        }
        res.status(200).json(getGame)
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

route.post('/newByPdf', async (req, res) => {
    try {
        const getGame = await pupFuncByPdf(req.body)
        res.status(200).json(getGame)
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

route.post('/pdf', async (req, res) => {
    try {
        const getPdfData = await pdfFunc(req.body.src, req.body.len)
        res.status(200).json(getPdfData)
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

app.listen(process.env.PORT || 3000)