const path = require('path');

const root = path.resolve(__dirname);

module.exports = {
    entry: 'src/index.js',
    output: {
        dir: 'build/',
        clean: true,
        html: {
            template: './index.html',
        },
    },
    plugins: [
        {
            resolve: '@poi/plugin-typescript',
            options: {
                vue: false,
            },
        },
        {
            resolve: '@poi/plugin-offline',
            options: {},
        },
        {
            resolve: '@poi/plugin-pwa',
            options: {},
        },
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
            rule.use[0].options = {};
        }
        return config;
    },
};
