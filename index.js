const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static('Public'));
app.use(cors());




app.listen(3000, ()=>{
    console.log('The server is on')
});