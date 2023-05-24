const crypto = require('crypto');

/**
 * if md4 algorithm is not available anymore in NodeJS 17+ (because of lib SSL 3).
 * In that case, silently replace md4 by md5 algorithm.
 */
try {
    crypto.createHash('md4');
} catch (e) {
    console.warn('Crypto "md4" is not supported anymore by this Node version');

    const origCreateHash = crypto.createHash;

    crypto.createHash = (alg, opts) => origCreateHash(alg === 'md4' ? 'md5' : alg, opts);
}

module.exports = async ({ config }) => {
    config.module.rules.push({
        test: /\.less$/,
        use: [
            'style-loader', // creates style nodes from JS strings
            'css-loader', // translates CSS into CommonJS
            'less-loader', // compiles Less to CSS
        ]
    });

    return config;
};
