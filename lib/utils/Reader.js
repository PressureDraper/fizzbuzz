const fs = require("fs");

class Reader {

    static readJsonFile(path) {
        const rawdata = fs.readFileSync(path);
        return rawdata
    }
}