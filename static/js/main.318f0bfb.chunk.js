(window["webpackJsonpproject-luodong"]=window["webpackJsonpproject-luodong"]||[]).push([[0],{125:function(e,n,t){e.exports=t(304)},264:function(e,n,t){var r=t(99),a=120;function o(e){var n=e.taskType,t=e.expiredAt,a=e.complexity,o=e.difficulty,i=e.issueId;return{id:r(),issueId:i,progress:0,complexity:a,difficulty:o,resolved:0,expiredAt:t,taskType:n,consumedTick:0,state:"created"}}e.exports.newIssue=function(e){for(var n=r(),t=e+(40+Math.floor(40*Math.random())),i=Math.random()>.8,c=1+Math.floor(3*Math.random()),s=0,d=[],u=0;s<c;){var l=["frontend","backend","design"][Math.floor(3*Math.random())],f=10*a,p=10+Math.floor(Math.random()*f),v=1+Math.round(4*p/f);d.push(o({taskType:l,expiredAt:t,complexity:p,difficulty:v,issueId:n})),s+=1,u+=p}return{id:n,tasks:d,required:i,startedAt:e,expiredAt:t,score:u,penalty:0,state:"created"}}},267:function(e,n,t){var r=t(99),a=t(268);e.exports.newDevelopers=function(){var e=a[Math.floor(Math.random()*a.length)];return Object.keys(e).map(function(n){var t=e[n];return function(e){var n=e.name,t=e.backend,a=e.frontend,o=e.design,i=r();return{id:i,name:n,backend:t,frontend:a,design:o,cooldown:0,cooldownReason:"",avatar:"https://robohash.org/".concat(i,".png?size=60x60&set=set4")}}({name:n,frontend:t.frontend,backend:t.backend,design:t.design})})}},268:function(e,n){e.exports=[{James:{frontend:90,backend:30,design:30},Marsha:{frontend:30,backend:90,design:30},Wolves:{frontend:30,backend:30,design:90},Alan:{frontend:30,backend:40,design:30},Joker:{frontend:30,backend:40,design:30},Owen:{frontend:30,backend:40,design:40}},{Owen:{frontend:100,backend:40,design:30},Wesely:{frontend:50,backend:30,design:30},Richard:{frontend:30,backend:120,design:70},Wendy:{frontend:20,backend:60,design:10},Island:{frontend:30,backend:10,design:80}},{Owen:{frontend:30,backend:120,design:50},Wesely:{frontend:100,backend:60,design:30},Richard:{frontend:120,backend:30,design:50},Wendy:{frontend:90,backend:30,design:30},Robert:{frontend:30,backend:40,design:110},Roger:{frontend:80,backend:40,design:40}},{Owen:{frontend:120,backend:120,design:30},Wesely:{frontend:30,backend:30,design:120},Richard:{frontend:60,backend:30,design:30},Wendy:{frontend:30,backend:60,design:30},Robert:{frontend:50,backend:30,design:30},Roger:{frontend:30,backend:40,design:30},Watson:{frontend:30,backend:30,design:30}}]},302:function(e,n){var t=document.getElementById("c"),r=t.getContext("2d");t.height=window.innerHeight,t.width=window.innerWidth;var a="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";a=a.split("");for(var o=10,i=t.width/o,c=[],s=0;s<i;s++)c[s]=1;setInterval(function(){r.fillStyle="rgba(0, 0, 0, 0.04)",r.fillRect(0,0,t.width,t.height),r.fillStyle="#f4427d",r.font=o+"px arial";for(var e=0;e<c.length;e++){var n=a[Math.floor(Math.random()*a.length)];r.fillText(n,e*o,c[e]*o),c[e]*o>t.height&&Math.random()>.975&&(c[e]=0),c[e]++}},35);setInterval(function(){var e,n,a=new Image,o=Math.random()*t.width,i=function(){var i=a.height/2,c=a.width/2;void 0===e&&(e=1-i),r.drawImage(a,o,e,c,i),(e+=1)>t.height&&clearInterval(n)};a.onload=function(){n=setInterval(i,5)},a.src="https://user-images.githubusercontent.com/2516344/64157978-44583f00-ce6a-11e9-8052-81676a14182f.png"},2e3*Math.random()+500)},303:function(e,n,t){},304:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(8),i=t.n(o),c=t(2),s=t(27),d=t(45),u=t(5),l=t(6),f=t(20),p=t(18),v=t(21),g=t(1),m=t(19),h="DROPPABLE_RESOURCE_PANEL",b=800,k=function(e){switch(e){case"backend":return"#4185f4";case"design":return"#fbbe08";case"frontend":return"#3aab58"}};function x(){var e=Object(c.a)(["\n  margin-bottom: 2px;\n  position: relative;\n  height: ",";\n  .bar{\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: ","%;\n    background: ",";\n    height: ",";\n    z-index: 2;\n    transition: ","s width;\n  }\n  .bg{\n    width: 100%;\n    background: ",";\n    height: ",";;\n    position: absolute;\n    z-index: 1;\n    opacity: 0.5;\n  }\n  &:last-child{\n    margin: 0;\n  }\n"]);return x=function(){return e},e}var w=b/1e3-.05,y=g.default.div(x(),function(e){return e.compact?"4px":"8px"},function(e){return 100*e.value},function(e){return e.color},function(e){return e.compact?"4px":"8px"},w,function(e){return e.color},function(e){return e.compact?"4px":"8px"}),O=function(e){var n=e.type,t=e.value,r=e.withBackground,o=e.compact;return a.a.createElement(y,{compact:o,value:t,color:k(n)},a.a.createElement("div",{className:"bar"}),r&&a.a.createElement("div",{className:"bg"}))},E=t(26),j=t.n(E);function D(){var e=Object(c.a)(["\n  color: ",";\n  font-size: 12px;\n"]);return D=function(){return e},e}var S=function(e){var n=e.value,t=e.color,r=j()(n,function(){return"\u2663\ufe0e"});return a.a.createElement(T,{color:t},r)},T=g.default.div(D(),function(e){return e.color});function M(){var e=Object(c.a)(["\n  display: flex;\n  width: 110px;\n  height: 48px;\n  background: #fff;\n  border-radius: 4px;\n  margin-bottom: 10px;\n  padding: 10px 6px;\n  opacity: ",";\n  position: relative;\n  box-shadow: 0 1px 6px rgba(80,80,80,0.1);\n  &:hover{\n    box-shadow: ",";\n  }\n  .avatar{\n    border-radius: 6px;\n    padding: 3px;\n    overflow: hidden;\n    background: #eee;\n    margin-right: 5px;\n    img{\n      width: 30px;\n      height: 30px;\n    }\n  }\n  .cd{\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    height: 48px;\n    background: rgba(20, 20, 20, 0.2);\n    z-index: 2;\n    background: #f97376d9;\n    color: #fff;\n    text-align: left;\n    padding-left: 5px;\n    padding-top: 3px;\n    text-shadow: 0 1px 5px rgba(189, 65, 68, 0.9);\n    font-weight: bold;\n    .time{\n      font-size: 20px;\n      line-height: 1.1;\n    }\n    .reason{\n      font-size: 12px;\n    }\n  }\n  .info{\n    position: relative;\n    display: flex;\n    font-size: 14px;\n    align-items: center;\n    z-index: 1;\n    .name{\n      margin-right: 6px;\n      font-size: 12px;\n      font-weight: bold;\n    }\n  }\n  .busy{\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    background: rgba(100, 100, 100, 0.2);\n    color: #999;\n    font-size: 12px;\n    padding: 3px 8px;\n    background: #555;\n    color: #aaa;\n    font-weight: bold\n  }\n  .cancel{\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    top: 0;\n    background: rgba(255, 255, 255, 0.85);\n    color: #f25158;\n    display: none;\n    cursor: pointer;\n    align-items: center;\n    text-align: center;\n    z-index: 3;\n    line-height: 48px;\n  }\n  &:hover{\n    .cancel{\n      display: block;\n    }\n  }\n  @media only screen and (max-width: 480px) {\n    display: inline-flex;\n    margin: 0 10px 0 0;\n    &:last-child{\n      margin: 0;\n    }\n  }\n"]);return M=function(){return e},e}var I=g.default.div(M(),function(e){return e.isDragging||e.isUsed?.6:1},function(e){return e.isDragging||e.isUsed?"0 1px 6px rgba(80,80,80,0.1)":"0 2px 9px rgba(80,80,80,0.3)"}),R=function(e){var n=e.draggableProvided,t=void 0===n?{draggableProps:{},dragHandleProps:{},innerRef:{}}:n,r=e.isDragging,o=e.resourceName,i=e.backend,c=e.cooldown,s=e.design,d=e.frontend,u=e.cooldownReason,l=e.used,f=e.onClick,p=e.actionText,v=e.avatar,g="manual"===u?"Context switch":u;return a.a.createElement(I,Object.assign({isDragging:r,isUsed:l,ref:t.innerRef},t.draggableProps,t.dragHandleProps),a.a.createElement("div",{className:"avatar"},a.a.createElement("img",{src:v,width:30,height:30})),a.a.createElement("div",null,a.a.createElement(O,{compact:!0,type:"backend",value:i/120}),a.a.createElement(O,{compact:!0,type:"design",value:s/120}),a.a.createElement(O,{compact:!0,type:"frontend",value:d/120}),c>0&&a.a.createElement("div",{className:"cd"},a.a.createElement("div",{className:"time"},"CD ",c),a.a.createElement("div",{className:"reason"},g)),a.a.createElement("div",{className:"info"},a.a.createElement("div",{className:"name"},o))),f&&a.a.createElement("div",{className:"cancel",onClick:f},p),l&&a.a.createElement("div",{className:"busy"},"BUSY"))};function _(){var e=Object(c.a)(["\n  .cancel-btn{\n    cursor: pointer;\n  }\n"]);return _=function(){return e},e}function N(){var e=Object(c.a)(["\n  background: #fff;\n  &:last-child{\n    margin: 0;\n  }\n"]);return N=function(){return e},e}function P(){var e=Object(c.a)(["\n  background: rgba(255, 255, 255, 0.5);\n  line-height: 56px;\n  text-align: center;\n  font-size: 14px;\n  font-weight: bold;\n  color: #666;\n"]);return P=function(){return e},e}function z(){var e=Object(c.a)(["\n  margin-right: 10px;\n  overflow: hidden;\n  width: 110px;\n  height: 56px;\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n  border-top-right-radius: 4px;\n  border-top-left-radius: 4px;\n"]);return z=function(){return e},e}function A(){var e=Object(c.a)(["\n  background: ",";\n  padding: 5px;\n  .a, .b, .c{\n    height: 20px;\n  }\n  .b{\n    font-size: 12px;\n    text-align: center;\n    color: #ababab;\n    font-weight: bold;\n    font-family: 'Modak', cursive;\n  }\n"]);return A=function(){return e},e}var C=function(e){var n,t=e.id,r=e.progress,o=e.difficulty,i=e.taskType,c=e.onRemove,s=e.dev;return 1===r?a.a.createElement(H,null,"Finished"):a.a.createElement(U,null,a.a.createElement("div",null,a.a.createElement(O,{withBackground:!0,type:i,value:r})),s?a.a.createElement(q,null,a.a.createElement(R,{key:s.id,draggableId:s.id,cooldownReason:s.cooldownReason,resourceName:s.name,backend:s.backend,cooldown:s.cooldown,avatar:s.avatar,design:s.design,frontend:s.frontend,onClick:(n=s.id,function(){c(n)}),actionText:"Cancel"})):a.a.createElement(m.c,{droppableId:t,isCombineEnabled:!0},function(e,n){return a.a.createElement(W,{isHovering:n.isDraggingOver,ref:e.innerRef},a.a.createElement("div",{className:"wi"},a.a.createElement("div",{index:0,className:"a"},a.a.createElement(S,{value:o,color:k(i)})),a.a.createElement("div",{index:1,className:"b"},"Drop here!"),a.a.createElement("div",{index:2,className:"c"}),e.placeholder))}))},W=g.default.div(A(),function(e){return e.isHovering?"#e1e1e1":"#fff"}),B=g.default.div(z()),H=Object(g.default)(B)(P()),U=Object(g.default)(B)(N()),q=g.default.div(_()),G=t(120),L=function(e){var n=e.strengthPercentage,t=e.children;return a.a.createElement(G.Shake,{h:5*n,v:5*n,r:3*n,int:38.8,max:100*n,fixed:!0,fixedStop:!1,freez:!0},t)};function Y(){var e=Object(c.a)(["\n  display: flex;\n"]);return Y=function(){return e},e}function F(){var e=Object(c.a)(["\n  display: flex;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  transition-property: transform;\n  transition-timing-function: linear;\n  transition-duration: ","s;\n  justify-content: center;\n  opacity: ",";\n  .container{\n    background: rgba(255, 255, 255, 0.2);\n    border: 1px solid rgba(100, 100, 100, 0.4);\n    border-radius: 8px;\n    padding: 10px;\n  }\n  .critical{\n    color: #fff;\n    font-size: 13px;\n    font-weight: bold;\n    margin-bottom: 5px;\n  }\n"]);return F=function(){return e},e}var J=b/1e3-.05,$=function(e){var n=e.tasks,t=e.position,r=e.required,o=e.onRemove,i=e.percentage,c=(e.resuired,!n.some(function(e){return 1!==e.progress})),s=i;return a.a.createElement(K,{allFinished:c,position:t},c?a.a.createElement("div",null,"Issue completed!"):a.a.createElement(L,{strengthPercentage:s},a.a.createElement("div",{className:"container"},r&&a.a.createElement("div",{className:"critical"},"Critical!"),a.a.createElement(Q,null,n.map(function(e){return a.a.createElement(C,{key:e.id,id:e.id,onRemove:o,difficulty:e.difficulty,devId:e.devId,dev:e.dev,progress:e.progress,complexity:e.complexity,taskType:e.taskType,state:e.state})})))))},K=g.default.div.attrs(function(e){return{style:{transform:"translateY(".concat(e.position,"px)")}}})(F(),J,function(e){return e.allFinished?.4:1}),Q=g.default.div(Y());function V(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}function X(){var e=Object(r.useState)(V()),n=Object(s.a)(e,2),t=n[0],a=n[1];return Object(r.useEffect)(function(){function e(){a(V())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}},[]),t}var Z=t(121),ee=t.n(Z);function ne(){var e=Object(c.a)(["\n  height: calc(100% + ","px);\n  display: flex;\n  flex-direction: column;\n"]);return ne=function(){return e},e}function te(){var e=Object(c.a)(["\n  flex: 1;\n  margin-top: -120px;\n  height: calc(100% + ","px);\n"]);return te=function(){return e},e}function re(){var e=Object(c.a)(["\n  display: flex;\n  .col{\n    flex: 1;\n    position: relative;\n  }\n"]);return re=function(){return e},e}function ae(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}var oe=function(e){var n=e.issues,t=e.currentTime,r=e.onRemove,o=X(),i=o.height,c=o.width,s=n.map(function(e){var n,r=e.expiredAt,a=r-e.startedAt,o=r-t;(n=Math.abs(o/a))>1&&(n=1);var c=1-n;return function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ae(t,!0).forEach(function(n){Object(d.a)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ae(t).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}({},e,{percentage:c,position:Math.floor(c*(i+120))})}),u=c<480?1:3,l=function(e,n){return ee()(s,function(e){return Math.floor(e.no%n)})}(0,u),f=j()(u,function(e){return a.a.createElement("div",{className:"col"},a.a.createElement(se,null,(l[e]||[]).filter(function(e){return e.expiredAt>t}).map(function(e){return a.a.createElement($,{key:e.no,id:e.id,tasks:e.tasks,onRemove:r,percentage:e.percentage,position:e.position,required:e.required,expiredAt:e.expiredAt})})))});return a.a.createElement(ce,null,a.a.createElement(ie,null,f))},ie=g.default.div(re()),ce=g.default.div(te(),120),se=g.default.div(ne(),120),de=function(e){var n=e.resourceName,t=e.draggableId,r=e.backend,o=e.cooldown,i=e.design,c=e.frontend,s=e.cooldownReason,d=e.avatar,u=e.used,l=e.index;return a.a.createElement(m.b,{draggableId:t,isDragDisabled:u,index:l},function(e,t){return a.a.createElement(R,{draggableProvided:e,isDragging:t.isDragging,resourceName:n,backend:r,cooldown:o,design:i,avatar:d,frontend:c,cooldownReason:s,used:u})})},ue=t(46),le=t(65),fe=t.n(le);function pe(){var e=Object(c.a)(["\n  text-align: right;\n  color: #f45b5d;\n  font-size: 13px;\n  opacity: ",";\n"]);return pe=function(){return e},e}function ve(){var e=Object(c.a)(["\n  background: #fff;\n  margin: 0;\n  padding: 10px;\n  .score{\n    display: flex;\n    justify-content: space-between;\n    font-size: 14px;\n    white-space: nowrap;\n    color: #4185f4;\n    font-weight: bold;\n  }\n  @media only screen and (max-width: 480px) {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n"]);return ve=function(){return e},e}var ge=function(e){function n(){var e,t;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(f.a)(this,(e=Object(p.a)(n)).call.apply(e,[this].concat(a)))).state={decreasedScore:0},t._scheduleDeceasingScore=function(e){clearTimeout(t.timeoutId),t._setDeceasingScore(e),t.timeoutId=setTimeout(t._setDeceasingScore.bind(Object(ue.a)(t),0),3e3)},t._setDeceasingScore=function(e){t.setState({decreasedScore:e})},t}return Object(v.a)(n,e),Object(l.a)(n,[{key:"componentDidUpdate",value:function(e){var n=e.value-this.props.value;n>0&&this._scheduleDeceasingScore(n)}},{key:"render",value:function(){var e=this.props.value,n=this.state.decreasedScore;return a.a.createElement(me,null,a.a.createElement("div",{className:"score"},"Revenue: $",a.a.createElement(fe.a,{end:e})),a.a.createElement(he,{show:n>0},"-$",a.a.createElement(fe.a,{duration:.5,end:n})))}}]),n}(r.Component),me=g.default.div(ve()),he=g.default.div(pe(),function(e){return e.show?1:0});function be(){var e=Object(c.a)(["\n  margin: 0;\n  font-size: 12px;\n  background: #fff;\n  padding: 10px 10px 0 10px;\n  b{\n    font-size: 15px;\n    font-weight: bold;\n  }\n"]);return be=function(){return e},e}var ke=function(e){var n=e.ticks,t=Math.floor(n/4)+1;return a.a.createElement(xe,null,1===t?"Last week!":a.a.createElement("div",null,a.a.createElement("b",null,t)," weeks remain"))},xe=g.default.div(be());function we(){var e=Object(c.a)(["\n      padding: 10px;\n      /* display: flex; */\n      overflow-y: hidden;\n      overflow-x: auto;\n      white-space: nowrap;\n    "]);return we=function(){return e},e}function ye(){var e=Object(c.a)(["\n  padding: 20px;\n  ","\n"]);return ye=function(){return e},e}function Oe(){var e=Object(c.a)([";\n      flex: 0 0 160px;\n    "]);return Oe=function(){return e},e}function Ee(){var e=Object(c.a)(["\n      position: fixed;\n      top: 0;\n      left: 0;\n      right: 0;\n      overflow-x: auto;\n      flex: auto;\n    "]);return Ee=function(){return e},e}function je(){var e=Object(c.a)(["\n  flex: 0 0 160px;\n  background: rgba(255, 255, 255, 0.6);\n  ","\n"]);return je=function(){return e},e}var De=function(e){var n=e.resources,t=e.score,r=e.remainingTicks,o=X().width<480;return a.a.createElement(Se,{isMobile:o},r>0&&a.a.createElement(ke,{ticks:r}),a.a.createElement(ge,{value:t}),a.a.createElement(m.c,{isDropDisabled:o,droppableId:h},function(e,t){return a.a.createElement(Te,{isMobile:o,ref:e.innerRef},n.map(function(e,n){return a.a.createElement(de,{key:e.id,draggableId:e.id,cooldownReason:e.cooldownReason,index:n,resourceName:e.name,backend:e.backend,cooldown:e.cooldown,design:e.design,avatar:e.avatar,frontend:e.frontend,used:e.used})}),!o&&e.placeholder)}))},Se=g.default.div(je(),function(e){return e.isMobile?Object(g.css)(Ee()):Object(g.css)(Oe())}),Te=g.default.div(ye(),function(e){return e.isMobile&&Object(g.css)(we())}),Me=function(){function e(n){Object(u.a)(this,e),this.developerMap=n.reduce(function(e,n){return e[n.id]=n,e},{}),this.devTaskMap={}}return Object(l.a)(e,[{key:"assignWork",value:function(e,n){var t=this.developerMap[e];void 0!==t?void 0===this.devTaskMap[e]?t.cooldown>0?console.error("developer ".concat(t.name," is on cooldown state")):this.devTaskMap[e]=n:console.error("developer ".concat(t.name," is busy")):console.error("developer ".concat(e," not found"))}},{key:"releaseDeveloper",value:function(e){delete this.devTaskMap[e]}},{key:"workingDeveloperRecords",value:function(){var e=this.developerMap,n=this.devTaskMap;return Object.keys(this.devTaskMap).map(function(t){return{developer:e[t],taskId:n[t]}})}},{key:"list",value:function(){return Object.values(this.developerMap)}},{key:"find",value:function(e){return this.developerMap[e]}},{key:"queryDeveloperTaskId",value:function(e){return this.devTaskMap[e]}}]),e}(),Ie=t(264),Re=function(){function e(n){Object(u.a)(this,e),this.seed=1,this.minimumNewIssueCycle=n,this.no=0}return Object(l.a)(e,[{key:"generate",value:function(e){if(this.seed>Math.random()){var n=Ie.newIssue(e);return n.no=this.no,this.no+=1,this.seed=-.1*this.minimumNewIssueCycle,n}return this.seed+=.1,null}}]),e}(),_e=function(){function e(){Object(u.a)(this,e),this.issueMap={},this.taskMap={}}return Object(l.a)(e,[{key:"add",value:function(e){var n=this.taskMap;this.issueMap[e.id]=e,e.tasks.forEach(function(e){n[e.id]=e})}},{key:"list",value:function(){return Object.values(this.issueMap)}},{key:"findTask",value:function(e){return this.taskMap[e]}},{key:"delayedIssues",value:function(e){return Object.values(this.issueMap).filter(function(n){return e-n.expiredAt>0})}}]),e}(),Ne=t(267),Pe=function(){function e(n,t){Object(u.a)(this,e),this.developerStore=new Me(n),this.currentTime=0,this.duration=t,this.issueGenerator=new Re(6),this.issueStore=new _e,this.syncIssue(),this.scoreSeries=[this.computeScore(this.issueStore.list())]}return Object(l.a)(e,[{key:"assignDeveloper",value:function(e,n){void 0!==this.issueStore.findTask(n)?this.developerStore.assignWork(e,n):console.error("task ".concat(n," not found"))}},{key:"removeDeveloper",value:function(e){var n=e.devId,t=e.reason,r=void 0===t?"manual":t,a=e.cooldown,o=void 0===a?10:a,i=this.developerStore.find(n);void 0!==i?(this.developerStore.releaseDeveloper(n),i.cooldown=o,i.cooldownReason=r):console.error("dev ".concat(n," not found"))}},{key:"nextTick",value:function(){this.currentTime+=1,this.syncIssue(),this.updateTasks(),this.updateDevs(),this.updateIssues(),this.randomRelease(),this.scoreSeries.push(this.computeScore(this.issueStore.list()))}},{key:"state",value:function(){var e={},n=this.developerStore.queryDeveloperTaskId.bind(this.developerStore),t=this.developerStore.list().map(function(t){var r=n(t.id),a=!!r;return a&&(e[r]=t.id),Object.assign({},t,{used:a})}),r=this.issueStore.list().map(function(n){var t=n.tasks.map(function(n){var t=e[n.id]||null;return Object.assign({},n,{devId:t})});return Object.assign({},n,{tasks:t})}),a=this.computeScore(r),o=this.duration-this.currentTime,i=this.scoreSeries,c=0;return a>=17e3?c=3:a>=15e3?c=2:a>=1e4&&(c=1),{currentTime:this.currentTime,developers:t,issues:r,score:a,remainingTicks:o,scoreSeries:i,star:c}}},{key:"syncIssue",value:function(){var e=this.issueGenerator.generate(this.currentTime);e&&this.issueStore.add(e)}},{key:"updateTasks",value:function(){var e=this,n=this.updateTask.bind(this);this.developerStore.workingDeveloperRecords().forEach(function(t){var r=t.developer,a=t.taskId,o=e.issueStore.findTask(a);void 0!==o?n(r,o):console.error("task: ".concat(a," not found!"))})}},{key:"updateTask",value:function(e,n){if(n.resolved+=e[n.taskType],n.consumedTick+=1,n.consumedTick>=6&&n.resolved>=n.complexity)n.state="completed",n.progress=1,this.developerStore.releaseDeveloper(e.id);else{var t=n.consumedTick/6,r=n.resolved/n.complexity;n.progress=t<r?t:r}}},{key:"updateDevs",value:function(){this.developerStore.list().forEach(function(e){e.cooldown>0&&(e.cooldown=e.cooldown-1,0===e.cooldown&&(e.cooldownReason=""))})}},{key:"updateIssues",value:function(){var e=this.currentTime;this.issueStore.list().forEach(function(n){if("completed"!==n.state){var t=n.tasks;if(0==t.filter(function(e){return"completed"!==e.state}).length)n.state="completed";else{var r=e-n.expiredAt,a=t.reduce(function(e,n){return e+n.progress},0)/t.length;1===r&&(n.state="delayed",n.required&&(n.penalty=Math.floor(n.score*(1-a))))}}});var n=this.issueStore.delayedIssues(e),t=this.developerStore.workingDeveloperRecords().reduce(function(e,n){var t=n.developer;return e[n.taskId]=t.id,e},{}),r=this.developerStore.releaseDeveloper.bind(this.developerStore);n.forEach(function(e){e.tasks.forEach(function(e){if(t[e.id]){var n=t[e.id].devId;r(n)}})})}},{key:"computeScore",value:function(e){return e.reduce(function(e,n){var t=-1*n.penalty;return"completed"===n.state&&(t+=n.score),e+t},0)}},{key:"randomRelease",value:function(){var e=this.removeDeveloper.bind(this),n={sick:5,vacation:10,marriage:10,conference:3,jail:10},t=Object.keys(n);if(.01>=Math.random()){var r=this.developerStore.workingDeveloperRecords();if(r.length>0){var a=r[0].developer.id,o=t[Math.floor(Math.random()*t.length)];e({devId:a,reason:o,cooldown:n[o]})}}}}]),e}();var ze=t(28),Ae=t.n(ze),Ce=t(122),We=t.n(Ce);var Be=function(e){function n(){return Object(u.a)(this,n),Object(f.a)(this,Object(p.a)(n).apply(this,arguments))}return Object(v.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.scoreSeries;!function(e,n){window.google.charts.load("current",{packages:["corechart","line"]}),window.google.charts.setOnLoadCallback(function(){var t=new window.google.visualization.DataTable;t.addColumn("number","tick"),t.addColumn("number","revenue"),t.addColumn({type:"string",role:"tooltip"});var r=n.map(function(e,n){return[n,e,e.toString(10)]});t.addRows(r);new window.google.visualization.LineChart(e).draw(t,{hAxis:{title:"Week"},vAxis:{title:"Revenue"},legend:"none"})})}(this.targetDiv,e)}},{key:"render",value:function(){var e=this;return a.a.createElement("div",null,a.a.createElement("div",{ref:function(n){return e.targetDiv=n}}))}}]),n}(r.Component);function He(){var e=Object(c.a)(["\n  width: 100%;\n  padding: 10px 0;\n"]);return He=function(){return e},e}function Ue(){var e=Object(c.a)(["\n  color: #e7711b;\n"]);return Ue=function(){return e},e}function qe(){var e=Object(c.a)(["\n  color: #4185f4;\n"]);return qe=function(){return e},e}function Ge(){var e=Object(c.a)(["\n  display: flex;\n  font-size: 20px;\n  padding: 0 20px;\n  justify-content: space-between;\n"]);return Ge=function(){return e},e}function Le(){var e=Object(c.a)(["\n  text-align: center;\n  padding: 0 20px;\n  font-size: 20px;\n"]);return Le=function(){return e},e}var Ye=function(){window.location.reload()},Fe=function(e){function n(){var e,t;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(f.a)(this,(e=Object(p.a)(n)).call.apply(e,[this].concat(a))))._getResultTitle=function(){var e;switch(t.props.star){case 0:e="Your product failed!";break;case 1:e="Your product barely survived.";break;case 2:e="Your product survived.";break;case 3:e="You are a Project Management Master!"}return e},t._renderStars=function(){var e=t.props.star;return j()(e,function(){return"\u2605"}).join("").padEnd(3,"\u2606")},t}return Object(v.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this.props,n=e.score,t=e.show,r=e.star,o=e.scoreSeries;return a.a.createElement("div",null,a.a.createElement(Ae.a,{show:t,onHide:function(){}},a.a.createElement(Ae.a.Header,null,a.a.createElement(Ae.a.Title,null,a.a.createElement(Je,null,this._getResultTitle()))),a.a.createElement(Ae.a.Body,null,a.a.createElement(Ke,null,a.a.createElement("span",null,"Revenue"),a.a.createElement("span",null,"$",n)),a.a.createElement(Qe,null,a.a.createElement("span",null,"Score"),this._renderStars()),a.a.createElement(Be,{star:r,scoreSeries:o})),a.a.createElement(Ae.a.Footer,null,a.a.createElement(Ve,{variant:"primary",onClick:Ye},"Restart"))))}}]),n}(r.Component),Je=g.default.div(Le()),$e=g.default.div(Ge()),Ke=Object(g.default)($e)(qe()),Qe=Object(g.default)($e)(Ue()),Ve=Object(g.default)(We.a)(He());function Xe(){var e=Object(c.a)(["\n  display: flex;\n  height: 100vh;\n  width: 100vw;\n  overflow: hidden;\n"]);return Xe=function(){return e},e}function Ze(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function en(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Ze(t,!0).forEach(function(n){Object(d.a)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Ze(t).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}var nn=function(e,n,t){var r=Array.from(e),a=r.splice(n,1),o=Object(s.a)(a,1)[0];return r.splice(t,0,o),r},tn=function(e){function n(){var e,t;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(f.a)(this,(e=Object(p.a)(n)).call.apply(e,[this].concat(a)))).state={currentTime:null,resources:[],issues:[],intervalId:null,game:null,isDragging:!1,score:0,remainingTicks:null,gameEnded:!1,star:null,scoreSeries:[]},t._setUpGame=function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:120,n=Ne.newDevelopers(),t=new Pe(n,e);return{assignDeveloper:t.assignDeveloper.bind(t),removeDeveloper:function(e){t.removeDeveloper.bind(t)({devId:e})},nextTick:t.nextTick.bind(t),state:t.state.bind(t)}}()},t._startTicker=function(){var e=window.setInterval(t._tick,b);t.setState({intervalId:e})},t._stopTicker=function(){window.clearInterval(t.state.intervalId)},t._tick=function(){t.state.game.nextTick(),t._refreshData()},t._removeDeveloper=function(e){t.state.game.removeDeveloper(e),t._refreshData()},t._endGame=function(){t._stopTicker(),t.setState({gameEnded:!0})},t._refreshData=function(){var e=t.state,n=e.isDragging,r=e.game.state();0===r.remainingTicks&&(console.warn("END",r.remainingTicks),t._endGame()),n||t.setState({currentTime:r.currentTime,issues:r.issues,resources:r.developers,score:r.score,remainingTicks:r.remainingTicks,star:r.star,scoreSeries:r.scoreSeries})},t._mapResourcesToIssues=function(){var e=t.state,n=e.resources;return e.issues.map(function(e){return en({},e,{tasks:e.tasks.map(function(e){var t=e.devId,r=n.find(function(e){return e.id===t});return r?en({},e,{dev:r}):e})})})},t._onBeforeDragStart=function(){t._toggleDragging(!0),t._stopTicker()},t._toggleDragging=function(e){return function(){t.setState({isDragging:e})}},t._onDragEnd=function(e){var n=t.state.gameEnded;if(t._toggleDragging(!1)(),t._tick(),n||t._startTicker(),e.destination)if(e.destination.droppableId===h)t._reorder(e);else{var r=e.draggableId,a=e.destination.droppableId;t._assignResource(r,a)}},t._assignResource=function(e,n){t.state.game.assignDeveloper(e,n),t._refreshData()},t._reorder=function(e){var n=nn(t.state.resources,e.source.index,e.destination.index);t.setState({resources:n})},t}return Object(v.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){t(302);var e=this._setUpGame();this.setState({game:e},this._startTicker),this.audio=new Audio("https://dl.dropbox.com/s/ba0ffaw22wd2mpp/background_cat_short.mp3"),this.audio.loop=!0,this.audio.play()}},{key:"render",value:function(){var e=this.state,n=e.resources,t=e.currentTime,r=e.score,o=e.remainingTicks,i=e.gameEnded,c=e.star,s=e.scoreSeries,d=this._mapResourcesToIssues();return a.a.createElement(m.a,{onBeforeDragStart:this._onBeforeDragStart,onDragEnd:this._onDragEnd},a.a.createElement(rn,null,a.a.createElement(oe,{currentTime:t,onRemove:this._removeDeveloper,issues:d}),a.a.createElement(De,{score:r,resources:n,remainingTicks:o})),a.a.createElement(Fe,{score:r,show:i,star:c,scoreSeries:s}))}}]),n}(r.Component),rn=g.default.div(Xe());function an(){var e=Object(c.a)(["\n  height: 100vh;\n  background: #000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  .info{\n    font-family: 'Permanent Marker', cursive;\n    text-align: center;\n    font-size: 22px;\n    color: #f4427d;\n  }\n  .description{\n    padding: 0 20px;\n  }\n  .btn{\n    display: inline-block;\n    padding: 15px 25px;\n    border-radius: 0;\n    font-size: 36px;\n    border: 2px solid #f983aa;\n    color: #f4427d;\n    transition: 0.2s;\n    cursor: pointer;\n    margin: 36px 0;\n    &:hover{\n      transform: scale(1.1);\n      box-shadow: 0 12px 15px rgba(0,0,0,0.2)\n      color: #999;\n    }\n  }\n"]);return an=function(){return e},e}var on=function(){var e=Object(r.useState)(!1),n=Object(s.a)(e,2),t=n[0],o=n[1];return t?a.a.createElement(tn,null):a.a.createElement(cn,null,a.a.createElement("div",{className:"info"},a.a.createElement("div",{className:"description"},"Assign your resources properly to complete issue and tasks as many as possible!"),a.a.createElement("div",{className:"btn",onClick:function(){return o(!0)}},"Start Game!!")))},cn=g.default.div(an());t(303),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(on,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[125,1,2]]]);
//# sourceMappingURL=main.318f0bfb.chunk.js.map