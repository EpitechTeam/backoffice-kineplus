pipeline {
  agent {
    dockerfile {
      filename 'Dockerfile'
    }

  }
  stages {
    stage('Build') {
      steps {
        sh 'echo \'Jenkins is building the project...\''
      }
    }
  }
}