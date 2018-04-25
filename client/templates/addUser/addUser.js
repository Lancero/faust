Template.addUser.helpers({
    groups: function(){
        return AppGroups.find();
    }
});
Template.addUser.events({
    'submit #insertUserForm': function(event){
        let chosenList = event.target.userGroupSelect.value; // Nazwa wybranej listy
        
        //console.log(chosenList);

        let kkk = Groups.findOne({groupName: chosenList}); // Wybrana lista na podstawie selecta

        //console.log(kkk)

        var hooksObject = {
            after: {
                insert: function(error, result){
                    console.log('after insert');
                    //console.log(this.docId)                                            
                    let chosenList2 = event.target.userGroupSelect.value;

                    //console.log(chosenList);
                    //console.log(chosenList2)
                
                let listId = Groups.findOne({groupName: chosenList2})._id; // Id wybranej listy

                console.log(listId);

                //Groups.update({_id: listId},{$set:{sysUsersId: this.docId}});               

                //console.log(this.docId);

                Groups.update(
                    {_id: listId},
                    {$push:
                        {sysUsersId: 
                            this.docId
                            //{$push: this.docId}
                        }
                    });
                }
            }
        };
        AutoForm.addHooks('insertUserForm',hooksObject);
    },
    'submit #addUserForm': function(event){
        let userLogin = event.target.userLogin.value;
        let userPassword = event.target.userPassword.value;
        let userFirstName = event.target.userFirstName.value;
        let userLastName = event.target.userLastName.value;
        let userBirthDate = event.target.userBirthDate.value;
        let userList = event.target.userListSelect.value;

        // Insert
        AppUsers.insert({
            login: userLogin,
            password: userPassword,
            firstName: userFirstName,
            lastName: userLastName,
            birthDate: userBirthDate,
            createdAt: new Date()
        });

        // Update Groups DB

        let groupId = AppGroups.findOne({name: userList});

        console.log(userList);
        console.log(groupId);

        AppGroups.update({_id: groupId},{
            $push: {
                test: '12345'
            }
        })

        // Clear form
        event.target.userLogin.value = '';
        event.target.userPassword.value = '';
        event.target.userFirstName.value = '';
        event.target.userLastName.value = '';
        event.target.userBirthDate.value = '';
        event.target.userListSelect.value = '';
       
        return false
    }
});
