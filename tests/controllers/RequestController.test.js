const app = require("../../src/loader/index");
const supertest = require("supertest");
const RequestServiceTest = require("../../src/services/RequestService");
const request = supertest("http://localhost:8080");

describe("Request Controller", () => {
  describe("/Requests", () => {
    it("should return error - Request is occupied", async () => {
      await request
        .post("/Request")
        .set(
          "Authorization",
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjEwfQ.Zcqh-NeZSRgeqStOAVG1jUq3JkG2f4motSLKbGrTXfg"
        )
        .send({
          description: "ghgh",
        })
        .expect(400);
    });

    it("should return error - validation", async () => {
      await request
        .post("/Request")
        .set(
          "Authorization",
          "Bearer eyJ0eXAiOiJKV1QiLkJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjEwfQ.Zcqh-NeZSRgeqStOAVG1jUq3JkG2f4motSLKbGrTXfg"
        )
        .send({
          description: "ghgh",
        })
        .expect(400);
    });
  });
});
