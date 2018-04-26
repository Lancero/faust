Template.addUser.helpers({
    groups: function(){
        return AppGroups.find();
    }
});

Template.addUser.events({    
    'submit #addUserForm': function(event){
        let userLogin = event.target.userLogin.value;
        let userPassword = event.target.userPassword.value;
        let userFirstName = event.target.userFirstName.value;
        let userLastName = event.target.userLastName.value;
        let userBirthDate = event.target.userBirthDate.value;
        let userListId = event.target.userListSelect.value;

        // Insert
        const userId = AppUsers.insert({
            login: userLogin,
            password: userPassword,
            firstName: userFirstName,
            lastName: userLastName,
            birthDate: userBirthDate,
            createdAt: new Date()
        });

        // Update Groups
        AppGroups.update({_id: userListId},{
            $push: {
                users: userId
            }
        })

        // Clear form
        event.target.userLogin.value = '';
        event.target.userPassword.value = '';
        event.target.userFirstName.value = '';
        event.target.userLastName.value = '';
        event.target.userBirthDate.value = '';
        event.target.userListSelect.value = '';
       
        // Route
        FlowRouter.go('/users-list');

        return false        
    }
});
