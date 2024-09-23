pipeline{

    agent any

    stages {

        stage('Install Dependencies'){
            steps{
                script {
                    sh 'npm install'
                }
            }
        }
        stage('Deploy to Render'){
            steps{
                script{
                    sh 'node server.js'
                }
            }
        }
    }
    triggers {
        pollSCM('* * * * *');
    }
}