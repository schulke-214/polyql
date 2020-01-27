import {FetchOptions, GraphQLRequest, GraphQLResponse} from "types";
import {GraphQLTransporter} from "./index";

export class HTTPBodyTransporter implements GraphQLTransporter {
    url: string;
    options: FetchOptions;

    constructor(url: string, options: FetchOptions = {}) {
        if (!url || typeof url !== 'string') {
            throw new Error('HTTPBodyTransporter: url either not provided or is not a string!');
        }

        this.url = url;

        const { headers, ...others } = options;

        this.options = {
            headers: {
                'Content-Type': 'application/json',
                ...headers
            },
            ...others
        };
    }

    public async fetch(request: GraphQLRequest): Promise<GraphQLResponse> {
        const body = JSON.stringify(request);
        const response = await fetch(this.url, {
            method: 'POST',
            body,
            ...this.options
        });

        try {
            return await response.json();
        } catch (e) {
            throw e;
        }
    }
}
