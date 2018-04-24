Template.userList.helpers({
    sysusers: function(){
      return SysUsers.find();
    },
    appusers: function(){
      return AppUsers.find();
    }
});


Template.userList.events({
	'click .deleteUser': function(event){				
		if(confirm('Do you really wanto to delete this user?')){
			let userId = this._id;
      AppUsers.remove(this._id);

			return false
		}
  }
});