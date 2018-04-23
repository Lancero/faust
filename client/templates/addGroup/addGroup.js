Template.addGroup.helpers({
    groups: function(){
      return Groups.find();
    }
});
Template.addGroup.events({
	'click .deleteGroup': function(event){				
		if(confirm('Do you really wanto to delete this group?')){
			let groupId = this._id;
            Groups.remove(this._id);

			return false
		}
  }
});