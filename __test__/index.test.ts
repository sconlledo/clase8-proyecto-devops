import { describe, expect, test } from "@jest/globals";
import request from "supertest";
import { restar, sumar, dividir, multiplicar } from "../src/calcular.js";
import app from "../src/server.js";

describe("index module testing", () => {

    test("añadir dos numeros", () => {
        expect(sumar(1, 2)).toBe(3);
    });

    test("restar dos numeros", () => {
        expect(restar(10, 2)).toBe(8);
    });

    test("dividir dos numeros", () => {
        expect(dividir(10, 2)).toBe(5);
        expect(() => dividir(0, 0)).toThrow(/dividir/);
        expect(dividir(100, 2)).toBe(50);
        expect(dividir(100, 2)).toBeDefined();
        expect(dividir(null, 2)).not.toBeDefined()
        expect(dividir('a', 2)).not.toBeDefined()
        expect(dividir(undefined, 3)).not.toBeDefined();
    });

    test("multiplicar dos numeros", () => {
        expect(multiplicar(10, 2)).not.toBe(10);
        expect(multiplicar(10, 2)).toBe(20);
        expect(multiplicar(0, 0)).toBe(0);
        expect(multiplicar(undefined, 2)).not.toBeDefined();
    });

    test("test endpoint /", async () => {
        return await request(app)
            .get("/")
            .expect('Content-Type', /text/)
            .expect(200)
            .then((response) => {
                expect(response.text).not.toBe("hola mundo!");
                expect(response.text).toBe("hola mundo");
            });
    })
});