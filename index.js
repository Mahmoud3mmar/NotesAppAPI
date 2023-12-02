import express from 'express'
import UserRouter from './src/modules/users/routers/user.router.js'
import NotesRouter from './src/modules/notes/routers/notes.router.js'

const app = express()
const port = 5000


app.use(express.json())

app.use('/user',UserRouter)



app.use('/notes',NotesRouter)






app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))