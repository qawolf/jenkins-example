pipeline {
    agent {
        docker {
            image 'circleci/node:12.14.0-browsers' 
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
        stage('Test') {
            steps {
                sh 'npx qawolf test'
            }
        }
    }
}