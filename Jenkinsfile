pipeline {
    agent {
        node {
            label 'nodejs-builder'
        }
    }

    environment {
        SKIP_E2E = 'true'
        GH_TOKEN = credentials('b0a583fc-2ae4-4eef-8156-97339c9393b5')
        NPM_TOKEN = credentials('NPM_TOKEN')
    }

    tools {
        nodejs "node-18.13.0"
    }

    stages {
        stage('Build information') {
            steps {
                sh 'printenv'
                script {
                    env.SKIP_CI = sh (script: "git log -1 | grep '\\[skip ci\\]'", returnStatus: true) == 0
                    echo "SKIP CI: ${env.SKIP_CI}"
                }
            }
        }

        stage('Install dependencies') {
            when {
                expression {
                    env.SKIP_CI == 'false'
                }
            }
            steps {
                sh 'yarn config set registry https://npm.corp.ebay.com'
                sh 'yarn'
            }
        }

        stage('Lint PR title') {
            when {
                expression {
                    env.SKIP_CI == 'false' && env.CHANGE_ID != null
                }
            }
            steps {
                sh 'echo $CHANGE_TITLE | npx commitlint --extends @commitlint/config-conventional --verbose'
            }
        }

        stage('Lint') {
            when {
                expression {
                    env.SKIP_CI == 'false'
                }
            }
            steps {
                sh 'yarn lint'
            }
        }

        stage('Test') {
            when {
                expression {
                    env.SKIP_CI == 'false'
                }
            }
            steps {
                sh 'yarn test'
            }
        }

        stage('Coverage') {
            when {
                expression {
                    env.SKIP_CI == 'false'
                }
            }
            steps {
                sh 'yarn coverage'
                sh 'cp coverage/cobertura-coverage.xml cobertura.xml'
            }
        }

        stage('Record baseline coverage') {
            when {
                expression {
                    env.SKIP_CI == 'false' && env.BRANCH_NAME == 'master'
                }
            }
            steps {
                script {
                    currentBuild.result = 'SUCCESS'
                 }
                step([$class: 'MasterCoverageAction', publishResultAs: 'statusCheck', scmVars: [GIT_URL: env.GIT_URL]])
            }
        }

        stage('Record PR coverage') {
            when {
                expression {
                    env.SKIP_CI == 'false' && env.BRANCH_NAME != 'master' && env.CHANGE_ID != null
                }
            }
            steps {
                script {
                    currentBuild.result = 'SUCCESS'
                }
                step([$class: 'CompareCoverageAction', publishResultAs: 'statusCheck', scmVars: [GIT_URL: env.GIT_URL]])
            }
        }

        stage('Deploy storybook') {
            when {
                expression {
                    env.SKIP_CI == 'false' && env.BRANCH_NAME == 'master'
                }
            }
            steps {
                sh 'yarn deploy-storybook'
            }
        }

        stage('Semantic release') {
            when {
                expression {
                    env.SKIP_CI == 'false' && env.BRANCH_NAME == 'master'
                }
            }
            environment {
                GIT_AUTHOR_NAME = "githubbot-b2c-sjc-je"
                GIT_AUTHOR_EMAIL = "githubbot-b2c-sjc-je@corp.ebay.com"
                GIT_COMMITTER_NAME = "githubbot-b2c-sjc-je"
                GIT_COMMITTER_EMAIL = "githubbot-b2c-sjc-je@corp.ebay.com"
            }
            steps {
                sh 'yarn semantic-release'
            }
        }
    }

    post {
        success {
            junit(
                allowEmptyResults: true,
                testResults: 'coverage/junit.xml'
            )
        }
    }
}
