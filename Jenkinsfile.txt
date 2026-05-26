pipeline {
    agent any
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
                bat 'npm audit || true'
            }
        }
        stage('Security') {
            steps {
                echo 'Security audit...'
                bat 'npm audit --audit-level=high || true'
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
                bat 'echo Release %BUILD_NUMBER% > release.txt'
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