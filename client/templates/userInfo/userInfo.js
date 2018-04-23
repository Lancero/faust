Template.userInfo.helpers({
	user: ()=>{
        let sysUserId = FlowRouter.getParam('id');        
		return SysUsers.findOne({_id: sysUserId});
    }
});