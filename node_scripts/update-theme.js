/* eslint-disable no-undef */
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const { copySync } = require('fs-extra');

const fs = require('fs');
const { execSync } = require('child_process');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const PATHS = {
    themeVersion: "./src/assets/theme/_theme.scss",
    packageJson: "./package.json",
    themeBaseDir: "./src/assets/theme/theme-base",
    themeExtensions: "./src/assets/theme/_extensions.scss",
    themeExtensionsBackup: "./src/assets/theme/_extensions.scss.bak",
    backupDir: "./src/assets/theme/theme-base.bak/",
    tempDir: "../.node_temp/",
    clonedDir: "../.node_temp/primereact-sass-theme/",
    clonedThemeBaseDir: "../.node_temp/primereact-sass-theme/theme-base/",
    clonedThemeExtensions:
        "../.node_temp/primereact-sass-theme/themes/lara/lara-dark/_extensions.scss",
    clonedPackageJson: "../.node_temp/primereact-sass-theme/package.json",
};

const REPO_URL = 'https://github.com/primefaces/primereact-sass-theme.git';

async function getThemeVersion(path) {
    const data = fs.readFileSync(path, 'utf8');
    const match = data.match(/Version: "(.*?)";/);
    return match ? match[1] : null;
}

async function getPrimeVersion(path) {
    const data = fs.readFileSync(path, 'utf8');
    const packageJson = JSON.parse(data);
    let version = packageJson.dependencies.primereact;
    return version ? version.slice(1) : null;
}

async function getClonedThemeVersion(path) {
    const data = fs.readFileSync(path, 'utf8');
    const packageJson = JSON.parse(data);
    return packageJson.version;
}

async function cloneRepo() {
    execSync(`git clone ${REPO_URL} ${PATHS.clonedDir}`);
    if (!fs.existsSync(PATHS.clonedDir)) throw new Error("Failed to clone repo.");
}

async function updateThemeVersion(path, newVersion) {
    const data = fs.readFileSync(path, 'utf8');
    const updatedData = data.replace(/Version: "(.*?)";/, `Version: "${newVersion}";`);
    fs.writeFileSync(path, updatedData, 'utf8');
}

async function main() {
    const themeVersion = await getThemeVersion(PATHS.themeVersion);
    const primeVersion = await getPrimeVersion(PATHS.packageJson);

    console.log(`Current theme version: ${themeVersion} | Current PrimeReact version: ${primeVersion}`);

    if (themeVersion === primeVersion && fs.existsSync(PATHS.themeBaseDir)) {
        console.log("Theme is up to date.");
        process.exit();
    }

    console.log("Theme is outdated. Updating...");

    if (fs.existsSync(PATHS.tempDir)) {
        fs.rmSync(PATHS.tempDir, { recursive: true });
    }

    await cloneRepo();

    const newVersion = await getClonedThemeVersion(PATHS.clonedPackageJson);

    if (fs.existsSync(PATHS.backupDir)) {
        fs.rmSync(PATHS.backupDir, { recursive: true });
    }

    if (fs.existsSync(PATHS.themeExtensionsBackup)) {
        fs.rmSync(PATHS.themeExtensionsBackup);
    }

    if (fs.existsSync(PATHS.themeBaseDir)) {
        fs.renameSync(PATHS.themeBaseDir, PATHS.backupDir);
    }

    if (fs.existsSync(PATHS.themeExtensions)) {
        fs.renameSync(PATHS.themeExtensions, PATHS.themeExtensionsBackup);
    }

    copySync(PATHS.clonedThemeBaseDir, PATHS.themeBaseDir);
    copySync(PATHS.clonedThemeExtensions, PATHS.themeExtensions);

    await updateThemeVersion(PATHS.themeVersion, newVersion);

    if (fs.existsSync(PATHS.tempDir)) {
        fs.rmSync(PATHS.tempDir, { recursive: true });
    }

    console.log("Theme updated successfully.");

    readline.question("Would you like to delete the backup files? (y/n): ", async (answer) => {
        if (answer.toLowerCase() === "y") {
            if (fs.existsSync(PATHS.backupDir)) {
                fs.rmSync(PATHS.backupDir, { recursive: true });
            }
            if (fs.existsSync(PATHS.themeExtensionsBackup)) {
                fs.rmSync(PATHS.themeExtensionsBackup);
            }
            console.log("Backup files deleted.");
        }
        readline.close();

        process.exit();
    });
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});
