module.exports = {
    plugins: {
        'postcss-nested': {},
        'postcss-custom-media': {
            extensions: {
                '--mobile': '(min-width: 375px)',
                '--tablet': '(min-width: 769px)',
            },
            appendExtensions: true,
        },
    },
};
