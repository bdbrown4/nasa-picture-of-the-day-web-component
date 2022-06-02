const fs = require('fs-extra');
const concat = require('concat');

build = async () => {
    const files = [
        './dist/nasa-picture-of-the-day-component/runtime.js',
        './dist/nasa-picture-of-the-day-component/polyfills.js',
        './dist/nasa-picture-of-the-day-component/main.js'
    ];

    await fs.ensureDir('build');
    await concat(files, 'build/nasa-picture-of-the-day-component.js');
}
build();