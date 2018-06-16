const path = require('path');

const root = path.resolve(__dirname);

module.exports = {
    outDir: 'build/',
    plugins: [
        require('@poi/plugin-typescript')({
            vue: false,
        }),
    ],
    configureWebpack(config, context) {
        config.resolve.extensions = [...config.resolve.extensions, '.tsx'];
        config.resolve.alias = {
            ...config.resolve.alias,
            Assets: path.resolve(root, 'assets'),
        };
        for (const rule of config.module.rules) {
            if (rule.test.toString() !== /\.(svg)(\?.*)?$/.toString()) {
                continue;
            }

            rule.use[0].loader = 'raw-loader';
        }
        return config;
    },
};
