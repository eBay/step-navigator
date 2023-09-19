const testComponent = require('../example-components/test_template.marko');
const testComponent2 = require('../example-components/test_template-2.marko');
const testComponent3 = require('../example-components/test_template-3.marko');
const staticComponent = require('../example-components/static_template.marko');

function createBody(html) {
    return (out) => out.html(html);
}

module.exports = {
    defaultStepper: {
        input: {
            title: 'Step Navigator',
            previousStepText: 'Previous',
            nextStepText: 'Next',
            width: '700px',
            buttonAlignment: 'flex-start',
            static: staticComponent,
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
    },
    defaultWithStyleOverrideCentered: {
        input: {
            title: 'Step Navigator',
            previousStepText: 'Previous',
            nextStepText: 'Next',
            buttonAlignment: 'flex-start',
            'content-styles': 'justify-content: center;',
            static: staticComponent,
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
    },
    stepperWidthProgressStepperWidth: {
        input: {
            title: 'Step Navigator',
            previousStepText: 'Previous',
            nextStepText: 'Next',
            width: '700px',
            buttonAlignment: 'flex-start',
            static: staticComponent,
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
    },
    stepperNoStatic: {
        input: {
            title: 'Step Navigator with no static content',
            previousStepText: 'Previous',
            nextStepText: 'Next',
            width: '700px',
            buttonAlignment: 'flex-start',
            step: [
                {
                    a11yText: 'Some A11y Text',
                    title: createBody('<span>Step 1 Title</span>'),
                    subtitle: createBody('<span>#1 Subtitle</span>'),
                    content: testComponent
                },
                {
                    a11yText: 'Some A11y Text #2',
                    title: createBody('<span>Step 2 Title</span>'),
                    subtitle: createBody('<span>#2 Subtitle</span>'),
                    content: testComponent2
                }
            ]
        }
    },
    stepperHidden: {
        input: {
            isProgressStepperHidden: true,
            title: 'Step Navigator with Hidden Progress Stepper',
            previousStepText: 'Previous',
            nextStepText: 'Next',
            width: '700px',
            buttonAlignment: 'flex-start',
            static: staticComponent,
            step: [
                {
                    a11yText: 'Some A11y Text',
                    title: createBody('<span>Step 1 Title</span>'),
                    subtitle: createBody('<span>#1 Subtitle</span>'),
                    content: testComponent
                },
                {
                    a11yText: 'Some A11y Text #2',
                    title: createBody('<span>Step 2 Title</span>'),
                    subtitle: createBody('<span>#2 Subtitle</span>'),
                    content: testComponent2
                }
            ]
        }
    },
    stepperWithFixedWidthAndNotFluid: {
        input: {
            fluid: false,
            isProgressStepperHidden: false,
            title: 'Step Navigator with Fixed Width and Not Fluid',
            previousStepText: 'Previous',
            nextStepText: 'Next',
            width: '700px',
            buttonAlignment: 'flex-start',
            static: staticComponent,
            step: [
                {
                    a11yText: 'Some A11y Text',
                    title: createBody('<span>Step 1 Title</span>'),
                    subtitle: createBody('<span>#1 Subtitle</span>'),
                    content: testComponent
                },
                {
                    a11yText: 'Some A11y Text #2',
                    title: createBody('<span>Step 2 Title</span>'),
                    subtitle: createBody('<span>#2 Subtitle</span>'),
                    content: testComponent2
                }
            ]
        }
    },
    stepperWithCustomFooter: {
        input: {
            title: 'Step Navigator',
            previousStepText: 'Previous',
            nextStepText: 'Next',
            buttonAlignment: 'flex-start',
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
            ],
            footer: testComponent
        }
    },
    stepperWithPreviousButtonNotDisabled: {
        input: {
            title: 'Step Navigator',
            previousStepText: 'Previous',
            nextStepText: 'Next',
            buttonAlignment: 'flex-start',
            static: staticComponent,
            nextStepButtonPriority: 'secondary',
            previousStepButtonPriority: 'primary',
            previousStepButtonDisabled: false,
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
    },
    stepperWithNextButtonDisabled: {
        input: {
            title: 'Step Navigator',
            previousStepText: 'Previous',
            nextStepText: 'Next',
            buttonAlignment: 'flex-start',
            static: staticComponent,
            nextStepButtonPriority: 'secondary',
            previousStepButtonPriority: 'primary',
            nextStepButtonDisabled: true,
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

