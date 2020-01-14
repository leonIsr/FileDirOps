const fs = require('fs');

/**
 * Promise wrapper around the fs functions
 */
class ReadFileAsync {
	/**
	 * Promise wrapper around the fs.readFile function
	 * @param {string} fileName Full file name
	 */
	static async readFileAsync(fileName) {
		return new Promise((resolve, reject) => {
			if (!fileName)
				throw new Error("Parameter fileName is undefined");

			fs.readFile(fileName, 'utf8', (err, data) => {
				if (err)
					reject(err)
				else
					resolve(data);
			});
		});
	};

	/**
	 * Promise wrapper around the fs.mkdir function
	 * @param {string} dirPath Full root directory path
	 * @param {boolean} recursive Indicates whether parent folders should be created
	 */
	static async mkdirAsync(dirPath, recursive) {
		return new Promise((resolve, reject) => {
			if (!dirPath)
				throw new Error("Parameter dirPath is undefined");

			fs.mkdir(dirPath, { recursive: recursive }, (err) => {
				if (err)
					reject(err)
				else
					resolve();
			});
		});
	};

	/**
	 * Promise wrapper around the fs.writeFile function
	 * @param {string} fileName Full file name
	 * @param {any} fileContent  The data to write. If something other than a Buffer or Uint8Array is provided, the value is coerced to a string.
	 */
	static async writeFileAsync(fileName, fileContent = "") {
		return new Promise((resolve, reject) => {
			if (!fileName)
				throw new Error("Parameter fileName is undefined");

			fs.writeFile(fileName, fileContent, (err) => {
				if (err)
					reject(err);
				else
					resolve();
			})
		})
	};
}

module.exports = ReadFileAsync;