const express = require('express')
const magazineRouter = require('./routes/routes.js')
const cors = require('cors')

const PORT = 8080
const app = express()

app.use(express.json())
app.use(cors())
app.use('/api', magazineRouter)

app.use(express.static(__dirname));

app.get("/",function (request, response) {
    response.sendFile(__dirname + "/index.html")
});
app.get("/admin",function (request, response) {
    response.sendFile(__dirname + "/admin.html")
});

app.listen(PORT, () => console.log(`SERVER STARTED ON PORT: http://localhost:${PORT}`))