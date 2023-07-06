import { Certificate } from "aws-cdk-lib/aws-certificatemanager";
import { SSTConfig } from "sst";
import { Config, NextjsSite } from "sst/constructs";


export default {
  config(_input) {
    return {
      name: "liftperformance",
      region: "ap-east-1",
      profile: "website",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const MAILCHIMP_API_KEY = new Config.Secret(stack, "MAILCHIMP_API_KEY");
      const MAILCHIMP_API_SERVER = new Config.Parameter(stack, "MAILCHIMP_API_SERVER", {
        value: "us17"
      });
      const MAILCHIMP_AUDIENCE_ID = new Config.Parameter(stack, "MAILCHIMP_AUDIENCE_ID", {
        value: "59ec9e6181"
      });
      const site = new NextjsSite(stack, "site", {
        bind: [MAILCHIMP_API_KEY, MAILCHIMP_API_SERVER, MAILCHIMP_AUDIENCE_ID],
        warm: 1,
        environment: {
          NEXT_PUBLIC_VERCEL_ENV: app.stage === "prod" ? "production": "development",
          NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID : "GTM-KWXC4F4",
        },
        customDomain: {
          domainName: "liftperformance.net",
          isExternalDomain: true,
          cdk: {
            certificate: Certificate.fromCertificateArn(stack, "MyCert", "arn:aws:acm:us-east-1:404319983256:certificate/e17d3238-460d-4c16-aed2-b8e9f6c4f4af"),
          },
        },
      });

      stack.addOutputs({
        SiteUrl: site.url,
      });
    });
  },
} satisfies SSTConfig;
