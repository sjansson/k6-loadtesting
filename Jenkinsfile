stage('K6 loadtesting') {
    echo 'Starting to run load tests'
}

stage('Loadtests') {
  parallel (
    "First script": {
        bat 'k6.exe run github.com/sjansson/k6-loadtesting/loadtests/firstScript.js'
    },
    "Advanced script": {
		bat 'k6.exe run github.com/sjansson/k6-loadtesting/loadtests/advancedScript.js'
    },
  )
}

stage('Loadtests passed') {
    echo 'Loadtests OK'
}