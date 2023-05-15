import EmoteHost from "./EmoteHost";
import EmoteState from "./EmoteState";
import UserProfile from "./UserProfile";

export default interface EmoteData {
    id: string;
    name: string;
    flags: number;
    lifecycle: number;
    state: EmoteState[];
    listed: boolean;
    animated: boolean;
    owner: UserProfile;
    host: EmoteHost;
}