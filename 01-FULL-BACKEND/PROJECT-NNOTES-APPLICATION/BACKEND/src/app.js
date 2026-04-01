const express = require('express');
const notesModel=require('./model/notes.model')

const app = express();
app.use(express.json());


/**
 * @method POST
 * @description created note
 */

app.post('/notes', async (req, res) => {
    
    const data = req.body


    await notesModel.create({
        title: data.title,
        description: data.description
    })
    
    res.status(201).json({
        message: 'Note created'
    })

})

/**
 * @method GET
 * @description get all notes
 */

app.get('/notes', async (req, res) => {
    
    const notes = await notesModel.find()
    

    res.status(200).json({
        message: 'Notes fetched successfully',
        notes:notes
    })
})

/**
 * @method DELETE
 * @description delete particular  note
 */
app.delete('/notes/:id', async (req,res) => {
    
    const id = req.params.id
    
    await notesModel.findOneAndDelete({
        _id:id
    })

    res.status(200).json({
        message:'Note deleted successfully'
    })
} )


/**
 * @method PATCH
 * @description Update particular note
 */

app.patch('/notes/:id', async (req,res) => {
    
    const id = req.params.id
    const description = req.body.description
    const title=req.body.title
    
    await notesModel.findByIdAndUpdate({
        _id:id
    }, {
        description: description,
        title: title
    })

    res.status(201).json({
        message:'Note updated successfully'
    })
})




module.exports = app;