# Auction Service with AWS Lambda Serverless and NodeJS

## What's included
* Folder structure used consistently across our projects.
* [serverless-pseudo-parameters plugin](https://www.npmjs.com/package/serverless-pseudo-parameters): Allows you to take advantage of CloudFormation Pseudo Parameters.
* [serverless-bundle plugin](https://www.npmjs.com/package/serverless-pseudo-parameters): Bundler based on the serverless-webpack plugin - requires zero configuration and fully compatible with ES6/ES7 features.

## Getting started
```
sls create --name YOUR_PROJECT_NAME --template-url https://github.com/codingly-io/sls-base
cd YOUR_PROJECT_NAME
npm install
```

You are ready to go!

using middy middleswares like bodyParser, errorHandler
along with Create, implemented Read and Update operations via different handlers using dynamoDb query
creating a common middleware lib to be reused in multiple lambda functions
creating and deploying schedule functions to process data of dynamodb
added middy/validator and used it to validate queryParam status while getting auctions

events
  - http
  - schedule

sls deploy --verbose
sls deploy -f functionName
sls logs -f functionName -t
sls logs -f functionName --startTime 1m
sls logs -f functionName --startTime 1h
sls invoke -f functionName -l