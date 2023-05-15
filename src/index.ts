import fetch from 'isomorphic-unfetch';

import Connection from './entities/Connection';
import Emote from './entities/Emote';

interface APIResponse {
  data: APIError | unknown;
  status: number;
}

interface APIError {
  status_code: number;
  status: string;
  error: string;
  error_code: number;
}

export class SevenTVClient {
  private readonly endpoint: string;

  constructor() {
    this.endpoint = 'https://7tv.io/v3/';
  }

  public async apiGET(
    path: string,
    headers: Record<string, string> = {},
  ): Promise<APIResponse> {
    if (!headers['X-7TV-Client']) {
      headers['X-7TV-Client'] = '7tv-api (js)';
    }

    const req = await fetch(this.endpoint + path, {
      headers,
    });
    const data = await req.json();
    return { data, status: req.status };
  }

  async getTwitchUser(userID: string): Promise<Connection> {
    const { data, status } = await this.apiGET('users/twitch/' + userID);
    if (status == 200) {
      return data as Connection;
    } else {
      throw new Error((data as APIError).error);
    }
  }

  async getEmotes(userID: string): Promise<Emote[]> {
    const user = await this.getTwitchUser(userID);
    return user.emote_set.emotes || [];
  }
}

const SevenTV = new SevenTVClient();
export default SevenTV;
