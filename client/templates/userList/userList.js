Template.userList.helpers({
    appusers: function(){      
      return AppUsers.find();
    },
    /*group: ()=>{
      return AppGroups.find();
    },*/
    id: function(){
      return this._id;  
    },
    group: function(){
      return AppGroups.findOne({users: this._id});  
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