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

### Get user data

```javascript
const SevenTV = require("../lib");
const api = SevenTV();

async function test () {
    const user = await api.fetchUser("username_here");
    console.log(user); // Returns User (Class)
}
```

### Get user emotes

```javascript
const SevenTV = require("../lib");
const api = SevenTV();

async function test () {
    const emotes = await api.fetchUserEmotes("username_here");
    console.log(emotes); // Returns array of Emote (Class)
}
```

## 📦 Classes

### Emote class

```json
{
    "id": String,
    "name": String,
    "owner_id": String,
    "visibility": Number,
    "tags": [String],
    "height": [Number],
    "width": [Number]
}
```

### User class

```json
{
    "id": String,
    "description": String,
    "editor_ids": [String],
    "display_name": String,
    "twitch_id": String,
    "profile_image_url": String,
    "banned": Boolean,
    "role": {
        "name": String,
        "color": String,
        "position": Number
    }
}
```

## ❤️

Made with Love by Sammwy, Donate at [PayPal](https://paypal.me/sammwy)
