import supertest from "supertest";
import app from "./app.js";

describe("GET /search/:name", () => {
    describe("given one name", () => {
        test("should respond with a 200 status code", async () => {
            const response = await supertest(app).get("/search/steph");
            expect(response.statusCode).toBe(200);
        });

        test("should specify json in the content type header", async () => {
            const response = await supertest(app).get("/search/steph");
            expect(response.headers["content-type"]).toEqual(
                expect.stringContaining("json")
            );
        });

        test("should return JSON object", async () => {
            const response = await supertest(app).get("/search/steph");
            expect(response.body).toBeInstanceOf(Object);
            expect(response.body.data.length).toBeGreaterThan(0);
        });

        test("should return steph curry in first index", async () => {
            const response = await supertest(app).get("/search/steph");
            expect(response.body.data[0].id).toBe(115);
        });
    });

    describe("given two names", () => {
        test("should respond with a 200 status code", async () => {
            const response = await supertest(app).get("/search/stephen curry");
            expect(response.statusCode).toBe(200);
        });

        test("should specify json in the content type header", async () => {
            const response = await supertest(app).get("/search/stephen curry");
            expect(response.headers["content-type"]).toEqual(
                expect.stringContaining("json")
            );
        });

        test("should return a JSON object", async () => {
            const response = await supertest(app).get("/search/stephen curry");
            expect(response.body).toBeInstanceOf(Object);
            expect(response.body.data.length).toBeGreaterThan(0);
        });

        test("should return steph curry in first index", async () => {
            const response = await supertest(app).get("/search/stephen curry");
            expect(response.body.data[0].id).toBe(115);
        });
    });

    describe("given a name starting and ending with whitespace", () => {
        test("should respond with a 200 status code", async () => {
            const response = await supertest(app).get(
                "/search/    stephen     "
            );
            expect(response.statusCode).toBe(200);
        });

        test("should specify json in the content type header", async () => {
            const response = await supertest(app).get(
                "/search/    stephen     "
            );
            expect(response.headers["content-type"]).toEqual(
                expect.stringContaining("json")
            );
        });

        test("should return a JSON object", async () => {
            const response = await supertest(app).get(
                "/search/    stephen     "
            );
            expect(response.body).toBeInstanceOf(Object);
            expect(response.body.data.length).toBeGreaterThan(0);
        });

        test("should return steph curry in first index", async () => {
            const response = await supertest(app).get(
                "/search/    stephen     "
            );
            expect(response.body.data[0].id).toBe(115);
        });
    });

    describe("fallsback to first name when fuill name search returns no results", () => {
        test("should return players", async () => {
            const response = await supertest(app).get(
                "/search/kareem abdul jabbar"
            );
            expect(response.body.data.length).toBeGreaterThan(0);
        });
    });

    describe("given a name for a player that does not exist", () => {
        test("should return no players", async () => {
            const response = await supertest(app).get("/search/foobarfum");
            expect(response.body.data.length).toBe(0);
        });
    });
});
