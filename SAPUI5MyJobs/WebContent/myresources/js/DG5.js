

var oLayout1 = new sap.ui.layout.form.GridLayout();
		var oLayout2 = new sap.ui.layout.form.ResponsiveLayout();
		var oLayout3 = new sap.ui.layout.form.ResponsiveGridLayout();

		var oForm1 = new sap.ui.layout.form.Form("DG51F1",{
			
			editable: true,
			layout: oLayout1,
			formContainers: [

				new sap.ui.layout.form.FormContainer("DG51F1C2",{
					
					formElements: [
						new sap.ui.layout.form.FormElement({
							label: "Functional Location",
							fields: [new sap.m.Input("Close_FunctionalLocation",{type: sap.m.InputType.Input, enabled: true})
							]
						}),
						new sap.ui.layout.form.FormElement({
							label: "Equipment ID",
							fields: [new sap.m.Input("Close_Equipment",{type: sap.m.InputType.Input, enabled: true})
							]
						}),
						new sap.ui.layout.form.FormElement({
							label: "",
							fields: [				new sap.m.Button( {
							    text: "Select Asset",
							    type: 	sap.m.ButtonType.Success,
							    tap: [ function(oEvt) {		  
									 
							    	//formHistoryDocument.close()
									  } ]
							})
							]
						}),
						new sap.ui.layout.form.FormElement({
							label: "Problem Code",
							fields: [new sap.m.Select('Close_ProblemCode',{
								
								items: [
									
								],

								change: function(oControlEvent) {
									
									//BuildPriorities(oControlEvent.getParameter("selectedItem").getKey());
								}
							}),
							]
						}),
						new sap.ui.layout.form.FormElement({
							label: "Action Code",
							fields: [new sap.m.Select('Close_ActionCode',{
								
								items: [
									
								],

								change: function(oControlEvent) {
									
									//BuildPriorities(oControlEvent.getParameter("selectedItem").getKey());
								}
							}),
							]
						}),
						new sap.ui.layout.form.FormElement({
							label: "Impact Code",
							fields: [new sap.m.Select('Close_ImpactCode',{
								
								items: [
									
								],

								change: function(oControlEvent) {
									
									//BuildPriorities(oControlEvent.getParameter("selectedItem").getKey());
								}
							}),
							]
						}),
						new sap.ui.layout.form.FormElement({
							label: "Long Text",
							fields: [new sap.m.Input("Close_LongText",{type: sap.m.InputType.Input, enabled: true})
							]
						}),
						],
					layoutData: new sap.ui.core.VariantLayoutData({
							multipleLayoutData: [new sap.ui.layout.ResponsiveFlowLayoutData({linebreak: true, minWidth: 150}),
										    new sap.ui.layout.form.GridContainerData({halfGrid: true}),
										    new sap.ui.layout.GridData({linebreakL: true})]
							})
				}),
				new sap.ui.layout.form.FormContainer("DG51F1C3",{
					title: new sap.ui.core.Title({text: "Has there been an escape of sewage", tooltip: ""}),
					
					formElements: [
						new sap.ui.layout.form.FormElement({
							label:  "to 3rd Party property",
							fields: [ new sap.m.Switch("Close_Sewage",{
          						state:false,
          						change:[function(evt){
          							formChanged(evt)
          							
          						}],
          						type: sap.m.SwitchType.AcceptReject
          					})
							]
						}),
						new sap.ui.layout.form.FormElement({
							label: "Has there been a pollution",
							fields: [ new sap.m.Switch("Close_Pollution",{
          						state:false,
          						change:[function(evt){
          							formChanged(evt)
          							
          						}],
          						type: sap.m.SwitchType.AcceptReject
          					})
							]
						}),
						new sap.ui.layout.form.FormElement({
							label: "Additional Work Required",
							fields: [ new sap.m.Switch("Close_Work",{
          						state:false,
          						change:[function(evt){
          							formChanged(evt)
          							
          						}],
          						type: sap.m.SwitchType.AcceptReject
          					})
							]
						}),
						new sap.ui.layout.form.FormElement({
							label: "Variance",
							fields: [new sap.m.Select('Close_Variance',{
								
								items: [
									
								],

								change: function(oControlEvent) {
									
									//BuildPriorities(oControlEvent.getParameter("selectedItem").getKey());
								}
							}),
							]
						}),
						new sap.ui.layout.form.FormElement({
							label: "Reason",
							fields: [new sap.m.Input("Close_Reason",{type: sap.m.InputType.Input, enabled: true})
							]
						}),
						new sap.ui.layout.form.FormElement({
							label: "In Shift Time",
							fields: [new sap.m.Input("Close_InshiftTime",{type: sap.m.InputType.Input, enabled: true})
							]
						}),
						new sap.ui.layout.form.FormElement({
							label: "Activity",
							fields: [new sap.m.Select('Close_InshiftActivity',{
								
								items: [
									
								],

								change: function(oControlEvent) {
									
									//BuildPriorities(oControlEvent.getParameter("selectedItem").getKey());
								}
							}),
							]
						}),
						new sap.ui.layout.form.FormElement({
							label: "Out of Shift Time",
							fields: [new sap.m.Input("Close_OutofshiftTime",{type: sap.m.InputType.Input, enabled: true})
							]
						}),
						new sap.ui.layout.form.FormElement({
							label: "Activity",
							fields: [new sap.m.Select('Close_OutofshiftActivity',{
								
								items: [
									
								],

								change: function(oControlEvent) {
									
									//BuildPriorities(oControlEvent.getParameter("selectedItem").getKey());
								}
							}),
							]
						}),
					],
					layoutData: new sap.ui.core.VariantLayoutData({
						multipleLayoutData: [new sap.ui.layout.form.GridContainerData({halfGrid: true}),
						            	             new sap.ui.layout.ResponsiveFlowLayoutData({minWidth: 150}),
																			 new sap.ui.layout.GridData({linebreakL: false})]
						})
				})

			]
		});

		

function buildDG5Tabs(){
	var tabBar  = new sap.m.IconTabBar('DG5tabBar',
			{
				expanded:'{device>/isNoPhone}',

				select:[function(oEvt) {	
					currentPage=window.location.href

						
					  if(oEvt.getParameters().key=="DG51"){}
					  if(oEvt.getParameters().key=="DG52"){}
					  if(oEvt.getParameters().key=="DG53"){}
					  if(oEvt.getParameters().key=="DG54"){}
					  if(oEvt.getParameters().key=="DG55"){}
					 
					}
				],
				
				items: [
						new sap.m.IconTabFilter( {
						    key:'DG51',
						    tooltip: 'Close Job Details',
						    text: "Close",
						    content:[oForm1]
						 }),
						 new sap.m.IconTabFilter( {
							    key:'DG52',
							    tooltip: 'DG5 Flooding',
							    text: "Flooding",
							    content:[
											
							             ]
							 }),
						new sap.m.IconTabFilter( {
						    key:'DG53',
						    tooltip: 'DG5 Location',
						    text: "Location",
						    content:[
										
						             ]
						 }),
						 new sap.m.IconTabFilter( {
							    key:'DG54',
							    tooltip: 'Polution Impact',
							    text: "Pollution",
							    content:[
											
							             ]
							 }),
						new sap.m.IconTabFilter( {
						    key:'DG55',
						    tooltip: 'Customer Feedback',
						    text: "Feedback",
						    content:[
										
						             ]
						 })
					]
			})
	return tabBar;

	}

