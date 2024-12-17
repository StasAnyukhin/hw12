const path = require('path');

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';

    return {
        mode: isProduction ? 'production' : 'development',
        devtool: isProduction ? false : 'inline-source-map',
        devServer: isProduction
            ? {}
            : {
                static: path.resolve(__dirname, './dist'),
            },
    };
};
