const fs = require('fs')

const addNotes = (title, body) => {
    const notes = loadNotes()

    const duplicateEntry = notes.find(note => note.title === title)
    
    if(duplicateEntry){
        console.log("Duplicate Title")
    } else{
        notes.push({
            title,
            body
        })
    
        saveNotes(notes)
        console.log('Note Added!')
    } 
}

const removeNote = (title) => {
    const notes = loadNotes()
    const updatedNotes = notes.filter(note => note.title !== title)

    if (notes.length === updatedNotes.length)
        console.log(`Note with title ${title} not found`)
    else {
        saveNotes(updatedNotes)
        console.log(`Note with title ${title} removed!`)
    }
   
}

const readNote = (title) => {
    const notes = loadNotes()

    const noteToRead = notes.find(note => note.title === title)
    if(noteToRead){
        console.log(`Note details: ${noteToRead.body}`)
    } else{
        console.log('Note not found!')
    }
}

const listNotes = () => {
    const notes = loadNotes()
    notes.forEach(note => {
        console.log(`Title: ${note.title}\n`)
    });
}

function loadNotes(){
    try{
        const data = fs.readFileSync('notes.json').toString()
        return JSON.parse(data)
    } catch(e) {
        return []
    }
}

function saveNotes(notes){
    fs.writeFileSync('notes.json', JSON.stringify(notes))
}

module.exports = {
    addNotes: (title, body) => addNotes(title, body),
    removeNote: (title) => removeNote(title),
    listNotes: () => listNotes(),
    readNote: (title) => readNote(title),
}