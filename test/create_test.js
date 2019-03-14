const assert = require("assert");
const User = require("../src/user");

describe("Creating Records", () => {

    it("Save a user", (done) => {
        const joe = new User({
            name: "Joe"
        });
        joe.save()
            .then(() => {
                assert(!joe.isNew);
                done();
            });
    });
});