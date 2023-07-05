module.exports = class {
    onCreate() {
        this.state = {
            currentPage: 0
        };
    }

    goToNextStep() {
        const { currentPage } = this.state;
        const nextPageIdx = currentPage + 1;

        this.emit('next-button-click', { index: nextPageIdx });

        if (nextPageIdx >= this.input.step.length) {
            return;
        }

        if (currentPage < 3) {
            this.setState({ currentPage: nextPageIdx });
        }
    }

    goToPreviousStep() {
        const { currentPage } = this.state;
        const prevPageIdx = currentPage - 1;

        this.emit('previous-button-click', { index: prevPageIdx });

        if (currentPage === 0) {
            return;
        }

        this.setState({ currentPage: prevPageIdx });
    }
};
