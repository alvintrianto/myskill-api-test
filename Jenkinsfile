pipeline {
  agent any
  tools {
    nodejs 'NodeV18'
  }
  stages {
    stage('Install Deps') {  
      steps {
        sh 'npm install'
      }
    }

    stage('Unit Test') {  
      steps {
        sh 'npm run test'
      }
    }

  }
}