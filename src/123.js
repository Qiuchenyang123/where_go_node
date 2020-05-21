const glob = require('glob');
const path = require('path');
const fs = require('fs');
const url = require('url');
const resolveModule = (resolveFn, filePath) => {
    const extension = moduleFileExtensions.find(extension =>
        fs.existsSync(resolveFn(`${filePath}.${extension}`))
    );

    if (extension) {
        return resolveFn(`${filePath}.${extension}`);
    }

    return resolveFn(`${filePath}.js`);
};
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);
// 获取指定路径下的入口文件
function getEntries(globPath) {
    const files = glob.sync(globPath),
        entries = {};
    files.forEach(function(filepath) {
        const split = filepath.split('/');
        const name = split[split.length - 2];
        entries[name] = './' + filepath;
    });
    return entries;
}

const entries = getEntries('src/**/index.js');

function getIndexJs() {
    const indexJsList = [];
    Object.keys(entries).forEach((name) => {
        const indexjs = resolveModule(resolveApp, `src/${name}/index`)
        indexJsList.push({
            name,
            path: indexjs
        });
    })
    return indexJsList;
}
const indexJsList = getIndexJs();
console.log(indexJsList);
console.log(entries);