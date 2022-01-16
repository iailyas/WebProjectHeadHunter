const app = require("./../../src/loader/index");
const supertest = require("supertest");
const request = supertest("http://localhost:8080");

describe("User Controller", () => {
  describe("/users/login", () => {
    it("should authorize account", async () => {
      await request
        .post("/users/login")
        .send({
          login: "ILYAS11",
          password: "asas1",
        })
        .expect(200);
    });
  });

  describe("/users", () => {
    it("should get all users", async () => {
      await request
        .get("/users")
        .set(
          "Authorization",
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjEwfQ.Zcqh-NeZSRgeqStOAVG1jUq3JkG2f4motSLKbGrTXfg"
        )
        .expect(200);
    });
  });

  describe("/users", () => {
    it("should get user by id", async () => {
      await request
        .get("/users/3")
        .set(
          "Authorization",
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjEwfQ.Zcqh-NeZSRgeqStOAVG1jUq3JkG2f4motSLKbGrTXfg"
        )
        .expect(200);
    });
  });
});
