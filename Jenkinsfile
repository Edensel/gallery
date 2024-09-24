pipeline{
    agent any

    stages {
        stage('Buid') {
            sh 'npm install'
        }
    }

    stage ('Test') {
        steps {
            sh 'npm test'
        }
        post {
            failure {
                mail to: 'esekondensel@gmail.com',
                    subject: "Failed Pipeline: ${currentBuild.fullDisplayName}",
                    body: "Something is wrong with ${eve.BUILD_URL}"
            }
        }
    }

    stage ('Deploy') {
        steps {
            sh 'npm start'
        }
    }

    post {
        success {
            slackSend channel: 'densel-IP-1',
                color: 'grey',
                message: "Build successfull! Build ID: $env.BUILD_ID}\nDeploy URL: ${env.RENDER_DEPLOY_URL}"
        }
    }
}