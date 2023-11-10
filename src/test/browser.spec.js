/**
 * @jest-environment jsdom
 */
const path = require('path');
const runSnapshotTests = require('@marko/fixture-snapshots/jest').default;
const { render, fireEvent } = require('@marko/testing-library');
const defaultFixture = require('./fixtures/default');
const template = require('../index.marko').default;
const defaultInput = defaultFixture.defaultStepper.input;

runSnapshotTests(path.resolve(__dirname, '../'), defaultInput);

describe('Given the step-navigator component is rendered with the default input', () => {
    let emitted;
    let getByText;

    beforeEach(async() => {
        ({ getByText, emitted } = await render(template, defaultInput));
    });

    describe('When the component renders the default input', () => {
        it('should always enable both the prev button and the next button by default', () => {
            expect(getByText('Next')).toBeEnabled();
            expect(getByText('Previous')).toBeEnabled();
        });

        describe('When the button states are handled by input', () => {
            it(`should make sure that the next button is enabled, 
            & previous button is disabled (as per input)`, async() => {
                const modifiedInput = { ...defaultInput,
                    nextStepButtonDisabled: false,
                    previousStepButtonDisabled: true
                };

                ({ getByText, emitted } = await render(template, modifiedInput));

                expect(getByText('Next')).toBeEnabled();
                expect(getByText('Previous')).toBeDisabled();
            });

            it(`should make sure that the prev button is enabled, 
            & the next button is disabled (as per input)`, async() => {
                const modifiedInput = { ...defaultInput,
                    nextStepButtonDisabled: true,
                    previousStepButtonDisabled: false
                };

                ({ getByText, emitted } = await render(template, modifiedInput));

                expect(getByText('Next')).toBeDisabled();
                expect(getByText('Previous')).toBeEnabled();
            });
        });

        describe('When the user clicks the Next button', () => {
            beforeEach(async() => {
                await fireEvent.click(getByText('Next'));
            });

            it('should emit the next-button-click event', async() => {
                expect(emitted('next-button-click')).toHaveLength(1);
            });
        });

        describe('When the user clicks the Previous button', () => {
            beforeEach(async() => {
                await fireEvent.click(getByText('Previous'));
            });

            it('should emit the previous-button-click event', async() => {
                expect(emitted('previous-button-click')).toHaveLength(1);
            });
        });

        describe('When static content is passed to the component', () => {
            it('should render the static content', () => {
                expect(getByText('Static Content Header')).toBeInTheDocument();
            });
        });
    });
});
