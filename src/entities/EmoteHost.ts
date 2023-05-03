import EmoteHostFile from "./EmoteHostFile";

export default interface EmoteHost {
    url: string;
    files: EmoteHostFile[];
}