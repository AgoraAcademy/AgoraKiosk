pipeline {
    agent {
        dockerfile {
            filename 'Dockerfile'
            additionalBuildArgs '--no-cache'
            args '-p 8001:80 --security-opt apparmor=unconfined'
        }
    }
    stages {
        stage('Install') {
            steps {
                sh 'cd /var/jenkins_home/workspace/AgoraKiosk/client'
                input message: 'Start to install? Click "proceed" to continue'
                sh 'npm cache clean --force'
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'cd /var/jenkins_home/workspace/AgoraKiosk/client'
                sh 'npm run build'
            }
        }
        stage('Deliver'){
            steps {
                sh 'service nginx start'
                input message: 'Finished using the website? Click "proceed" to continue)'
            }
            
        }
    }
    post {
        always{
            cleanWs()
        }
    }
}