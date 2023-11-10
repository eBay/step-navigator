module.exports = class {
    onCreate(input) {
        this.isNextStepDisabled = input.nextStepButtonDisabled === undefined ? false : input.nextStepButtonDisabled;
        this.isPreviousStepDisabled = input.previousStepButtonDisabled === undefined
            ? true : input.previousStepButtonDisabled;

        this.state = {
            currentPage: 0,
            nextStepButtonDisabled: this.isNextStepDisabled,
            previousStepButtonDisabled: this.isPreviousStepDisabled
        };
    }

    onInput(input) {
        this.state.nextStepButtonDisabled = input.nextStepButtonDisabled
        this.state.previousStepButtonDisabled = input.previousStepButtonDisabled
    }

    goToNextStep() {
        const { currentPage } = this.state;
        const nextPageIdx = currentPage + 1;

        this.emit('next-button-click', { prevIndex: currentPage, index: nextPageIdx });

        if (currentPage < this.input.step.length - 1) {
            this.setState({ currentPage: nextPageIdx,
                nextStepButtonDisabled:
                this.state?.nextStepButtonDisabled,
                previousStepButtonDisabled:
                this.state?.previousStepButtonDisabled });
        }

        if (nextPageIdx === this.input.step.length - 1) {
            this.setState({ previousStepButtonDisabled: this.state?.previousStepButtonDisabled });

            return;
        }
    }

    goToPreviousStep() {
        const { currentPage } = this.state;
        const prevPageIdx = currentPage - 1;

        this.emit('previous-button-click', { prevIndex: currentPage, index: prevPageIdx });

        if (prevPageIdx < 0) {
            return;
        }

        this.setState({ currentPage: prevPageIdx,
            nextStepButtonDisabled:
            this.state?.nextStepButtonDisabled,
            previousStepButtonDisabled:
            this.state?.previousStepButtonDisabled
        });

        if (prevPageIdx === 0) {
            this.setState({
                nextStepButtonDisabled:
                this.state?.nextStepButtonDisabled,
                previousStepButtonDisabled:
                this.state?.previousStepButtonDisabled 
            });

            return;
        }
    }
};
