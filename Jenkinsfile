pipeline {
    agent {
        docker {
            image 'circleci/node:12.14.0-browsers'
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
        stage('Test') {
            environment { 
                // configure tests with environment variables
                // https://docs.qawolf.com/docs/configuration
                QAW_ARTIFACT_PATH = './artifacts'
            }
            steps {
                // delete old artifacts
                sh 'rm -rf ./artifacts'
                sh 'npx qawolf test'
            }
        }
    }
    post {
        always {
            archiveArtifacts(artifacts: 'artifacts/**/*.*', fingerprint: true) 
        }
    }
}