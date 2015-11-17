# -*- coding: utf-8 -*-
# Copyright (c) 2015, Nishta and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class BugFeature(Document):
	pass

@frappe.whitelist()
def getTask():
	result=frappe.db.sql('''select ticket_id from `tabBugComments` group by ticket_id''');
	return result
