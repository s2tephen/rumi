var assert = require("assert");

function createAccountAndLogIn(server, client, callback) {
  // create account
  server.eval(function() {
    Accounts.createUser({email: "test@test.com", password: "test"});
    emit("account_created");
  }).once("account_created", function() {
    client.eval(function() {
      Meteor.loginWithPassword("test@test.com", "test");
      callback();
    });
  });
}

suite("households", function() {
  test("can log in", function(done, server, client) {
    createAccountAndLogIn(server, client, function() {
      client.eval(function() {
        emit("user_id", Meteor.user()._id);
      });
    });

    client.once("user_id", function(id) {
      assert.ok(id);
      done();
    });
  });
});
