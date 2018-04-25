AppUsers = new Mongo.Collection('appusers');
AppGroups = new Mongo.Collection('appgroups');

SysUsers = new Mongo.Collection('sysusers');
SysUsers.attachSchema(new SimpleSchema({
    login: {
        type: String,
        label: "Login",
        max: 20
    },
    password: {
        type: String,
        label: "Password",
        max: 20,
        optional: true
    },
    firstName: {
        type: String,
        label: "First Name",
        max: 20,
        optional: true
    },
    lastName: {
        type: String,
        label: "Last Name",
        max: 20,
        optional: true
    },
    birthDate: {
        type: Date,
        label: "Date of birth",
        optional: true
    },
    // sysGroup: {
    //   type: Array,
    //   optional: true
    // },
    createdAt: {
		type: Date,
		label: "Created At",
		autoValue: function() {
			if ( this.isInsert ) {
				return new Date()
			}
		},
		denyUpdate: true,
		autoform: {
			type: "hidden"
		}
	},
}, { tracker: Tracker }));

Groups = new Mongo.Collection('groups');
Groups.attachSchema(new SimpleSchema({
  groupName: {
    type: String,
    label: "Name of group",
    max: 20
  },
  sysUsersId: {
    type: [String],
    optional: true
  },
  createdAt: {
    type: Date,
    label: "Created At",
    autoValue: function() {
      if ( this.isInsert ) {
        return new Date()
      }
  },
  denyUpdate: true,
  autoform: {
    type: "hidden"
  }
},
}, { tracker: Tracker }));

