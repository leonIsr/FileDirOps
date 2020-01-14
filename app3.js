// Reads configuration file and creates hierarchy of directories and files
// and writes the context of the configuraton file into the newly created file
// User provides configuration file path through the console

const FileWriter = require('./FileWriter');
const ReadFileAsync = require('./FsAsync');

const standartInput = process.stdin;
standartInput.setEncoding('utf-8');
console.log("Please provide full path to json configuration file: ");

standartInput.on('data', async (filePath) => {
    let jsonObj = JSON.parse(await ReadFileAsync.readFileAsync(filePath.replace("\r\n", "")));

    if (!jsonObj.path) {
        console.log("Empty path has been given. Nothing to do.")
        return;
    }
    let content = "";

    if (jsonObj.content)
        content = JSON.stringify(jsonObj.content);

    await FileWriter.writeFile(jsonObj.path, content);
});