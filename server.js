const express = require('express');
const mongoose = require('mongoose');
const elementRouter = require('./routes/elementRoutes.js');

const app = express();
app.use(express.json());

mongoose.connect("mongodb+srv://matlee01:ZA%231task22@cluster0.8fx2q.mongodb.net/fridgedb?retryWrites=true&w=majority", {
	useNewUrlParser: true
});

app.use(elementRouter);

app.listen(3000, () => { console.log('server running!') });
