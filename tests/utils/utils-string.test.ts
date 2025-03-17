import { describe, expect, test } from "vitest";
import {
    snakeKeysToCamelKeys,
    snakeToCamel,
} from "../../src/utils/utils-string";
import { IDict } from "../../src/types/idict";

describe("snakeToCamel", () => {
    test("hello_there", () => {
        expect(snakeToCamel("hello_there")).to.equal("helloThere");
    });

    test("hello", () => {
        expect(snakeToCamel("hello")).to.equal("hello");
    });

    test("hello_th3r3", () => {
        expect(snakeToCamel("hello_th3r3")).to.equal("helloTh3r3");
    });
});

describe("snakeKeysToCamelKeys", () => {
    test("simple object", () => {
        const input = { hello_there: 0 };
        const output = snakeKeysToCamelKeys<IDict>(input);
        expect(Object.keys(output).length).to.equal(1);
        expect(Object.keys(output)[0]).to.equal("helloThere");
    });
});
