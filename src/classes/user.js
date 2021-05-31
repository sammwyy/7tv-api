import Emote from "./emote";

export default class User {
    constructor({ id, description, role, display_name, twitch_id, banned, emotes = [] }) {
        this.id = id;
        this.description = description;
        this.role = role;
        this.display_name = display_name;
        this.banned = banned;
        this.emotes = [];
        this.twitch_id = twitch_id;

        for (let emote of emotes) {
            this.emotes.push(new Emote(emote));
        }
    }
}