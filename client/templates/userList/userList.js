Template.userList.helpers({
    sysusers: function(){
      return SysUsers.find();
    }
});

Template.userList.helpers({
  books: function(){
    return Books.find();
  }
});

Template.userList.events({
	'click .deleteUser': function(event){				
		if(confirm('Do you really wanto to delete this user?')){
			let userId = this._id;
      SysUsers.remove(this._id);

			return false
		}
  }
});