// var obj=
// {
//   name:'Gyan'
// };
//
// var stringObj= JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);


// var personStrting = '{"Name":"gyan","Age":21}';
// var person= JSON.parse(personStrting);
// console.log(person.Name);


var originalNote ={
  title :'Note title',
  body :'Note body'
};

var originalNoteString= JSON.stringify(originalNote);

const fs =require('fs');

fs.writeFileSync('Notes.json',originalNoteString);

var noteString =fs.readFileSync('Notes.json');

var note = JSON.parse(noteString);

console.log(note.title);
console.log(note.body);
