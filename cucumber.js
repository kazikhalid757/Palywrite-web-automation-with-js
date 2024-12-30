module.exports = {
    default: {
        require: [
            'features/step_definitions/*.js',
            'features/support/*.js'
        ],
        paths: ['features/*.feature'],
        format: ['progress-bar', 'html:cucumber-report.html'],
        formatOptions: {
            snippetInterface: 'async-await'
        }
    }
};