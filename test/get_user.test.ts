import SevenTV from '../src';

test('Fetch Emotes', async () => {
  const connection = await SevenTV.getTwitchUser('280803646');
  expect(connection.username).toBe('sammwy');
  expect(connection.id).toBe('280803646');
  expect(connection.platform).toBe('TWITCH');
  expect(connection.emote_capacity).toBeGreaterThanOrEqual(1000);
  expect(connection.emote_set.emotes?.length).toBeGreaterThanOrEqual(100);
});
