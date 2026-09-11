const express = require('express');
const app = express();
const cors = require('cors');

const routerUser = require('./src/routes/userRoute');

require('dotenv').config();
require('./src/config/db');

app.use(cors());
app.use(express.json());


const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`server port in ${PORT}`);
});

app.use('/api/user', routerUser);

module.exports = app;



