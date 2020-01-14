// Reads configuration file and creates hierarchy of directories and files
// and writes the context of the configuraton file into the newly created file
// Uses 'require' to read the file

const FileWriter = require('./FileWriter');
const config = require('./config.json');

(async () => {

	if (!config.path) {
		console.log("Empty path has been given. Nothing to do.")
		return;
	}

	let content = "";

	if (config.content)
		content = JSON.stringify(config.content);

	await FileWriter.writeFile(config.path, content);
})();