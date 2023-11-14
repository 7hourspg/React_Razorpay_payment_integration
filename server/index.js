import express from 'express'
import 'dotenv/config'
import cors from 'cors'

import apiRouter from './routes/api.js'

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api', apiRouter)

app.listen(process.env.PORT || 3001, () => {
  console.log(`Server listening on port ${process.env.PORT || 3001}`)
})
