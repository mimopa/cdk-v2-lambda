import { Duration, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Function, Runtime, AssetCode } from 'aws-cdk-lib/aws-lambda';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class ShowfeeAwsStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'ShowfeeAwsQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
    const fn = new Function(this, 'HelloWorld', {
      functionName: 'HelloWorld',
      handler: "index.handler",
      runtime: Runtime.NODEJS_14_X,
      code: new AssetCode(`./src`),
      memorySize: 512,
      timeout: Duration.seconds(10),
    });
  }
}
