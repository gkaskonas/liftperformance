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
        value: "us17",
      });
      const MAILCHIMP_AUDIENCE_ID = new Config.Parameter(stack, "MAILCHIMP_AUDIENCE_ID", {
        value: "59ec9e6181",
      });
      const site = new NextjsSite(stack, "site", {
        bind: [MAILCHIMP_API_KEY, MAILCHIMP_API_SERVER, MAILCHIMP_AUDIENCE_ID],
        warm: app.stage === "prod" ? 2 : 0,
        environment: {
          NEXT_PUBLIC_VERCEL_ENV: app.stage === "prod" ? "production" : "development",
          NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID: app.stage === "prod" ? "GTM-KWXC4F4" : "whatever",
        },
        customDomain:
          app.stage === "prod"
            ? {
                domainName: "liftperformance.net",
                domainAlias: "www.liftperformance.net",
              }
            : undefined,
      });

      stack.addOutputs({
        SiteUrl: site.url,
      });
    });
  },
} satisfies SSTConfig;
