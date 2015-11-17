frappe.pages['comment-list'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Ticket Comments',
		single_column: true
	});
	frappe.call({
		method:"bugtracker.bugtracking.page.comment_list.comment_list.getTask",
		callback:function(data){
			page.main.append(frappe.render_template('comment_list', {data:data.message}))
			alert(data.message)
		}
	});
}