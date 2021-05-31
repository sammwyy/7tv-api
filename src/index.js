import GraphQL from "./graphql";

import UserEmotesQuery from "./graphql/query/userEmotesQuery";
import UserQuery from "./graphql/query/userQuery";

import User from "./classes/user";

class SevenTV {
    constructor() {
        this.gql = new GraphQL("https://api.7tv.app/v2/gql");
    }

    async fetchUserEmotes(userID) {
        const query = await this.gql.request(UserEmotesQuery, { id: userID });
        return new User(query.user).emotes;
    }

    async fetchUser(userID) {
        const query = await this.gql.request(UserQuery, { id: userID });
        return new User(query.user);
    }
}

export default () => {
    return new SevenTV();
}

module.exports = () => {
    return new SevenTV();
}