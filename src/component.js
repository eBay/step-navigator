module.exports = class {
    onCreate(input) {
        this.state = {
            currentPage: 0,
            nextStepButtonDisabled: input.nextStepButtonDisabled === undefined ? false : input.nextStepButtonDisabled,
            previousStepButtonDisabled: input.previousStepButtonDisabled === undefined
                ? true : input.previousStepButtonDisabled
        };
    }

    goToNextStep() {
        const { currentPage } = this.state;
        const nextPageIdx = currentPage + 1;

        this.emit('next-button-click', { index: nextPageIdx });

        // if (nextPageIdx > ) {
        //     return;
        // }

        if (currentPage < this.input.step.length - 1) {
            this.setState({ currentPage: nextPageIdx,
                nextStepButtonDisabled: false, previousStepButtonDisabled: false });
        }

        if (nextPageIdx === this.input.step.length - 1) {
            this.setState({ previousStepButtonDisabled: false });

            return;
        }
    }

    goToPreviousStep() {
        const { currentPage } = this.state;
        const prevPageIdx = currentPage - 1;

        this.emit('previous-button-click', { index: prevPageIdx });

        if (prevPageIdx < 0) {
            return;
        }

        this.setState({ currentPage: prevPageIdx, nextStepButtonDisabled: false, previousStepButtonDisabled: false });

        if (prevPageIdx === 0) {
            this.setState({ nextStepButtonDisabled: false, previousStepButtonDisabled: true });

            return;
        }
    }
};
