pipeline {
  agent any
  stages {
    stage('Dependencies') {
      steps {
        build(job: 'npm install', wait: true)
      }
    }
  }
}