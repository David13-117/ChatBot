const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const connectDB = require("./config/db")
const chatRoutes = require("./routes/chatroutes")

dotenv.config()
connectDB()

const app = express()
app.use(cors())
app.use(express.json())
app.use("/api/chats", chatRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`))
