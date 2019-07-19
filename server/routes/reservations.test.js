// const reservations = require("./reservations");
const supertest = require("supertest-as-promised");
const app = require("../app.js");
const router = require("./index");

describe("GET requests", () => {
  it("GET responds with an empty object at first", () => {
    // when we make requests to `/` we will get back an object
    return supertest(app) // supertest object lets us make & test HTTP req/res
      .get("/") // makes an HTTP request: GET '/'
      .expect(200) // tests response status code
      .expect(res => {
        expect(res.body).toEqual({}); // tests response body
      });
  });

  it("GET /reservations responds with an empty object at first", () => {
    // when we make requests to `/reservations` we will get back an json object
    return supertest(app) // supertest object lets us make & test HTTP req/res
      .get("/reservations") // makes an HTTP request: GET '/reservations'
      .expect(200) // tests response status code
      .expect(res => {
        expect(res.body).toEqual([]); // tests response body
      });
  });
});
