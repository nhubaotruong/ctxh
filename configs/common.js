module.exports = app => {

    // Load modules ---------------------------------------------------------------------------------------------------------------------------------
    app.loadModules = (loadController = true) => {
        const modelPaths = [],
            controllerPaths = [],
            requireFolder = (paths, loadPath) => app.fs.readdirSync(loadPath).forEach((filename) => {
                const filepath = app.path.join(loadPath, filename);
                if (app.fs.existsSync(filepath) && app.fs.statSync(filepath).isFile() && filepath.endsWith('.js')) {
                    require(filepath)(app);
                }
            });

        app.fs.readdirSync(app.modulePath).forEach(dirName => {
            const modelFilePath = app.path.join(app.modulePath, dirName, 'model.js'),
                controllerFilePath = app.path.join(app.modulePath, dirName, 'controller.js'),
                modelFolderPath = app.path.join(app.modulePath, dirName, 'model'),
                controllerFolderPath = app.path.join(app.modulePath, dirName, 'controller');

            if (app.fs.existsSync(modelFilePath) && app.fs.statSync(modelFilePath).isFile())
                modelPaths.push(modelFilePath);
            if (loadController && app.fs.existsSync(controllerFilePath) && app.fs.statSync(controllerFilePath).isFile())
                controllerPaths.push(controllerFilePath);

            if (app.fs.existsSync(modelFolderPath) && app.fs.statSync(modelFolderPath).isDirectory())
                requireFolder(modelPaths, modelFolderPath);
            if (loadController && controllerFolderPath && app.fs.existsSync(controllerFolderPath) && app.fs.statSync(controllerFolderPath).isDirectory())
                requireFolder(controllerPaths, controllerFolderPath);
        });
        modelPaths.forEach(path => require(path)(app));
        if (loadController) controllerPaths.forEach(path => require(path)(app));
    }
}