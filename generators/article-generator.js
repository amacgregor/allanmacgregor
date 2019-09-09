// generators/track-generator.js
const { inputRequired } = require('./utils')

module.exports = plop => {
    plop.setGenerator('article entry', {
        prompts: [
            {
                type: 'input',
                name: 'title',
                message: ' Title: ',
                validate: inputRequired('title')
            },
            {
                type: 'input',
                name: 'category',
                message: 'Category:',
                validate: inputRequired('category')
            },
            {
                type: 'input',
                name: 'tags',
                message: 'Tags (separate with comma): '
            },
            {
                type: 'confirm',
                name: 'draft',
                message: 'Save as draft?',
                default: false
            }
        ], 
        actions: data => {
            // Get the Current date
            data.createdDate = new Date().toISOString().split('T')[0];

            // Parse tags as a yaml array
            if(data.tags) {
                data.tags = `tags:\n - ${data.tags.split(',').join('\n - ')}`;
            }

            return [
                {
                    type: 'add',
                    path: '../src/pages/articles/{{createdDate}}---{{dashCase title}}/index.md',
                    templateFile: 'templates/article-md.template'
                }
            ];
        }
    })
}