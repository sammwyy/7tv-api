import EmoteSet from './EmoteSet';
import ConnectionType from './ConnectionType';
import User from './User';

export default interface Connection {
  id: string;
  platform: ConnectionType;
  username: string;
  display_name: string;
  linked_at: number;
  emote_capacity: number;
  emote_set_id: number;
  emote_set: EmoteSet;
  user?: User;
}
