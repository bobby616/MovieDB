module.exports = {
    preset: 'ts-jest',
    verbose: true,
    testEnvironment: 'node',
    globals: {
        'ts-jest': {
            diagnostics: {
                ignoreCodes: [1219, 1192, 2339],
            },
        },
    },
};
