const express = require('express');
require('dotenv').config()
const sequelize = require('./db');
const models = require('./models/models')
const PORT = process.env.PORT || 4900;
const app = express();
const cors = require('cors');
const router = require('./routes/index');
const errorHandler = require('./middleware/ErrorHandlingMiddleware')


app.use(cors())
app.use(express.json())
app.get('/health', (req, res) => {
    res.status(200).json({message: "OK"})
})
app.use('/api', router);

app.use(errorHandler);

const start = async () => {
    try{
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => console.log('Server started successfully'));
    } catch (e){
        console.log(e);
    }
}

start();

