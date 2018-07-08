module.exports = {
    plugins: {
        'postcss-nested': {},
        'postcss-custom-media': {
            extensions: {
                '--mobile': '(min-width: 480px)',
                '--tablet': '(min-width: 769px)',
                '--laptop': '(min-width: 1025px)',
            },
            appendExtensions: true,
        },
    },
};