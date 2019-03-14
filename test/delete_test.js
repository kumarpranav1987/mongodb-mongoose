const assert = require("assert");
const User = require("../src/user");

describe("deleting user", () => {

    let joe;
    beforeEach((done) => {
        joe = new User({
            name: "Joe"
        });
        joe.save().then(() => {
            done();
        });
    });

    it("model instance remove", (done) => {
        joe.remove().
        then(() => {
            return User.findOne({
                name: "Joe"
            })
        }).
        then((user) => {
            assert(user === null);
            done();
        });
    });

    it("Class method remove", (done) => {
        User.deleteMany({
            name: "Joe"
        }).
        then(() => {
            return User.findOne({
                name: "Joe"
            });
        }).
        then((user) => {
            assert(user === null);
            done();
        });
    })

    it("Class method findOneAndRemove",(done)=>{
        User.findOneAndDelete({name : "Joe"}).
        then(()=>User.findOne({name : "Joe"})).
        then((user)=>{
            assert(user === null);
            done();
        })
    })

    it("Class method",(done)=>{
        User.findByIdAndDelete(joe._id).
        then(()=> User.findOne({name : "Joe"})).
        then((user)=>{
            assert(user === null);
            done();
        })
    })

    
});