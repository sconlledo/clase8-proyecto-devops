pipeline {
    agent any
    stages {
        stage("pipeline node") {
            agent {
                docker { 
                    image 'node:20.11.1-alpine3.19' 
                    reuseNode true
                }
            }
            stages {
                stage('instalar dependencias') {
                    steps {
                        sh 'npm install'
                    }
                }
                stage('ejecutar test') {
                    steps {
                        sh 'npm run test'
                    }
                }
                stage('hacer build') {
                    steps {
                        sh 'npm run build'
                    }
                }
            }
        }
        stage('Delivery de docker') {
            steps {
                script {
                    docker.withRegistry('http://localhost:8082', 'nexus-key') {
                        sh 'docker build -t localhost:8082/clase8-proyecto-devops .'
                        sh "docker tag localhost:8082/clase8-proyecto-devops localhost:8082/clase8-proyecto-devops:${env.BRANCH_NAME}-${env.BUILD_NUMBER}"
                        sh 'docker push localhost:8082/clase8-proyecto-devops'
                        sh "docker push localhost:8082/clase8-proyecto-devops:${env.BRANCH_NAME}-${env.BUILD_NUMBER}"
                    }
                }
            }
        }
        stage('Deploy de compose') {
            steps {
                script {
                    docker.withRegistry('http://localhost:8082', 'nexus-key') {
                        sh 'docker-compose pull'
                        sh "docker-compose up --force-recreate --build"
                    }
                }
            }
        }
    }
}