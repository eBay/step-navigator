/**
 * @jest-environment jsdom
 */
const path = require('path');
const runSnapshotTests = require('@marko/fixture-snapshots/jest').default;
const { render, fireEvent } = require('@marko/testing-library');
const defaultFixture = require('./fixtures/default');
const template = require('../index.marko').default;
const input = defaultFixture.default.input;

runSnapshotTests(path.resolve(__dirname, '../'), input);

describe('Given the step-navigator component is rendered with the default input', () => {
    let emitted;
    let getByText;

    beforeEach(async() => {
        ({ getByText, emitted } = await render(template, input));
    });

    describe('When the user clicks the Next button', () => {
        beforeEach(async() => {
            await fireEvent.click(getByText('Next'));
        });

        it('should emit the next-button-click event', async() => {
            expect(emitted('next-button-click')).toHaveLength(1);
        });
    });
});
