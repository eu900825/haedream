const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const db = require('./models');
const userAPIRouter = require('./routes/user');
const adminAPIRouter = require('./routes/admin');

const app = express();
db.sequelize.sync();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/loans', userAPIRouter);

app.use('/api/agari', adminAPIRouter);

app.listen(3065, () => {
    console.log(`server is running on localhost:3065`); 
})