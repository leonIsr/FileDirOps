const FsAync = require('./FsAsync')

/**
 * Creates and writes content into file
 * Will create folder hierarchy if doesn't exists
 */
class FileWriter {
    /**
    * Promise wrapper around the fs.writeFile function
    * @param {string} filePath Full file name (could contain directories: moshe.txt, .\dir1\dir2\moshe.json)
    * @param {any} fileContent  The data to write. If something other than a Buffer or Uint8Array is provided, the value is coerced to a string.
    */
    static async writeFile(filePath, content = "") {
        if (!filePath)
            throw Error("filePath is undefined");

        let fileNameIndex = filePath.lastIndexOf("\\");
        let dirPath = filePath.slice(0, fileNameIndex);
        let fileName = filePath.slice(fileNameIndex + 1, filePath.length);

        if (dirPath == "")
            console.log("Path doesn't contain any directories to create.")
        else
            await FsAync.mkdirAsync(dirPath, true);

        if (!fileName)
            console.log("Path doesn't contain file name to create.")
        else
            await FsAync.writeFileAsync(dirPath + "\\" + fileName, content);
    }
}

module.exports = FileWriter;