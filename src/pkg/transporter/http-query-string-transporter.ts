import { FetchOptions, GraphQLRequest, GraphQLResponse } from "types";
import { GraphQLTransporter } from "./index";
import qs from "qs";

// NOT USABLE YET
export class HTTPQueryStringTransporter implements GraphQLTransporter {
    url: string;
    options: FetchOptions;

    constructor(url: string, options: FetchOptions = {}) {
        if (!url || typeof url !== 'string') {
            throw new Error('HTTPQueryStringTransporter: url either not provided or is not a string!');
        }

        this.url = url;
        this.options = options;
    }

    public async fetch(request: GraphQLRequest): Promise<GraphQLResponse> {
        const params = qs.stringify({
            query: encodeURI(request.query),
            variables: request.variables
        });
        const url = `${this.url}?${params}`;

        const response = await fetch(url, {
            method: 'GET',
            ...this.options
        });

        try {
            return await response.json();
        } catch (e) {
            throw e;
        }
    }
}
