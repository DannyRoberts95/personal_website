(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){},29:function(e,t,a){e.exports=a(61)},61:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(26),c=a.n(l),u=a(2),i=a(3),o=a(5),s=a(4),m=a(6),d=a(63),k=a(64),p=(a(34),a(36),a(11),function(e){function t(){return Object(u.a)(this,t),Object(o.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return console.log("land"),r.a.createElement("div",{className:"uk-width-1-1 uk-row-first uk-margin-large-bottom"},r.a.createElement("p",{className:" uk-heading-small uk-heading-line"},r.a.createElement("span",null,"Landing Page under construction.")),r.a.createElement("p",null,"In the mean time, why not explore my portfolio gallery?"))}}]),t}(r.a.Component)),h=a(27),b=a(17),f=a(12),g=a(13),E=a.n(g),j=function(e){function t(e){return Object(u.a)(this,t),Object(o.a)(this,Object(s.a)(t).call(this,e))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.fieldValues.map(function(t,a){return r.a.createElement("button",{key:t,className:"uk-button uk-button-default uk-button-medium uk-margin-small-right uk-margin-small-bottom",onClick:e.props.handleChange,value:t,name:"fieldSortPreference"},t)}),a=this.props.yearValues.map(function(t,a){return r.a.createElement("button",{key:t,className:"uk-button uk-button-default uk-button-medium uk-margin-small-right ",onClick:e.props.handleChange,value:t,name:"yearSortPreference"},t)}),n=("All"===this.props.fieldSortPreference?"Displaying all projects from ":"Displaying ".concat(this.props.fieldSortPreference," projects from "))+("All"===this.props.yearSortPreference?"all years.":"".concat(this.props.yearSortPreference));return r.a.createElement("div",null,r.a.createElement("p",{className:"uk-h2 uk-text-secondary uk-margin-medium-bottom"},r.a.createElement("span",null,"Filter Projects")),r.a.createElement("p",{className:" uk-h3 uk-heading-line"},r.a.createElement("span",null,"Year")),r.a.createElement("div",{className:"uk-margin-medium-bottom"},a),r.a.createElement("p",{className:" uk-h4 uk-heading-line"},r.a.createElement("span",null,"Creative Field")),r.a.createElement("div",{className:"uk-margin-medium-bottom"},t),r.a.createElement("p",{className:" uk-h4 uk-heading-line uk-margin-medium-bottom"},r.a.createElement("span",null,n)),r.a.createElement("div",null))}}]),t}(r.a.Component),v=a(62),y=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this,e))).state={project:a.props.data},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.project,t=e.covers[808];return r.a.createElement("div",{className:"uk-text-center uk-width-1-1@s uk-width-1-2@m uk-width-1-4@l"},r.a.createElement(v.a,{to:"/project_page/".concat(e.id)},r.a.createElement("div",{className:"uk-inline-clip uk-transition-toggle",tabIndex:"0"},r.a.createElement("img",{className:"uk-border-rounded",src:t,alt:""}),r.a.createElement("div",{className:"uk-transition-fade uk-position-cover uk-position-small uk-overlay uk-overlay-default uk-flex uk-flex-center uk-flex-middle"},r.a.createElement("p",{className:"uk-h3"},e.name)))))}}]),t}(r.a.Component),O=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this,e))).state={projects:[],projectsLoaded:!1,fieldValues:[],fieldSortPreference:"All",yearValues:[],yearSortPreference:"All"},a.handleChange=a.handleChange.bind(Object(f.a)(Object(f.a)(a))),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.a.get("https://cors-anywhere.herokuapp.com/http://www.behance.net/v2/users/288284785/projects?api_key=EnQn6zgYBKyZh2keUdkI1FdONQn7rava").then(function(t){e.setState({projects:t.data.projects,projectsLoaded:!0});var a=t.data.projects.map(function(e){return e.fields}).toString().split(","),n=Object(b.a)(new Set(["All"].concat(a)));e.setState({fieldValues:n});var r=t.data.projects.map(function(e){return new Date(1e3*e.created_on).toLocaleString().substring(6,10)}),l=Object(b.a)(new Set(["All"].concat(r)));e.setState({yearValues:l})}).catch(function(e){console.log(e)})}},{key:"handleChange",value:function(e){var t=e.target,a=t.value,n=t.name;this.setState(Object(h.a)({},n,a))}},{key:"render",value:function(){var e=this,t=this.state.projects,a=(t=(t=t.filter(function(t){return t.fields.includes(e.state.fieldSortPreference)||"All"===e.state.fieldSortPreference})).filter(function(t){return new Date(1e3*t.created_on).toLocaleString().substring(6,10)===e.state.yearSortPreference||"All"===e.state.yearSortPreference})).map(function(e){return r.a.createElement(y,{key:e.id,data:e})});return r.a.createElement("div",null,r.a.createElement("div",{className:"uk-width-1-1 uk-row-first uk-margin-large-bottom"},r.a.createElement("p",{className:" uk-heading-small uk-heading-line"},r.a.createElement("span",null,"Portfolio Gallery"))),r.a.createElement(j,{handleChange:this.handleChange,fieldSortPreference:this.state.fieldSortPreference,fieldValues:this.state.fieldValues,yearSortPreference:this.state.yearSortPreference,yearValues:this.state.yearValues}),r.a.createElement("div",null,this.state.projectsLoaded?r.a.createElement("div",{className:"uk-grid-medium ","uk-grid":"masonry: true;"},a):r.a.createElement("div",{className:"uk-grid-small ","uk-grid":"true"},r.a.createElement("span",{className:"uk-align-center","uk-spinner":"ratio: 7.5"}))))}}]),t}(r.a.Component),w=function(e){function t(){return Object(u.a)(this,t),Object(o.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"uk-width-1-1 uk-row-first uk-margin-large-bottom"},r.a.createElement("p",{className:" uk-heading-small uk-heading-line"},r.a.createElement("span",null,"About Page under construction."))))}}]),t}(r.a.Component),N=function(e){function t(){return Object(u.a)(this,t),Object(o.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"uk-width-1-1 uk-row-first uk-margin-large-bottom"},r.a.createElement("p",{className:" uk-heading-small uk-heading-line"},r.a.createElement("span",null,"Contact page under construction."))))}}]),t}(r.a.Component),S=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this,e))).state={module:e.module},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return console.log(this.state.module),r.a.createElement("div",{className:"uk-width-1-1@s uk-width-2-3@m uk-row-first uk-align-center uk-margin-medium-bottom "},r.a.createElement("div",{"uk-lightbox":"true",className:"uk-transition-toggle"},r.a.createElement("a",{href:this.state.module.sizes.max_1920},r.a.createElement("img",{className:"uk-transition-scale-up uk-transition-opaque",src:this.state.module.sizes.max_1920,width:"100%",maxwidth:"1920",alt:"","uk-img":"true"}))))}}]),t}(r.a.Component),x=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this,e))).state={module:e.module,iframeLoaded:!1},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return console.log(this.state),r.a.createElement("div",{className:"uk-width-1-1@s uk-width-2-3@m uk-row-first uk-text-small uk-align-center uk-dark",width:"1920",height:"1080"},r.a.createElement("iframe",{id:"module_frame",src:this.state.module.src,width:"1920",height:"1080",frameBorder:"0",allowFullScreen:!0,"uk-responsive":"true","uk-video":"automute: true; autoplay: true",className:"uk-responsive-width"}))}}]),t}(r.a.Component),C=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this,e))).state={module:e.module},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return console.log(this.state.module),r.a.createElement("div",{className:"uk-width-1-1@s uk-width-2-3@m uk-row-first uk-margin-large-medium uk-align-center"},r.a.createElement("div",null,this.state.module.text_plain))}}]),t}(r.a.Component),P=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this,e))).state={project:{},projectLoaded:!1},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.a.get("https://cors-anywhere.herokuapp.com/http://www.behance.net/v2/projects/".concat(this.props.match.params.id,"?api_key=EnQn6zgYBKyZh2keUdkI1FdONQn7rava")).then(function(t){console.log(t.data),e.setState({project:t.data.project,projectLoaded:!0})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e;return console.log(this.state),this.state.projectLoaded&&(e=this.state.project.modules.map(function(e,t){return"image"===e.type?r.a.createElement(S,{key:t,module:e}):"video"===e.type?r.a.createElement(x,{key:t,module:e}):"text"===e.type?r.a.createElement(C,{key:t,module:e}):null})),this.state.projectLoaded?r.a.createElement("div",{className:"uk-grid-small","uk-grid":"true"},r.a.createElement(_,{project:this.state.project}),r.a.createElement("div",null,e)):r.a.createElement("div",{className:"uk-grid-small ","uk-grid":"true"},r.a.createElement("span",{className:"uk-align-center","uk-spinner":"ratio: 7.5"}))}}]),t}(n.Component),_=function(e){for(var t=new Date(1e3*e.project.created_on).toLocaleString().substring(0,10),a=e.project.fields.join(" | "),n=e.project.tags.join(" | "),l=e.project.tools,c=0;c<l.length;c++)l[c]=l[c].title+" (".concat(l[c].category_label,")");return l=l.join(" | "),r.a.createElement("div",{className:""},r.a.createElement("article",{className:"uk-article uk-width-1-1@s uk-width-2-3@m uk-row-first uk-align-center uk-margin-large-bottom"},r.a.createElement("div",{className:"uk-width-1-1 uk-row-first uk-margin-large-bottom"},r.a.createElement("p",{className:" uk-heading-small uk-heading-line"},r.a.createElement("span",null,e.project.name))),r.a.createElement("p",{className:"uk-h2 uk-text-secondary uk-margin-medium-bottom"},r.a.createElement("i",null,"Project Info")),r.a.createElement("p",{className:"uk-text-justify"},e.project.description),r.a.createElement("p",{className:"uk-article-meta uk-text-capitalize  uk-text-small uk-width-2-3@s"},r.a.createElement("b",null,"Creative Fields:")," ",a,r.a.createElement("br",null),r.a.createElement("b",null,"Project Tags:")," ",n,r.a.createElement("br",null),r.a.createElement("b",null,"Mediums Used:")," ",l,r.a.createElement("br",null),r.a.createElement("b",null,"Date Posted:")," ",t)))},L=P,A=function(e){return r.a.createElement("nav",{className:"uk-navbar-container uk-margin uk-navbar-transparent uk-margin-large-bottom","uk-navbar":"mode: click"},r.a.createElement("div",{className:"uk-navbar-left"},r.a.createElement("ul",{className:"uk-navbar-nav"},r.a.createElement("li",null,r.a.createElement(v.a,{to:"/landing_page"},r.a.createElement("p",{className:"uk-button uk-button-text"},"Home"))))),r.a.createElement("div",{className:"uk-navbar-right"},r.a.createElement("ul",{className:"uk-navbar-nav"},r.a.createElement("li",null,r.a.createElement(v.a,{to:"/gallery"},r.a.createElement("p",{className:"uk-button uk-button-text"},"Portfolio Gallery"))),r.a.createElement("li",null,r.a.createElement(v.a,{to:"/contact"},r.a.createElement("p",{className:"uk-button uk-button-text"},"Contact"))),r.a.createElement("li",null,r.a.createElement(v.a,{to:"/about"},r.a.createElement("p",{className:"uk-button uk-button-text"},"About"))))))},V=function(e){function t(){return Object(u.a)(this,t),Object(o.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"uk-container uk-container-medium uk-container-center uk-margin-top uk-margin-large-bottom"},r.a.createElement(d.a,null,r.a.createElement("div",null,r.a.createElement(A,null),r.a.createElement("div",null,r.a.createElement(k.a,{exact:!0,path:"/landing_page",component:p}),r.a.createElement(k.a,{path:"/about",component:w}),r.a.createElement(k.a,{path:"/gallery",component:O}),r.a.createElement(k.a,{path:"/contact",component:N}),r.a.createElement(k.a,{path:"/project_page/:id",component:L})))))}}]),t}(r.a.Component);c.a.render(r.a.createElement(V,null),document.getElementById("root"))}},[[29,2,1]]]);
//# sourceMappingURL=main.643b8678.chunk.js.map