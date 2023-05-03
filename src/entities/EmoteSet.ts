import Emote from './Emote';

export default interface EmoteSet {
  id: string;
  name: string;
  flags: number;
  tags: string[];
  inmutable: boolean;
  pivileged: boolean;
  emotes?: Emote[];
}
