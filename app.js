const express = require('express');
const config = require('./config');
const exercises = require('./routers/exercises.router');

const app = express();
app.use(express.json());

app.use('/exercises', exercises);

app.listen(config.API.port, () => {

    console.log(`Listening http://localhost:${config.API.port}`);
    
});


