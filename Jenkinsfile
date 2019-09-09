pipeline {
  agent {
    docker {
      args '-p 3000:3000'
      image 'node:8'
    }

  }
  stages {
    stage('Build') {
      steps {
        sh 'docker-compose -f docker-compose.yml up -d --build'
      }
    }
  }
}