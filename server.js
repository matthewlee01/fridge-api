const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const elementRouter = require('./routes/elementRoutes.js');

const app = express();
app.use(express.json());
app.use(cors());

const uri = process.env.MONGODB_URI;
mongoose.connect(uri, {
	useNewUrlParser: true
});

app.use(elementRouter);

app.listen(process.env.PORT, () => { console.log('server running!') });
