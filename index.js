import express from 'express'
import UserRouter from './src/modules/users/routers/user.router.js'
import TaskRouter from './src/modules/tasks/routers/task.router.js'

const app = express()
const port = 5000


app.use(express.json())
app.use('/users',UserRouter)
app.use('/tasks',TaskRouter)






app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))