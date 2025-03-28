const express = require('express');
const app = express();
const db = require('./db');
const Notes = require('./notes');
require('dotenv').config();
const cors = require('cors');
app.use(cors());

app.use(express.json());


const port = process.env.Port || 5000;


app.post('/notes/add', async (req, res) => {
    try {
        const data = req.body;

        const newNote = new Notes(data);

        const response = await newNote.save();
        console.log('Data Saved')

        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }

});

app.get('/notes', async (req, res) => {
    try {
        var notes = await Notes.find();
        console.log('Data Fetched')
        res.status(200).json(notes);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }

})

app.delete('/notes/:id', async (req, res) => {

    try {
        const notesId = req.params.id;

        const response = await Notes.findByIdAndDelete(notesId);

        if (!response) {
            return res.status(404).json({ error: 'Notes Id not found' })
        }

        console.log('Data Deleted')

        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }

})

app.put('/notes/:id', async (req, res) => {
    try {
        const notesId = req.params.id;

        const updatednotes = req.body;

        const response = await Notes.findByIdAndUpdate(notesId, updatednotes,{
            new: true,
            runValidators: true
        });

        if (!response) {
            return res.status(404).json({ error: 'Notes Id not found' })
        }

        console.log('Data updated')

        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})







app.listen(port, () => {
    console.log(`Server is running on port ${port}.....`);

});