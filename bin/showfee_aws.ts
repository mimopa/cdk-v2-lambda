#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { ShowfeeAwsStack } from '../lib/showfee_aws-stack';

const app = new cdk.App();
/* エントリポイントとしてアカウント、リージョンを指定する 
   複数アカウントを指定する場合は、環境変数で工夫する必要がある。
   それよりも、環境変数を切り替えながらStackへ渡す値は一つでよいかもしれない。
*/
new ShowfeeAwsStack(app, 'Stack-handhson-lambda', {  
  env: { account: process.env.AWS_ACCOUNT_ID, region: process.env.AWS_REGION },
});