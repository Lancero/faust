Template.groupInfo.helpers({
	group: ()=>{
        let groupUserId = FlowRouter.getParam('id');     // ID Grupy       

	 	return AppGroups.findOne({_id: groupUserId});       // Grupa o podanym ID
    },
    user: ()=>{
        let groupUserId = FlowRouter.getParam('id');        // ID Grupy

        let usersArr = AppGroups.findOne({_id: groupUserId}).users;

        // let usersMap = Groups.map(function(item){
        //     return item.id;
        // });


        //console.log(groupUserId); // ID Grupy
        //console.log(usersArr);


        //console.log(Groups.findOne(groupUserId).sysUsersId); // ID usera z podanej grupy
        //console.log(Groups.findOne(groupUserId)); 
        //console.log(sysUsersId);

        // return SysUsers.find({
        //     //_id: usersArr})
        //     //_id: {$in: usersArr})
        //     _id: {
        //         $in: Groups.findOne({_id: groupUserId}).sysUsersId.map(function(doc){return doc._id})
        //     }
        // })
       // console.log(SysUsers.find($in: usersArr));

        //let h = SysUsers.find({_id: {$in: usersArr}})

        return AppUsers.find({_id: {$in: usersArr}})

        //console.log(h)
    }
});

//Users.find({id: {$in: arrayFromGroup}})