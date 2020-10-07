//console.log('starting notes.js!');

const fs= require('fs');


var fetchNotes = function()
{
  try
  {
    var notesString= fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  }
  catch(e)
  {
    return [];
  }
}

var saveNotes = function(notes)
{
  fs.writeFileSync('notes-data.json',JSON.stringify(notes));
}
var addNote = function(title,body)
{
  //console.log('Adding note ',title,' ',body);
  var notes=fetchNotes();
  var note=
  {
    title,
    body
  };

  var duplicateNotes = notes.filter((note) => note.title === title);
  //var duplicateNotes =[];
  if(duplicateNotes.length===0)
  {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
}
var getAll= function()
{
  var notes= fetchNotes();
  return notes;
  //console.log(JSON.stringify(notes));
  //console.log('Getting all Notes.');
}
var removeNote =function(title)
{
  //console.log('Deleting the Note:',title);
  var notes = fetchNotes();
  var filterNotes = notes.filter((note) => note.title !== title);
  saveNotes(filterNotes);
  return filterNotes.length!==notes.length;
  // if(duplicateNotes.length)
  // {
  //   console.log
  //   // var note= notes[title];
  //   // delete notes[title];
  //   // return note;
  // }
  // else {
  //   return undefined;
  // }
}
var getNote= function(title)
{
  var notes =fetchNotes();
  var duplicateNotes = notes.filter((note) => note.title === title);
  if(duplicateNotes.length===0)
    return undefined;
  else
      return duplicateNotes[0];
  // console.log('Reading the note: ',title);
}

var logNote = function(note)
{
  console.log('--');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
}

module.exports ={
  addNote,
  getAll,
  removeNote,
  getNote,
  logNote
};

// module.exports.addnote = function()
// {
//   console.log('add note!');
//   return 'New Note';
// }
// module.exports.sum1=function(a,b)
// {
//     var sum11=a+b;
//     console.log(`sum is ${sum11}!`);
//     return sum11;
// };
