import component from '../index.marko';
import testComponent from './example-components/test_template.marko';
import testComponent2 from './example-components/test_template-2.marko';
import testComponent3 from './example-components/test_template-3.marko';
import staticComponent from './example-components/static_template.marko';

export default {
    title: 'Step Navigator',
    component
};

function createBody(html) {
    return (out) => out.html(html);
}

export const Default = () => ({
    input: {
        title: 'Step Navigator',
        previousStepText: 'Previous',
        nextStepText: 'Next',
        buttonAlignment: 'flex-start',
        static: staticComponent,
        nextStepButtonPriority: 'secondary',
        previousStepButtonPriority: 'primary',
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
});

export const DefaultWithStyleOverrideCentered = () => ({
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
});

export const StepperWidthProgressStepperWidth = () => ({
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
});

export const StepperNoStatic = () => ({
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
});

export const StepperHidden = () => ({
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
});

export const StepperWithFixedWidthAndNotFluid = () => ({
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
});

export const StepperWithCustomFooter = () => ({
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
});

export const StepperWithPreviousButtonNotDisabled = () => ({
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
});

export const StepperWithNextButtonDisabled = () => ({
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
});
