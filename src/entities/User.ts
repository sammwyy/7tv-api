import Connection from "./Connection";
import UserProfile from "./UserProfile";

export default interface User extends UserProfile {
    biography: string;
    connections: Connection[];
}