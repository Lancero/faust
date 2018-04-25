Template.addGroup.helpers({
    groups: function(){
      return AppGroups.find();
    }
});
Template.addGroup.events({
	'click .deleteGroup': function(event){				
		if(confirm('Do you really wanto to delete this group?')){
			let appGroupId = this._id;
            AppGroups.remove(this._id);

			return false
		}
    },
    'submit #addGroupForm': function(event){
        let groupName = event.target.groupName.value;
        let createdAt = new Date();
        let usersArr = [];

        AppGroups.insert({
            name: groupName,
            users: usersArr,
            createdAt: createdAt
        });

        event.target.groupName.value = '';

        return false
    }
});