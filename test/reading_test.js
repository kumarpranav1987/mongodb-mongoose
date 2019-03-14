const assert = require("assert");
const User = require("../src/user");

describe("Reading users out of Database", () => {

    let joe;

    beforeEach((done) => {
        joe = new User({
            name: "Joe"
        });

        joe.save().then(
            () => {
                done();
            }
        );
    });

    it('Find all Users with name Joe', (done) => {
        User.find({
            name: "Joe"
        }).then((users) => {
            assert(users[0]._id.toString() === joe._id.toString());
            done();
        });
    });

    it("Find one user with name Joe",(done)=>{
        User.findOne({_id : joe._id}).then((user)=>{
            assert(user.name === "Joe");
            done();
        });
    });

});