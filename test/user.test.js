const SevenTV = require("../lib");
const api = SevenTV();

test('Fetch User', async () => {
    const user = await api.fetchUser("fapparamoarr");
    expect(user.twitch_id).toBe("179992320");
});