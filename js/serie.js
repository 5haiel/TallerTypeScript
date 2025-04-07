"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Serie = void 0;
class Serie {
    id;
    title;
    channel;
    seasons;
    description;
    url;
    image;
    constructor(id, title, channel, seasons, description, url, image) {
        this.id = id;
        this.title = title;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.url = url;
        this.image = image;
    }
}
exports.Serie = Serie;
