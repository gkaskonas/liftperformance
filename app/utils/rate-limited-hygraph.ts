import { GraphQLClient } from "graphql-request";

// Rate limiting configuration
const RATE_LIMIT_DELAY = 1000; // 1 second delay between requests
const MAX_REQUESTS_PER_MINUTE = 5; // Maximum requests per minute

class RateLimitedHygraph {
    private client: GraphQLClient;
    private lastRequestTime = 0;
    private requestCount = 0;
    private minuteStart = Date.now();

    constructor() {
        this.client = new GraphQLClient(
            "https://ap-northeast-1.cdn.hygraph.com/content/clmadu98l05l801uj4xd85odl/master",
            {
                fetch,
                next: {
                    tags: ["hygraph"],
                    revalidate: 86400,
                },
            }
        );
    }

    private async enforceRateLimit(): Promise<void> {
        const now = Date.now();

        // Reset counter every minute
        if (now - this.minuteStart > 30000) {
            this.requestCount = 0;
            this.minuteStart = now;
        }

        // Check if we've exceeded the rate limit
        if (this.requestCount >= MAX_REQUESTS_PER_MINUTE) {
            const waitTime = 30000 - (now - this.minuteStart);
            console.log(`Rate limit exceeded. Waiting ${waitTime}ms...`);
            await new Promise(resolve => setTimeout(resolve, waitTime));
            this.requestCount = 0;
            this.minuteStart = Date.now();
        }

        // Enforce minimum delay between requests
        const timeSinceLastRequest = now - this.lastRequestTime;
        if (timeSinceLastRequest < RATE_LIMIT_DELAY) {
            const waitTime = RATE_LIMIT_DELAY - timeSinceLastRequest;
            console.log(`Rate limiting: waiting ${waitTime}ms...`);
            await new Promise(resolve => setTimeout(resolve, waitTime));
        }

        this.lastRequestTime = Date.now();
        this.requestCount++;
    }

    async request<T = any>(query: any, variables?: any): Promise<T> {
        await this.enforceRateLimit();
        return this.client.request(query, variables);
    }
}

// Export a singleton instance
export const rateLimitedHygraph = new RateLimitedHygraph();
