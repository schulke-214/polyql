import { GraphQLRequest, GraphQLResponse } from "types";

export class GraphQLClientError extends Error {
    response: GraphQLResponse;
    request: GraphQLRequest;

    constructor(response: GraphQLResponse, request: GraphQLRequest) {
        const message = `${GraphQLClientError.extractMessage(response)}: ${JSON.stringify({ response, request })}`;

        super(message);

        this.response = response;
        this.request = request;
    }

    private static extractMessage(response: GraphQLResponse): string {
        try {
            return response.errors![0].message;
        } catch (e) {
            return `GraphQL Error (Code: ${response.status})`;
        }
    }
}
