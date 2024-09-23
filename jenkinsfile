pipeline {
    agent any
    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Deploy to Render') {
            steps {
                sh 'node server.js'
            }
        }
    }
    triggers {
        pollSCM('* * * * *')
    }
    post {
        success {
            slackSend(channel: '#YourFirstName_IP1', message: "Build successful! Check it out at ${env.BUILD_URL}")
        }
        failure {
            slackSend(channel: '#YourFirstName_IP1', message: "Build failed! Check logs at ${env.BUILD_URL}")
        }
    }
}

