import fs from "fs/promises";
import path from "path";

async function renameJsxToTsx(dir) {
  try {
    // Read the directory contents
    const files = await fs.readdir(dir);

    // Process each file or directory
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stats = await fs.stat(filePath);

      if (stats.isDirectory()) {
        // Recursively process subdirectories
        await renameJsxToTsx(filePath);
      } else if (stats.isFile() && file.endsWith(".jsx")) {
        // Rename .jsx files to .tsx
        const newFilePath = filePath.replace(/\.jsx$/, ".tsx");
        await fs.rename(filePath, newFilePath);
        console.log(`Renamed ${filePath} to ${newFilePath}`);
      }
    }
  } catch (err) {
    console.error(`Error processing directory ${dir}:`, err);
  }
}

// Start renaming from the current directory
renameJsxToTsx(process.cwd());
