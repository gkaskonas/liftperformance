import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";
import { Config } from "sst/node/config";

import { CloudFrontClient, CreateInvalidationCommand } from "@aws-sdk/client-cloudfront";

const cloudFront = new CloudFrontClient({});

async function invalidateCFPaths(paths: string[]) {
  await cloudFront.send(
    new CreateInvalidationCommand({
      // Set CloudFront distribution ID here
      DistributionId: process.env.NEXT_PUBLIC_VERCEL_ENV === "production" ? "E13L5GWIWR7BYA" : "E1HRZ7LPEWPM61",
      InvalidationBatch: {
        CallerReference: `${Date.now()}`,
        Paths: {
          Quantity: paths.length,
          Items: paths,
        },
      },
    }),
  );
}


// e.g a webhook to `your-website.com/api/revalidate?tag=collection&secret=<token>`
export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");
  const tag = request.nextUrl.searchParams.get("tag");
  const REVALIDATE_TOKEN = Config.REVALIDATE_TOKEN;

  if (secret !== REVALIDATE_TOKEN) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  if (!tag) {
    return NextResponse.json({ message: "Missing tag param" }, { status: 400 });
  }

  revalidateTag(tag);

  await invalidateCFPaths(["/blog/*"]);

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
