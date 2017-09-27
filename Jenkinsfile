node {
    stage('K6 loadtesting') {
        echo 'Starting to run load tests'
    }

    stage('Loadtests') {
      parallel (
        "First script": {
            bat 'k6.exe run loadtests/firstScript.js'
        },
        "Advanced script": {
    		bat 'k6.exe run loadtests/advancedScript.js'
        },
      )
    }

    stage('Loadtests passed') {
        echo 'Loadtests OK'
    }
}