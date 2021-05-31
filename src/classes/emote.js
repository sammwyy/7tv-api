import User from "./user";

export default class Emote {
    constructor({ id, name, owner, visibility, tags, height, width, channel_count, urls }) {
        this.id = id;
        this.name = name;
        this.visibility = visibility;
        this.tags = tags;
        this.height = height;
        this.width = width;

        if (owner) {
            this.owner = new User(owner);
        }
    }
}