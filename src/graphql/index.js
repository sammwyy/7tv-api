import { GraphQLClient } from 'graphql-request'

const client = new GraphQLClient("https://api.7tv.app/v2/gql");

export default class GraphQL {
    constructor(endpoint, authorization) {
        this.endpoint = endpoint;
        this.authorization = authorization;

        this.client = new GraphQLClient("https://api.7tv.app/v2/gql");
    }

    async request(query, variables) {
        return client.request(query, variables, {
            authorization: this.authorization
        })
    }
}