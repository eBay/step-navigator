module.exports = class {
    onCreate() {
        debugger;
        this.state = {
            currentPage: 0
        };
    }

    goToNextStep() {
        const { currentPage } = this.state;
        const nextPageIdx = currentPage + 1;
        if (nextPageIdx >= this.input.renderBody.length) {
            return;
        } if (currentPage < 3) {
        this.setState({ currentPage: nextPageIdx }); 
    }
    }

    goToPreviousStep() {
        debugger;
        const { currentPage } = this.state;
        const prevPageIdx = currentPage - 1;
        if (currentPage === 0) {
            return;
        } 
        this.setState({ currentPage: prevPageIdx }); 
    }
};
