Template.lists.helpers({
    groups: function(){
      return AppGroups.find();
    },
    groupUsers: function(){
        return SysUsers.find();
    }
});
Template.lists.events({
    'submit #userListForm': function(event){
        
        let listId = event.target.userListSelect.value;

        //console.log(event);
        console.log(listId)
        event.preventDefault();
    },
    'click .deleteGroup': function(event){				
		if(confirm('Do you really wanto to delete this group?')){
			let groupId = this._id;
            AppGroups.remove(this._id);

			return false
		}
  }
});