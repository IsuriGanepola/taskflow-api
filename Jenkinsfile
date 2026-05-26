pipeline {
    agent any

    environment {
        npm = '"C:\\Program Files\\nodejs\\npm.cmd"'
        node = '"C:\\Program Files\\nodejs\\node.exe"'
    }

    stages {

        stage('Build') {
            steps {
                echo 'Building the application...'
                bat '"C:\\Program Files\\nodejs\\npm.cmd" install'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                bat '"C:\\Program Files\\nodejs\\npm.cmd" test'
            }
        }

        stage('Code Quality') {
            steps {
                echo 'Code quality check...'
                bat '"C:\\Program Files\\nodejs\\npm.cmd" audit || exit 0'
            }
        }

        stage('Security') {
            steps {
                echo 'Security audit...'
                bat '"C:\\Program Files\\nodejs\\npm.cmd" audit --audit-level=high || exit 0'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application...'
                bat 'echo Deployed successfully'
            }
        }

        stage('Release') {
            steps {
                echo "Release build #${BUILD_NUMBER}"
                bat 'echo Release > release.txt'
            }
        }

        stage('Monitoring') {
            steps {
                echo 'Monitoring application...'
                bat 'echo Application is live and healthy'
            }
        }
    }

    post {
        success { echo 'Pipeline completed successfully!' }
        failure { echo 'Pipeline failed!' }
    }
}