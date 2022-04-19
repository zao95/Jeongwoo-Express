require('dotenv').config()
const cors = require('cors')
const express = require('express')

const app = express()
const { PORT, MONGO_URI } = process.env

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
}

const db = require('./app/models/index')
db.mongoose
    .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log(' ### 몽고DB 연결 성공 ### ')
    })
    .catch((err) => {
        console.log(' 몽고DB와 연결 실패', err)
        process.exit()
    })

app.listen(PORT, () => {
    console.log('***************** ***************** *****************')
    console.log('********** 서버가 정상적으로 실행되고 있습니다 *********')
    console.log('***************** ***************** *****************')
})

app.get('/', (req, res) => {
    res.json({ '현재 시간 : ': new Date().toLocaleString() })
})
app.get('/api/now', cors(corsOptions), (req, res) => {
    res.json({ now: new Date().toLocaleString() })
})
