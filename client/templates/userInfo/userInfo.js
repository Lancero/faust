Template.userInfo.helpers({
	user: ()=>{
        let appUserId = FlowRouter.getParam('id');        
		return AppUsers.findOne({_id: appUserId});
    }
});

Template.userInfo.events({
    'submit #editUserForm': function(event){
        let userLogin = event.target.userLogin.value;
        let userPassword = event.target.userPassword.value;
        let userFirstName = event.target.userFirstName.value;
        let userLastName = event.target.userLastName.value;
        let userBirthDate = event.target.userBirthDate.value;
        let userList = event.target.userListSelect.value;

        // Update

        AppUsers.update({_id: this._id},{
            $set: {
                login: userLogin,
                password: userPassword,
                firstName: userFirstName,
                lastName: userLastName,
                birthDate: userBirthDate,
                lastModified: new Date()
            }
        });

        return false
    }
});