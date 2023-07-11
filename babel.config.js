module.exports = (api) => {
    const isJest = api.caller((caller) => caller && caller.name === 'babel-jest');

    if (isJest) {
        return {
            plugins: ['@babel/plugin-transform-modules-commonjs']
        };
    }

    return {}; // or something else
};
