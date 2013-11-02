var assert = require("assert");

// creates a user, logs them in, and returns the user id
function createAccountAndLogIn(server, client, callback) {
  // create account
  server.eval(function() {
    Accounts.createUser({email: "test@test.com", password: "test"});
    emit("account created");
  });

  server.once("account created", function() {
    client.eval(function() {
      Meteor.loginWithPassword("test@test.com", "test", function() {
        emit("logged in");
      });
    });
  });

  client.once("logged in", function() {
    client.eval(function() {
      emit("user_id", Meteor.user()._id); 
    });
  });

  client.once("user_id", callback);
}

suite("households", function() {
  test("can log in", function(done, server, client) {
    createAccountAndLogIn(server, client, function(id) {
      assert.ok(id);
      done();
    });
  });
});
