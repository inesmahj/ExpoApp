import * as cdk from '@aws-cdk/core';
import * as codecommit from '@aws-cdk/aws-codecommit';
export class CdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    this.createRepository();
    // The code that defines your stack goes here
  }
  private createRepository() {
    const author = 'Ines';
    const repo = new codecommit.Repository(this, 'MyRepo', {
      repositoryName: `${author}-MobilePrototype`,
      description: `Git repository for mobile prototype of '${author}'`
    });
    const cfnRepo = repo.node.defaultChild as codecommit.CfnRepository;
    cfnRepo.addOverride('DeletionPolicy', 'Retain');
    return repo;
  }
}