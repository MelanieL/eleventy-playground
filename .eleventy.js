module.exports = (config) => {
    // specify folders to be copied to the output folder
    config.addPassthroughCopy('./src/js/');
    config.addPassthroughCopy('./src/css/');
    // Setting recognized file extensions
    // config.setTemplateformats([
    //     'md',
    //     'css', // css is not yet a recognized template extesion in eleventy
    //     'jpg'
    // ]);

    return {
        dir: {
            input: 'src', //default: '.'
            output: 'public' //default: '_site'
        }
    }
};