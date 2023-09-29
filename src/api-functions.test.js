const { getPlayerStats } = require("./api-functions");

global.fetch = jest.fn();

test("getPlayerStats returns player statistics", async () => {
  const player = "M_Mcflyyy";
  const time = "lifetime";
  const url = `https://fortnite-api.com/v2/stats/br/v2?name=${player}&accountType=epic&timeWindow=${time}`;

  global.fetch.mockResolvedValueOnce({
    ok: true,
    status: 202,
    headers: { "Content-Type": "application/json" },
    json: async () => ({
      data: {
        playerName: "M_Mcflyyy",
        lifetimeStats: {
          wins: 100,
          kills: 500,
          deaths: 200,
          // Add more relevant statistics here
        },
      },
    }),
  });

  const result = await getPlayerStats(player, time);

  // Assert
  expect(result).toBeDefined();
  expect(global.fetch).toHaveBeenCalledWith(url, {
    headers: {
      Authorization: process.env.FORTNITE_APIKEY,
    },
  });
  expect(result.status).toBe(202);
  expect(result.headers.get("Content-Type")).toBe("application/json");
});
