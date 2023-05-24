# Contribution tips and guidelines

- The `master` branch contains codebase under active development. Please raise a pull request
  directly to the master branch for any features. Create a new branch on the core repository for
  any new feature you want to start working on.

- When creating a new branch for development, make sure the branch name is relevant and concise.

  It is recommended to use the JIRA ticket number in the branch name (if one exists), or something
  related to the feature that's being worked on.

  **Please do not include your username in the branch name.**

- Make sure your request name follows the format [`<type>`](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#type)[`(<scope>)`](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#scope)`:
  `[`<subject>`](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#subject)` [JIRATICKET]`.  
  `(<scope>)` is optional.

- The list of people specified in [CODEOWNERS](./CODEOWNERS) will be automatically assigned as
  **Reviewers** for your pull request.
  
- While merging, **please delete the optional extended description before committing the merge.**

  This allows for a clean commit history on the master branch.  Here are some additional tips for
  maintaining a clean history: [`Practical GIT Usage`](https://github.corp.ebay.com/SellerHub/fe-reference/blob/master/practical-git-usage.md).
