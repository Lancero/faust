Template.addUser.helpers({
    groups: function(){
        return Groups.find();
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
                    //let chosenList2 = event.target.userGroupSelect.value;

                    //console.log(chosenList);
                    //console.log(chosenList2)
                

                let listId = Groups.findOne({groupName: chosenList})//._id; // Id wybranej listy

                console.log(listId);

                //Groups.update({_id: listId},{$set:{sysUsersId: this.docId}});
                

                console.log(this.docId);

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
    }  
});
