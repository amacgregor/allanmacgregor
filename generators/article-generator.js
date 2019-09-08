// generators/track-generator.js
const { inputRequired } = require('./utils')

module.exports = plop => {
    plop.setGenerator('track entry', {
        prompts: [
            // question 1
            {
                type: 'input',
                name: 'title',
                message: ' f',
                validate: inputRequired('title')
            },
            // question 2
            {
                type: 'input',
                name: 'artist',
                message: 'Track artist?',
                validate: inputRequired('artist')
            },
            // question 3
            {
                type: 'input',
                name: 'url',
                message: 'Track URL?'
            },
            // question 4
            {
                type: 'input',
                name: 'tags',
                message: 'Tags? (separate with comma)'
            },
            // question 5
            {
                type: 'input',
                name: 'body',
                message: 'Body text?'
            },
            // question 6
            {
                type: 'confirm',
                name: 'draft',
                message: 'Save as draft?',
                default: false
            }
        ], 
    })
        actions: [], // empty for now
    })
}