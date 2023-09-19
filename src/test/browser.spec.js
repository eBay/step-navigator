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
        it('should disable the prev button and enable the next button by default', () => {
            expect(getByText('Next')).toBeEnabled();
            expect(getByText('Previous')).toBeDisabled();
        });

        describe('When the user clicks the Next button', () => {
            beforeEach(async() => {
                await fireEvent.click(getByText('Next'));
            });

            it(`should make sure that the next button is enabled, 
            & previous button is disabled (as per defaults)`, () => {
                expect(getByText('Next')).toBeEnabled();
                expect(getByText('Previous')).toBeEnabled();
            });

            it('should emit the next-button-click event', async() => {
                expect(emitted('next-button-click')).toHaveLength(1);
            });

            it('should make sure side content exists', () => {
                expect(getByText('Static Content Header')).toBeInTheDocument();
            });
        });
    });
});
