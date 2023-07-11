const project = (displayName, config) => ({
    ...config,
    displayName,
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/__mocks__/mock-style.js',
        '\\.(css|less)$': '<rootDir>/__mocks__/mock-style.js'
    },
    testRegex: `/test/([^.]+\\.)?${displayName}(.*)(.spec|.test)*.js$`,
    rootDir: './',
    roots: [
        '<rootDir>/src/'
    ]
});

module.exports = {
    collectCoverageFrom: [
        'src/**/*.js',
        '!**/test/**'
    ],
    coverageReporters: [
        'text',
        'lcov',
        'cobertura'
    ],
    transform: {},
    coverageDirectory: 'coverage',
    setupFilesAfterEnv: [
        '@marko/testing-library/cleanup-after-each'
    ],
    projects: [
        project('browser', {
            preset: '@marko/jest/preset/browser',
            setupFilesAfterEnv: [
                '@marko/testing-library/cleanup-after-each',
                '@testing-library/jest-dom'
            ]
        }),
        project('server', {
            preset: '@marko/jest/preset/node',
            setupFilesAfterEnv: [
                '@marko/testing-library/cleanup-after-each'
            ]
        })
    ],
    reporters: [
        'default',
        ['jest-junit', {
            'outputDirectory': 'coverage',
            'outputName': 'junitCoverage.xml'
        }]
    ],
    verbose: true
};
