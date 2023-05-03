# 💬 7TV API

Unofficial 7TV API Wrapper for Node.js

## ⚙️ Installation

```bash
# With YARN:
yarn add 7tv

# With NPM:
npm install 7tv
```

## 📚 Usage

### Get user data and emotes

```typescript
import SevenTV from "7tv";

SevenTV.getTwitchUser('280803646')
    .then(console.log);
// Returns Connection interface,
```

## 📦 Interfaces

### Collection

```json
{
  "id": string,
  "platform": "DISCORD" | "TWITCH" | "YOUTUBE",
  "username": string,
  "display_name": string,
  "linked_at": number,
  "emote_capacity": number,
  "emote_set_id": number,
  "emote_set": EmoteSet,
  "user"?: User,
}
```

## ❤️

Made with Love by Sammwy, Donate at [PayPal](https://paypal.me/sammwy)
