import {
  shouldLogGraphqlError,
  shouldLogHttpGraphqlResponse,
} from "./should-log-graphql-error";

describe("should-log-graphql-error", () => {
  it("skips unauthorized and expected login errors", () => {
    expect(
      shouldLogGraphqlError("Login", [{ message: "Invalid credentials" }]),
    ).toBe(false);

    expect(
      shouldLogGraphqlError("Users", [
        {
          message: "Unauthorized",
          extensions: { code: "UNAUTHENTICATED" },
        },
      ]),
    ).toBe(false);
  });

  it("logs unexpected server errors", () => {
    expect(
      shouldLogGraphqlError("Users", [{ message: "Something exploded" }]),
    ).toBe(true);
  });

  it("filters expected HTTP responses", () => {
    expect(
      shouldLogHttpGraphqlResponse(
        401,
        '{"errors":[{"message":"Unauthorized"}]}',
      ),
    ).toBe(false);
    expect(
      shouldLogHttpGraphqlResponse(500, '{"errors":[{"message":"DB down"}]}'),
    ).toBe(true);
  });
});
