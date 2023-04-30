import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import sequelize from './sequelize'

dotenv.config()

// Init express
const app = express()

app.use(bodyParser.json())

app.get('/', (req: Request, res: Response) => {
    sequelize
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.')
        })
        .catch((err: Error) => {
            console.error('Unable to connect to the database:', err)
        });

    res.send('Express + TypeScript Server111')
})

// Export express instance
export default app