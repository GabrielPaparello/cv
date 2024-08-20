const fs = require("fs");
const path = require("path");

function renameJsxToTsx(dir) {
  // Read the directory contents
  fs.readdir(dir, (err, files) => {
    if (err) {
      console.error(`Error reading directory ${dir}:`, err);
      return;
    }

    files.forEach((file) => {
      const filePath = path.join(dir, file);

      fs.stat(filePath, (err, stats) => {
        if (err) {
          console.error(`Error stating file ${filePath}:`, err);
          return;
        }

        if (stats.isDirectory()) {
          // Recursively process subdirectories
          renameJsxToTsx(filePath);
        } else if (stats.isFile() && file.endsWith(".jsx")) {
          // Rename .jsx files to .tsx
          const newFilePath = filePath.replace(/\.jsx$/, ".tsx");

          fs.rename(filePath, newFilePath, (err) => {
            if (err) {
              console.error(
                `Error renaming file ${filePath} to ${newFilePath}:`,
                err
              );
            } else {
              console.log(`Renamed ${filePath} to ${newFilePath}`);
            }
          });
        }
      });
    });
  });
}

// Start renaming from the current directory
renameJsxToTsx(process.cwd());
