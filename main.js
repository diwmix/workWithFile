// 1.
const fs = require('fs');
function readFile(filePath) {
    fs.readFile(filePath, 'utf8', (err, data)=>{
        if (err) throw err;
       console.log(data);
    });
}

readFile('text.txt')


// 2.
function createFile(filePath, content){
    fs.writeFile(filePath, content, (err)=>{
        if (err) throw err;
        console.log('The file has been created');})
        return true;
}

createFile('VitoScaletta.txt', `My name is Vito Scaletta. I was born in Sicily in 1925. That little guy's me. I'm standing there with my parents and my sister Francesca in front of our old house. I don't really remember too much about the old country... except that we were pretty hard up. And then one day, my father decided it was time to move away. Away from Sicily. Across the ocean to start a new life in America. Never in my life had I seen anything as fantastic as Empire Bay. It was beautiful. On the other hand, I'd never seen anything filthier or more disgusting than our new shithole of an apartment. "The American Dream." It was more like a nightmare. My father started working at the part for the guy who arranged our emigration. It was back-breaking work, and what little money he made mostly went towards booze. Eventually parents sent me to school. I had to learn English, and I sure as hell wasn't gonna do that in a neighbourhood full of italians. That's where I met Joe…`)

// 3.
function appendToFile (filePath, content){
    fs.appendFile(filePath, content, (err)=>{
        if (err) throw err;
        console.log('Content has been added to the file');})
}

appendToFile('Mafia.txt', `Sorry kid, Joe wasn't part of our deal`);

// 4.

function deleteFile(filePath){
    try {
       fs.unlinkSync(filePath);
        console.log('file has been deleted')
    } catch (err){
 console.log('file does not exist')
    }
}

deleteFile('deleteThisShit.txt')

// 5.
function moveFile (sourcePath, destinationPath){
    fs.rename(sourcePath, destinationPath, (err)=>{
        if (err) throw err
     console.log('The file has been moved');
    });
}

moveFile('...', '...')
