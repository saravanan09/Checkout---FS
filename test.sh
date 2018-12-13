#!/usr/bin/env bash
BASE_URL=https://fschallenge.test.qa.onfastspring.com/sarav-12112018 \
SELENIUM_URL=http://127.0.0.1:4444/wd/hub \
node_modules/.bin/cucumber-js  --format json:./reports/cucumber-json-report.json --tags @fastspring
node reports/report.js
