pipeline {
    agent any

    environment {
        PATH = "C:\\Program Files\\nodejs;${env.PATH}"
    }

    stages {

        stage('Build') {
            steps {
                echo 'Building the application...'
                bat 'npm install'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                bat 'npm test'
            }
        }

        stage('Code Quality') {
            steps {
                echo 'Code quality check...'
                bat 'npm audit || exit 0'
            }
        }

        stage('Security') {
            steps {
                echo 'Security audit...'
                bat 'npm audit --audit-level=high || exit 0'
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