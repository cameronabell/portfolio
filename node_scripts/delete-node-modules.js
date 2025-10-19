
import { createRequire } from "module";
const require = createRequire(import.meta.url);

const fs = require('fs');
const dir = 'node_modules/';

if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true }, (err) => {
        if (err) throw err;
    });
    console.log(dir + ' deleted successfully.');
}