if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['/Users/ssuen/6.170/conniehuang_stubailo_s2tephen_proj3/app/client/helpers.js']) {
   __coverage__['/Users/ssuen/6.170/conniehuang_stubailo_s2tephen_proj3/app/client/helpers.js'] = {"path":"/Users/ssuen/6.170/conniehuang_stubailo_s2tephen_proj3/app/client/helpers.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0},"b":{"1":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":36},"end":{"line":1,"column":50}}},"2":{"name":"(anonymous_2)","line":2,"loc":{"start":{"line":2,"column":20},"end":{"line":2,"column":41}}},"3":{"name":"(anonymous_3)","line":7,"loc":{"start":{"line":7,"column":34},"end":{"line":7,"column":52}}},"4":{"name":"(anonymous_4)","line":11,"loc":{"start":{"line":11,"column":40},"end":{"line":11,"column":58}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":5,"column":3}},"2":{"start":{"line":2,"column":2},"end":{"line":4,"column":5}},"3":{"start":{"line":3,"column":4},"end":{"line":3,"column":36}},"4":{"start":{"line":7,"column":0},"end":{"line":9,"column":3}},"5":{"start":{"line":8,"column":2},"end":{"line":8,"column":46}},"6":{"start":{"line":11,"column":0},"end":{"line":16,"column":3}},"7":{"start":{"line":12,"column":2},"end":{"line":12,"column":50}},"8":{"start":{"line":13,"column":2},"end":{"line":15,"column":3}},"9":{"start":{"line":14,"column":4},"end":{"line":14,"column":32}}},"branchMap":{"1":{"line":13,"type":"if","locations":[{"start":{"line":13,"column":2},"end":{"line":13,"column":2}},{"start":{"line":13,"column":2},"end":{"line":13,"column":2}}]}}};
}
var __cov_j_E5$iFwo2Pk0WxrgKgVvg = __coverage__['/Users/ssuen/6.170/conniehuang_stubailo_s2tephen_proj3/app/client/helpers.js'];
__cov_j_E5$iFwo2Pk0WxrgKgVvg.s['1']++;Handlebars.registerHelper('object',function(obj){__cov_j_E5$iFwo2Pk0WxrgKgVvg.f['1']++;__cov_j_E5$iFwo2Pk0WxrgKgVvg.s['2']++;return _.map(obj,function(value,key){__cov_j_E5$iFwo2Pk0WxrgKgVvg.f['2']++;__cov_j_E5$iFwo2Pk0WxrgKgVvg.s['3']++;return{key:key,value:value};});});__cov_j_E5$iFwo2Pk0WxrgKgVvg.s['4']++;Handlebars.registerHelper('user',function(user_id){__cov_j_E5$iFwo2Pk0WxrgKgVvg.f['3']++;__cov_j_E5$iFwo2Pk0WxrgKgVvg.s['5']++;return Meteor.users.findOne({_id:user_id});});__cov_j_E5$iFwo2Pk0WxrgKgVvg.s['6']++;Handlebars.registerHelper('user_email',function(user_id){__cov_j_E5$iFwo2Pk0WxrgKgVvg.f['4']++;__cov_j_E5$iFwo2Pk0WxrgKgVvg.s['7']++;var user=Meteor.users.findOne({_id:user_id});__cov_j_E5$iFwo2Pk0WxrgKgVvg.s['8']++;if(user){__cov_j_E5$iFwo2Pk0WxrgKgVvg.b['1'][0]++;__cov_j_E5$iFwo2Pk0WxrgKgVvg.s['9']++;return user.primary_email();}else{__cov_j_E5$iFwo2Pk0WxrgKgVvg.b['1'][1]++;}});
