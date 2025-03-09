test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);
});

test("GET to /api/v1/status should return updatedAt data", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");

  const responseBody = await response.json();
  expect(responseBody.updated_at).toBeDefined();

  const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parsedUpdatedAt);
});

test("GET to /api/v1/status should return maxConnetions to database", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");

  const responseBody = await response.json();
  expect(responseBody.dependeces.database.max_connections).toBeDefined();

  const maxConnections = responseBody.dependeces.database.max_connections;
  expect(maxConnections).toBe(100);
});

test("GET to /api/v1/status should return active connections to database", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");

  const responseBody = await response.json();
  expect(responseBody.dependeces.database.opened_connections).toBeDefined();

  const activeConnections = responseBody.dependeces.database.opened_connections;
  expect(activeConnections).toBe(1);
});

test("GET to /api/v1/status should return postgres version to database", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");

  const responseBody = await response.json();
  expect(responseBody.dependeces.database.version).toBeDefined();

  const versionDatabase = responseBody.dependeces.database.version;
  expect(versionDatabase).toBe("16.0");
});
