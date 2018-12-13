var reporter = require("cucumber-html-reporter");


try {
    var options = {
        theme: "bootstrap",
        jsonFile: "./reports/cucumber-json-report.json",
        output: "./reports/cucumber-html-report.html",
        reportSuiteAsScenarios: true,
        launchReport: false,
    };
    reporter.generate(options);
} catch (e) {
    console.log("Report generation is not possible with the following message:");
    console.log(e);
}



