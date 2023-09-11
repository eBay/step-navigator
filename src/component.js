module.exports = class {
    onCreate(input) {
        this.state = {
            currentPage: 0,
            nextBtnDisabled: input.nextBtnDisabled || false,
            prevButtonDisabled: input.prevButtonDisabled || true
        };
    }

    goToNextStep() {
        const { currentPage } = this.state;
        const nextPageIdx = currentPage + 1;

        this.emit('next-button-click', { index: nextPageIdx });

        if (currentPage < this.input.step.length - 1) {
            this.setState({ currentPage: nextPageIdx, nextBtnDisabled: false, prevButtonDisabled: false });
        }

        if (nextPageIdx === this.input.step.length - 1) {
            this.setState({ prevButtonDisabled: false });

            return;
        }
    }

    goToPreviousStep() {
        const { currentPage } = this.state;
        const prevPageIdx = currentPage - 1;

        this.emit('previous-button-click', { index: prevPageIdx });

        this.setState({ currentPage: prevPageIdx, nextBtnDisabled: false, prevButtonDisabled: false });

        if (prevPageIdx === 0) {
            this.setState({ nextBtnDisabled: false, prevButtonDisabled: true });

            return;
        }
    }
};
