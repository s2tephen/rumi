Template.new_household.events = {
  "submit form": function(event, template) {
    event.preventDefault();
    var formData = Util.serializeForm(template.find("form"));

    formData.user_ids = [Meteor.user()._id];

    // only insert attributes defined in Household model
    var new_household_id = Households.insert(_.pick(formData, Household.attributes));

    // redirect to newly created household
    Router.go("household", {_id: new_household_id});
  }
};

Template.household_add_user.error = function () {
  return TempSession.get("household_add_user_error");
};

Template.household_add_user.events = {
  "submit form": function(event, template) {
    event.preventDefault();
    var formData = Util.serializeForm(template.find("form"));

    // email of user to add
    var email = formData.email;

    Meteor.call("addUserToHousehold", email, this._id, function(error) {
      if(error) {
        TempSession.set("household_add_user_error", error.reason);
      } else {
        $(template.find("input")).val("");
      }
    });

  }
};

Template.household_leave.events = {
  "click button": function(event, template) {
    event.preventDefault();
    Meteor.call("removeSelfFromHousehold", this._id);

    // leave the now-invalid page
    Router.go("households");
  }
};

Template.household_expenses.getUser = function(user_id) {
  return Meteor.users.findOne({_id: user_id});
};

Template.household_expenses.totalExpenses = function() {
  var totals = {};

  if(this.expenses) {
    this.expenses.forEach(function(expense) {
      var user_id;
      var portions = expense.portions;
      for(user_id in portions) {
        if(portions.hasOwnProperty(user_id)) {
          if(totals[user_id]) {
            totals[user_id] += portions[user_id];
          } else {
            totals[user_id] = portions[user_id];
          }
        }
      }


    });
  }

  return totals;
};

Template.household_expenses.editing = function() {
  return this.created_at === TempSession.get("household_expense_editing");
};

Template.household_add_expense.new_expense = function(){
  var portions = {};
  this.user_ids.forEach(function(user_id) {
    portions[user_id] = null;
  });
  return {
    portions: portions,
    user_id: Meteor.user()._id
  };
};

Template.household_add_expense.error = function () {
  return TempSession.get("household_expense_add_error");
};

Template.household_add_expense.events = {
  "submit form": function(event, template) {
    event.preventDefault();

    var formData = Util.serializeForm(template.find("form"));
    formData.user_id = Meteor.user()._id;
    this.addExpense(formData);
  }
};

Template.household_expense_edit_row.error = function (){
  return TempSession.get("household_expense_update_error");
};

// editing and deleting stuff
Template.household_expense_row.events = {
  "click .edit": function(event, template) {
    event.preventDefault();
    TempSession.set("household_expense_editing", this.created_at);
  },

  "click .delete": function(event, template) {
    event.preventDefault();
    Meteor.call("removeExpenseFromHousehold", this.household_id, this);
  }
};

Template.household_expenses.events = {
  "click .cancel": function(event, template) {
    event.preventDefault();
    TempSession.set("household_expense_editing", undefined);
  },

  "submit form": function(event, template) {
    event.preventDefault();
    var formData = Util.serializeForm(template.find("form"));
    TempSession.set("household_expense_editing", undefined);
    template.data.updateExpense(formData);
  }
};
