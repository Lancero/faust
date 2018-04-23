FlowRouter.route('/', {
	name: 'home',
	action() {
		BlazeLayout.render('HomeLayout');
	}
});
FlowRouter.route('/dashboard', {
 	name: 'dashboard',
 	action() {
 		BlazeLayout.render('MainLayout', {main: 'overview'});
 	}
});
FlowRouter.route('/add-user', {
 	name: 'add-user',
 	action() {
 		BlazeLayout.render('MainLayout', {main: 'addUser'});
 	}
 });
FlowRouter.route('/users-list', {
	name: 'users-list',
	action() {
		BlazeLayout.render('MainLayout', {main: 'userList'});
	}
});
FlowRouter.route('/add-group', {
	name: 'add-group',
	action() {
		BlazeLayout.render('MainLayout', {main: 'addGroup'});
	}
});
FlowRouter.route('/lists', {
	name: 'lists',
	action() {
		BlazeLayout.render('MainLayout', {main: 'lists'});
	}
});
FlowRouter.route('/user/:id', {
	name: 'user-info',
	action() {
		BlazeLayout.render('MainLayout', {main: 'userInfo'});
	}
});
FlowRouter.route('/group/:id', {
	name: 'group-info',
	action() {
		BlazeLayout.render('MainLayout', {main: 'groupInfo'});
	}
});
