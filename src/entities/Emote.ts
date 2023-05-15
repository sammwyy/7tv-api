import EmoteData from "./EmoteData";

export default interface Emote {
    id: string;
    name: string;
    flags: number;
    timestamp: number;
    actor_id: string | null;
    data: EmoteData;
}