const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

before((done) => {
    mongoose.connect('mongodb://10.101.160.237/users_test',{ useNewUrlParser: true });
    mongoose.connection
        .once('open', () => done())
        .on('error', (error) => {
            console.warn('Warning', error);
        });
});


beforeEach((done) => {
    mongoose.connection.collections.users.drop(() => {
        done();
    });
});