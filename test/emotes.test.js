const SevenTV = require("../lib");
const api = SevenTV();

test('Fetch Emotes', async () => {
    const emotes = await api.fetchUserEmotes("fapparamoarr");
    expect(emotes.length > 0).toBe(true);
});