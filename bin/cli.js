#!/usr/bin/env node
const { program } = require("commander");
const fs = require("fs-extra");
const path = require("path");
const { spawnSync } = require("child_process");

program
  .version(require("../package.json").version)
  .arguments("<project-directory>")
  .action(async (projectDir) => {
    try {
      // Create paths
      const templatePath = path.join(__dirname, "../template");
      const targetPath = path.join(process.cwd(), projectDir);

      // Create directory
      console.log(`Creating ${projectDir}...`);
      await fs.ensureDir(targetPath);

      // Copy template files
      console.log("Copying template files...");
      await fs.copy(templatePath, targetPath);

      // Process package.json
      const packageJsonPath = path.join(targetPath, "package.json");
      const packageJson = await fs.readFile(packageJsonPath, "utf-8");
      const rendered = require("ejs").render(packageJson, {
        projectName: projectDir,
      });
      await fs.writeFile(packageJsonPath, rendered);

      // Install dependencies
      console.log("Installing dependencies...");
      const npmCmd = process.platform === "win32" ? "npm.cmd" : "npm";
      spawnSync(npmCmd, ["install"], {
        cwd: targetPath,
        stdio: "inherit",
        shell: true,
      });

      console.log(`\n✅ Success! Created ${projectDir} at ${targetPath}`);
      console.log("\nNext steps:");
      console.log(`cd ${projectDir}`);
      console.log("npm run dev");
    } catch (error) {
      console.error("Error creating project:", error);
      process.exit(1);
    }
  })
  .parse(process.argv);
