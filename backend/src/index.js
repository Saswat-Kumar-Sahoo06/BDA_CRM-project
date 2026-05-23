import dotenv from 'dotenv/config'
import Connect_DB from './db/index.js'
import app from './app.js'

const PORT = process.env.PORT || 8000

Connect_DB()
.then(() => {
    app.listen(PORT, () => {
        console.log(`server is running on PORT:${PORT}`);
    })
})
.catch((err) => {
    console.log(`MongoDB connection failed.., Error: `, err);
    process.exit(1)
})