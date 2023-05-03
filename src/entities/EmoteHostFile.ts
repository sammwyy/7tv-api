import EmoteFormat from "./EmoteFormat";

export default interface EmoteHostFile {
    name: string;
    static_name: string;
    width: number;
    height: number;
    frrame_count: number;
    size: number;
    format: EmoteFormat;
}