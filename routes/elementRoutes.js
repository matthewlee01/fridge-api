const express = require('express');
const elementModel = require('../models/elementModel.js');
const app = express();

app.get('/elements', async (req, res) => {
	const elements = await elementModel.find({});

	try {
		res.send(elements);
	} catch (err) {
		res.status(500).send(err);
	}
});

app.post('/elements', async (req, res) => {
	const element = new elementModel(req.body);

	try {
		await element.save();
		res.send(element);
	} catch (err) {
		res.status(500).send(err);
	}
});

app.delete('/elements/:id', async (req, res) => {
	try {
		const element = await elementModel.findByIdAndDelete(req.params.id)
		if (!element) res.status(404).send("no element found")
		res.status(200).send();
	} catch (err) {
		res.status(500).send(err);
	}
});

app.patch('/elements/:id', async (req, res) => {
	try {
                console.log("about to initiate findbyidandupdate");
		await elementModel.findByIdAndUpdate(req.params.id, req.body)
                console.log("successfully foundbyidandupdated");

                await elementModel.markModified("value");
                console.log("successfully markedmodified");
		await elementModel.save()
                console.log("successfully saved");
		res.send(element)
	} catch (err) {
		res.status(500).send(err)
                console.log(err);
	}
});


module.exports = app;


