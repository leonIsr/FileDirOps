// Reads configuration file and creates hierarchy of directories and files
// and writes the context of the configuraton file into the newly created file
// Use 'fs' functions to read the file

const FileWriter = require('./FileWriter');
const ReadFileAsync = require('./FsAsync');
const configFileName = 'config.json';

(async () => {
	let jsonObj = JSON.parse(await ReadFileAsync.readFileAsync(configFileName));

	if (!jsonObj.path) {
		console.log("Empty path has been given. Nothing to do.")
		return;
	}
	let content = "";

	if (jsonObj.content)
		content = JSON.stringify(jsonObj.content);

	await FileWriter.writeFile(jsonObj.path, content);
})();