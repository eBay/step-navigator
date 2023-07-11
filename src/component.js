module.exports = class {
    onCreate() {
        this.state = {
            currentPage: 0,
            nextBtnDisabled: false,
            prevButtonDisabled: true
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
            this.setState({ nextBtnDisabled: true, prevButtonDisabled: false });

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
