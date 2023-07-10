const testComponent = require('../example-components/test_template.marko');
const testComponent2 = require('../example-components/test_template-2.marko');
const testComponent3 = require('../example-components/test_template-3.marko');
const staticComponent = require('../static_template.marko');

function createBody(html) {
    return (out) => out.html(html);
}

module.exports = {
    default: {
        input: {
            title: 'Step Navigator',
            previousStepText: 'Previous',
            nextStepText: 'Next',
            width: '700px',
            buttonAlignment: 'flex-start',
            'static-content': staticComponent,
            step: [
                {
                    a11yText: 'Some A11y Text',
                    title: createBody('<span>Step 1 Title</span>'),
                    subtitle: createBody('<span>#1 Subtitle</span>'),
                    content: testComponent
                },
                {
                    a11yText: 'Some A11y Text',
                    title: createBody('<span>Step 2 Title</span>'),
                    subtitle: createBody('<span>#2 Subtitle</span>'),
                    content: testComponent2
                },
                {
                    a11yText: 'Some A11y Text',
                    title: createBody('<span>Step 3 Title</span>'),
                    subtitle: createBody('<span>#3 Subtitle</span>'),
                    content: testComponent3
                }
            ]
        }
    }
};

