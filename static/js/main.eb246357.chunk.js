(this.webpackJsonpflothe=this.webpackJsonpflothe||[]).push([[0],{13:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(7),o=a(1),c=a(2),r=a(4),l=a(3),u=a(5),m=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(r.a)(this,Object(l.a)(t).call(this,e))).toggleEditMode=function(){a.setState({editMode:!a.state.editMode})},a.toggleScheduleMode=function(){a.setState({scheduleMode:!a.state.scheduleMode})},a.toggleOptionsGroup=function(){a.setState({showOptions:!a.state.showOptions}),setTimeout((function(){a.setState({showOptions:!1})}),5e3)},a.updateSelf=function(){var e=document.querySelector("#".concat(a.props.section,"-title-edit")),t=document.querySelector("#".concat(a.props.section,"-desc-edit"));a.props.updateItem(a.props.idx,{title:e.value||a.props.title,desc:t.value||a.props.desc})},a.deleteSelf=function(){a.props.deleteItem(a.props.idx)},a.scheduleSelf=function(){var e=document.querySelector("#".concat(a.props.section,"-start-time-edit")),t=document.querySelector("#".concat(a.props.section,"-end-time-edit")),n=document.querySelector("#".concat(a.props.section,"-loc-edit"));""!==e.value&&""!==t.value&&""!==n.value&&(a.props.scheduleItem(a.props.idx,{location:n.value,month:(new Date).getMonth(),day:(new Date).getDate(),start:e.value,end:t.value}),a.deleteSelf())},a.state={editMode:!1,scheduleMode:!1,showOptions:!1},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=i.a.createElement("div",{className:"options-group"},this.state.showOptions?i.a.createElement(i.a.Fragment,null,i.a.createElement("i",{className:"material-icons",onClick:function(){e.state.scheduleMode&&e.toggleScheduleMode(),e.toggleEditMode(),e.toggleOptionsGroup()}},"create"),"todo"===this.props.section?i.a.createElement("i",{className:"material-icons",onClick:function(){e.state.editMode&&e.toggleEditMode(),e.toggleScheduleMode(),e.toggleOptionsGroup()}},"calendar_today"):i.a.createElement(i.a.Fragment,null),i.a.createElement("i",{className:"material-icons",onClick:function(){e.deleteSelf(),e.toggleOptionsGroup()}},"delete")):i.a.createElement(i.a.Fragment,null,i.a.createElement("i",{className:"material-icons",onClick:this.toggleOptionsGroup},"more_vert")));return i.a.createElement(i.a.Fragment,null,i.a.createElement("li",{className:"item-group"},this.state.editMode||this.state.scheduleMode?i.a.createElement(i.a.Fragment,null):i.a.createElement("h3",null,this.props.title),this.state.editMode?i.a.createElement("input",{type:"text",id:"".concat(this.props.section,"-title-edit"),className:"item-title-input",placeholder:"Title"}):i.a.createElement(i.a.Fragment,null),this.state.scheduleMode?i.a.createElement("input",{type:"text",id:"".concat(this.props.section,"-start-time-edit"),className:"item-title-input",placeholder:"Start Time"}):i.a.createElement(i.a.Fragment,null),i.a.createElement("div",{className:"item-content"},this.state.editMode||this.state.scheduleMode?i.a.createElement(i.a.Fragment,null):i.a.createElement("p",null,this.props.desc),this.state.editMode?i.a.createElement("input",{type:"text",id:"".concat(this.props.section,"-desc-edit"),className:"item-body-input",placeholder:"Description"}):i.a.createElement(i.a.Fragment,null),this.state.scheduleMode?i.a.createElement(i.a.Fragment,null,i.a.createElement("input",{type:"text",id:"".concat(this.props.section,"-end-time-edit"),className:"item-body-input",placeholder:"End Time"}),i.a.createElement("input",{type:"text",id:"".concat(this.props.section,"-loc-edit"),className:"item-body-input",placeholder:"Location"})):i.a.createElement(i.a.Fragment,null)),this.state.editMode?i.a.createElement("button",{onClick:function(){e.updateSelf(),e.toggleEditMode()}},"Done"):i.a.createElement(i.a.Fragment,null),this.state.scheduleMode?i.a.createElement("button",{onClick:function(){e.scheduleSelf(),e.toggleScheduleMode()}},"Schedule"):i.a.createElement(i.a.Fragment,null),t))}}]),t}(n.Component),d=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(r.a)(this,Object(l.a)(t).call(this,e))).toggleInputMode=function(){a.setState({inputMode:!a.state.inputMode})},a.addItem=function(){var e=document.querySelector("#".concat(a.props.id,"-title-input")),t=document.querySelector("#".concat(a.props.id,"-desc-input"));""!==e.value&&a.props.addItem({title:e.value,desc:t.value,day:(new Date).getDate(),month:(new Date).getMonth()})},a.updateItem=function(e,t){a.props.updateItem(e,t)},a.deleteItem=function(e){a.props.deleteItem(e)},a.scheduleItem=function(e,t){a.props.transferTaskToEvent(e,t)},a.state={inputMode:!1},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=i.a.createElement("div",{className:"section-header"},i.a.createElement("h2",null,this.props.name),i.a.createElement("i",{className:"material-icons",style:{fontSize:40},onClick:this.toggleInputMode},this.state.inputMode?"remove":"add")),a=i.a.createElement("div",{className:"section-input-group"},i.a.createElement("input",{type:"text",id:"".concat(this.props.id,"-title-input"),className:"item-title-input",placeholder:"Click to enter title"}),i.a.createElement("input",{type:"text",id:"".concat(this.props.id,"-desc-input"),className:"item-body-input",placeholder:"Click to enter description"}),i.a.createElement("button",{onClick:function(){e.addItem(),e.toggleInputMode()}},"Add")),n=i.a.createElement("ol",{id:"".concat(this.props.id,"-section-list"),className:"section-list"},this.state.inputMode?a:i.a.createElement(i.a.Fragment,null),Object.values(this.props.items).map((function(t,a){return i.a.createElement(m,{key:"".concat(e.props.id,"-task-").concat(a),section:e.props.id,idx:a,title:t.title,desc:t.desc,start:t.start,end:t.end,updateItem:function(t,a){return e.updateItem(t,a)},deleteItem:function(t){return e.deleteItem(t)},scheduleItem:function(t,a){return e.scheduleItem(t,a)}})})));return i.a.createElement("div",{id:"".concat(this.props.id,"-section"),className:"section-container"},t,n)}}]),t}(n.Component),p=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(r.a)(this,Object(l.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("li",{className:"menu-item-group"},i.a.createElement("h3",null,this.props.name),Object.values(this.props.members).map((function(e){return i.a.createElement("p",null,e)})))}}]),t}(n.Component),h=["Profile","Settings"],f=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(r.a)(this,Object(l.a)(t).call(this,e))).toggleSideMenu=function(){a.setState({showSideMenu:!a.state.showSideMenu})},a.toggleInputMode=function(){a.setState({inputMode:!a.state.inputMode})},a.addTeam=function(){var e=document.querySelector("#team-name-input"),t=document.querySelectorAll('input[type="email"]');t=Object.values(t).filter((function(e){return""!==e.value})),console.log(t),""!==e.value&&a.setState({teams:a.state.teams.concat({name:e.value,members:Object.values(t).map((function(e){return e.value}))})})},a.state={showSideMenu:!1,inputMode:!1,teams:[{name:"Test Team",members:["Henry","John"]}]},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e,t=this,a=i.a.createElement("div",{id:"team-input-group",className:"input-group"},i.a.createElement("input",{type:"text",id:"team-name-input",placeholder:"Team Name",required:!0}),i.a.createElement("p",null,"Invite Members"),i.a.createElement("input",{type:"email",id:"team-email-input-1",placeholder:"Member 1"}),i.a.createElement("input",{type:"email",id:"team-email-input-1",placeholder:"Member 1"}),i.a.createElement("input",{type:"email",id:"team-email-input-1",placeholder:"Member 1"}),i.a.createElement("input",{type:"email",id:"team-email-input-1",placeholder:"Member 1"}),i.a.createElement("button",{onClick:function(){t.addTeam(),t.toggleInputMode()}},"Create"));return i.a.createElement(n.Fragment,null,i.a.createElement("i",{id:"side-menu-btn",className:"material-icons",onClick:this.toggleSideMenu},"dehaze"),i.a.createElement("div",{id:"side-bar",className:this.state.showSideMenu?"show":"hide"},i.a.createElement("ul",{id:"side-menu"},i.a.createElement("div",{id:"profile-img"}),i.a.createElement("div",{id:"team-section"},(e="Teams",i.a.createElement("div",{className:"section-header"},i.a.createElement("h2",null,e),i.a.createElement("i",{className:"material-icons",onClick:t.toggleInputMode},t.state.showTeamInputGroup?"remove":"add"))),this.state.inputMode?a:i.a.createElement("ol",null,this.state.teams.map((function(e,t){return i.a.createElement(p,{key:"team-".concat(t),idx:t,name:e.name,members:e.members})})))),h.map((function(e){return i.a.createElement("li",{key:"".concat(e,"-side-menu-item")},i.a.createElement("h2",null,e))})))))}}]),t}(n.Component),E=[{name:"January",days:31},{name:"February",days:(new Date).getFullYear()%4===0?29:28},{name:"March",days:31},{name:"April",days:30},{name:"May",days:31},{name:"June",days:30},{name:"July",days:31},{name:"August",days:31},{name:"September",days:30},{name:"October",days:31},{name:"November",days:30},{name:"December",days:31}],v=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(r.a)(this,Object(l.a)(t).call(this,e))).incrementMonth=function(){a.setState({currentMonth:11===a.state.currentMonth?0:a.state.currentMonth+1})},a.decrementMonth=function(){a.setState({currentMonth:0===a.state.currentMonth?11:a.state.currentMonth-1})},a.selectDay=function(e){a.props.selectDay(e)},a.state={currentMonth:(new Date).getMonth()},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){for(var e=this,t=[],a=i.a.createElement("div",{id:"calendar-header",className:"section-header"},i.a.createElement("i",{className:"material-icons",onClick:this.decrementMonth},"chevron_left"),i.a.createElement("h2",null,E[this.state.currentMonth].name),i.a.createElement("i",{className:"material-icons",onClick:this.incrementMonth},"chevron_right")),n=function(t){return i.a.createElement("div",{key:"day-".concat(t),id:"day-".concat(t),className:"calendar-day ".concat(e.props.currentDay===t?"selected":""),onClick:function(){return e.selectDay(t+1)}},i.a.createElement("p",null,t))},s=1;s<=E[this.state.currentMonth].days;s++)t.push(n(s));var o=i.a.createElement("div",{id:"days-group"},t);return i.a.createElement("div",{id:"".concat(this.props.id,"-section"),className:"section-container"},a,o)}}]),t}(n.Component),g=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(r.a)(this,Object(l.a)(t).call(this,e))).toggleDesc=function(){a.setState({showDesc:!a.state.showDesc})},a.state={selected:!1,showDesc:!1},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("li",{className:"today-item-group"},i.a.createElement("h3",null,this.props.title),i.a.createElement("p",{onClick:this.toggleDesc},this.state.showDesc?this.props.desc:this.props.location))}}]),t}(n.Component),y=function(e){function t(e){return Object(o.a)(this,t),Object(r.a)(this,Object(l.a)(t).call(this,e))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"time-block-group"},i.a.createElement("p",{className:"time-block-time"},this.props.time),i.a.createElement("div",{className:"time-block-item-display"},this.props.items.map((function(t){return t.start===e.props.time?i.a.createElement(g,{idx:e.props.idx,title:t.title,desc:t.desc,location:t.location,month:t.month,day:t.day,start:t.start,end:t.end}):i.a.createElement(i.a.Fragment,null)}))))}}]),t}(n.Component),b=["8:00","9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00"],I=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(r.a)(this,Object(l.a)(t).call(this,e))).toggleInputMode=function(){a.setState({inputMode:!a.state.inputMode})},a.addItem=function(){var e=document.querySelector("#".concat(a.props.id,"-title-input")),t=document.querySelector("#".concat(a.props.id,"-desc-input")),n=document.querySelector("#".concat(a.props.id,"-loc-input")),i=document.querySelector("#".concat(a.props.id,"-start-input")),s=document.querySelector("#".concat(a.props.id,"-end-input"));""!==e.value&&a.props.addItem({title:e.value,desc:t.value,location:n.value,start:i.value,end:s.value,day:(new Date).getDate(),month:(new Date).getMonth()})},a.state={inputMode:!1},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=i.a.createElement("div",{className:"section-header"},i.a.createElement("h2",null,this.props.name),i.a.createElement("i",{className:"material-icons",onClick:this.toggleInputMode},this.state.inputMode?"remove":"add")),a=i.a.createElement("div",{className:"section-input-group"},i.a.createElement("input",{type:"text",id:"".concat(this.props.id,"-title-input"),className:"item-title-input",placeholder:"Title"}),i.a.createElement("input",{type:"text",id:"".concat(this.props.id,"-desc-input"),className:"item-body-input",placeholder:"Description"}),i.a.createElement("input",{type:"text",id:"".concat(this.props.id,"-loc-input"),className:"item-body-input",placeholder:"Location"}),i.a.createElement("input",{type:"text",id:"".concat(this.props.id,"-start-input"),className:"item-body-input",placeholder:"Start time"}),i.a.createElement("input",{type:"text",id:"".concat(this.props.id,"-end-input"),className:"item-body-input",placeholder:"End time"}),i.a.createElement("button",{onClick:function(){e.addItem(),e.toggleInputMode()}},"Add"));return i.a.createElement("div",{id:"".concat(this.props.id,"-section"),className:"section-container"},t,this.state.inputMode?a:i.a.createElement("div",{id:"time-block-list"},b.map((function(t,a){return i.a.createElement(y,{idx:a,time:t,items:e.props.items.filter((function(a){return a.start===t&&a.day===e.props.currentDay}))})}))))}}]),t}(n.Component),M=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(r.a)(this,Object(l.a)(t).call(this,e))).addItem=function(e,t){switch(e){case"calendar":a.setState({calendarEvents:a.state.calendarEvents.concat(t)});break;case"todo":a.setState({todoTasks:a.state.todoTasks.concat(t)});break;case"goal":a.setState({goalItems:a.state.goalItems.concat(t)});break;case"motivation":a.setState({motivationItems:a.state.motivationItems.concat(t)});break;case"happiness":a.setState({happinessItems:a.state.happinessItems.concat(t)})}},a.updateItem=function(e,t,n){switch(e){case"calendar":a.setState({calendarEvents:a.state.calendarEvents.map((function(e,a){return t===a?n:e}))});break;case"todo":a.setState({todoTasks:a.state.todoTasks.map((function(e,a){return t===a?n:e}))});break;case"goal":a.setState({goalItems:a.state.goalItems.map((function(e,a){return t===a?n:e}))});break;case"motivation":a.setState({motivationItems:a.state.motivationItems.map((function(e,a){return t===a?n:e}))});break;case"happiness":a.setState({happinessItems:a.state.happinessItems.map((function(e,a){return t===a?n:e}))})}},a.deleteItem=function(e,t){switch(e){case"calendar":a.setState({calendarEvents:a.state.calendarEvents.filter((function(e,a){return t!==a}))});break;case"todo":a.setState({todoTasks:a.state.todoTasks.filter((function(e,a){return t!==a}))});break;case"goal":a.setState({goalItems:a.state.goalItems.filter((function(e,a){return t!==a}))});break;case"motivation":a.setState({motivationItems:a.state.motivationItems.filter((function(e,a){return t!==a}))});break;case"happiness":a.setState({happinessItems:a.state.happinessItems.filter((function(e,a){return t!==a}))})}},a.transferTaskToEvent=function(e,t){var n=a.state.todoTasks.filter((function(t,a){return e===a}));n[0].location=t.location,n[0].month=t.month,n[0].day=t.day,n[0].start=t.start,n[0].end=t.end,a.setState({calendarEvents:a.state.calendarEvents.concat(n),todoTasks:a.state.todoTasks.filter((function(t,a){return e!==a}))})},a.selectDay=function(e){a.setState({currentDay:e})},a.state={calendarEvents:[],todoTasks:[],goalItems:[],motivationItems:[],happinessItems:[],currentDay:(new Date).getDate()},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement(f,null),i.a.createElement("div",{id:"sections-wrapper",className:"day-layout"},i.a.createElement(v,{id:"calendar",items:this.state.calendarEvents,currentDay:this.state.currentDay,selectDay:function(t){return e.selectDay(t)}}),i.a.createElement(I,{id:"today",name:"Today",items:this.state.calendarEvents,currentDay:this.state.currentDay,addItem:function(t){return e.addItem("calendar",t)}}),i.a.createElement(d,{id:"todo",name:"ToDo",items:this.state.todoTasks,addItem:function(t){return e.addItem("todo",t)},updateItem:function(t,a){return e.updateItem("todo",t,a)},deleteItem:function(t){return e.deleteItem("todo",t)},transferTaskToEvent:function(t,a){return e.transferTaskToEvent(t,a)}}),i.a.createElement(d,{id:"goal",name:"Goal",items:this.state.goalItems,addItem:function(t){return e.addItem("goal",t)},updateItem:function(t,a){return e.updateItem("goal",t,a)},deleteItem:function(t){return e.deleteItem("goal",t)}}),i.a.createElement(d,{id:"motivation",name:"Motivation",items:this.state.motivationItems,addItem:function(t){return e.addItem("motivation",t)},updateItem:function(t,a){return e.updateItem("motivation",t,a)},deleteItem:function(t){return e.deleteItem("motivation",t)}}),i.a.createElement(d,{id:"happiness",name:"Happiness",items:this.state.happinessItems,addItem:function(t){return e.addItem("happiness",t)},updateItem:function(t,a){return e.updateItem("happiness",t,a)},deleteItem:function(t){return e.deleteItem("happiness",t)}})))}}]),t}(n.Component);Object(s.render)(i.a.createElement(M,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(13)}},[[8,1,2]]]);
//# sourceMappingURL=main.eb246357.chunk.js.map