import { Sequelize } from 'sequelize-typescript'

const { development } = require('../database/config')

const sequelize = new Sequelize(development.database, development.username, development.password, {
    host: development.host,
    dialect: development.dialect,
    port: 3307,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    }
})

export default sequelize
