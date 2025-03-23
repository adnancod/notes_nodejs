const mongoose= require('mongoose');

const noteSchema= mongoose.Schema({
    id:{
        type: String,
        unique: true,
        required: true
    },
    userid:{
        type: String,
        // unique: true,
    },
    title:{
        type: String,
        unique: true,
        required: true
    },
    content:{
        type: String,
        unique: true,
        required: true
    },
    dateAdded:{
        type: Date,
        default: Date.now
    }
});

const Notes= mongoose.model('Notes', noteSchema);

module.exports= Notes;