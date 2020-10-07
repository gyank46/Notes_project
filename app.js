//console.log('App started!');

const fs = require('fs');
const yargs =require('yargs');
const _ =require('lodash');

var titleOptions ={
  description: 'Title of Note',
  requirement: true,
  alias:'t'
};
var bodyOptions ={
  description: 'Body of Note',
  requirement: true,
  alias:'b'
};
//const os = require('os');
//const user =os.userInfo();
const notes = require('./notes.js');

const argv=yargs
.command('add', 'Add a Note',{
  title: titleOptions,
  body: bodyOptions
})
.command('list', 'List all Notes')
.command('read', 'Read a Note',{
  title:titleOptions
})
.command('remove', 'Delete a Note',{
  title:titleOptions
})
.help()
.argv;
//console.log(argv);

var command= process.argv[2];

// //console.log(process.argv);
// console.log('Command:',command);
if(command==='list')
{
  var Notes=notes.getAll();
  if(Notes.length===0)
    console.log('No Notes found');
  else
  {
    console.log(`Printing ${Notes.length} note(s).`)
    Notes.forEach(function(note)
    {
      notes.logNote(note);
    });
  }
}
  //console.log('Listing all notes');
else if(command ==='add')
{
  var note=notes.addNote(argv.title,argv.body);
  //console.log(typeof note);
  if(note===undefined)
    console.log('Note Title taken');
  else
  {
    console.log('Note created');
    notes.logNote(note);
  }
}
  //console.log('Adding new note');
else if(command==='remove')
{
  noteRemoved=notes.removeNote(argv.title);
  console.log(noteRemoved?'Note was removed':'Note not found');
}
  //console.log('deleting the note');
else if(command==='read')
{
  var note=notes.getNote(argv.title);
  if(note)
  {
    console.log('Note read');
    notes.logNote(note);
  }
  else
    console.log('Note not found');
}
  //console.log('reading the note');
else
  console.log('Not a valid Command');
// var a='gyan';
// console.log(_.isString(123));
// var arr= ['gyan','shomya',21,21,19,19,'gyan','sonu','gyani'];
// var res =_.uniq(arr);
// console.log(res);


// console.log(notes.sum1(2,-2));
//console.log(`Hello ${user.uid} ${user.username} !`);
// fs.appendFile('greeting.txt',`Hello ${user.uid} ${user.username} !\n You are ${notes.age}.\n`, function(err)
// {
//   if(err)
//     console.log('File not Found!');
// });
