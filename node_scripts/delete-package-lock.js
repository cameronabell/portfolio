import { createRequire } from "module";
const require = createRequire(import.meta.url);

const fs = require("fs");
const path = "./package-lock.json";

if (fs.existsSync(path)) {
    fs.unlinkSync(path, (err) => {
        if (err) throw err;
    });
    console.log(path + " deleted successfully.");
}
