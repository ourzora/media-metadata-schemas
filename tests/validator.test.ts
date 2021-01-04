import { expect } from 'chai'
import { Validator } from "../src/Validator";

describe("Validator", () => {
    describe("validate", () => {
        it("it returns true if the schema is correct", () => {
            const validator = new Validator("zora-20210101");
            const json = {
                "description": "blah",
                "mimeType": "application/json",
                "name": "who cares",
                "version": "zora-01012021",
            }

            const result = validator.validate(json);
            expect(result).eq(true);
        });

        it("it returns false if the schema is incorrect", () => {
            const validator = new Validator("zora-20210101");
            const json = {
                "description": "blah",
                "mimeType": "application/json",
                "name": "who cares",
                "version": "zora-01012021",
                "additionalProperty": "idk"
            }

            const result = validator.validate(json);
            expect(result).eq(false);
        });
    })
});