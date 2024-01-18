$(function(){"use strict";function tt(n){if(typeof Storage!="undefined")return localStorage.getItem(n);window.alert("Please use a modern browser to properly view this template!")}function it(n,t){typeof Storage!="undefined"?localStorage.setItem(n,t):window.alert("Please use a modern browser to properly view this template!")}function o(n){$("body").toggleClass(n);f.fixSidebar();$("body").hasClass("fixed")&&n=="fixed"&&(u.expandOnHover(),f.activate());i.fix()}function s(n){return $.each(r,function(n){$("body").removeClass(r[n])}),$("body").addClass(n),it("skin",n),!1}function rt(){var n=tt("skin");n&&$.inArray(n,r)&&s(n);$("[data-skin]").on("click",function(n){$(this).hasClass("knob")||(n.preventDefault(),s($(this).data("skin")))});$("[data-layout]").on("click",function(){o($(this).data("layout"))});$("[data-controlsidebar]").on("click",function(){o($(this).data("controlsidebar"));var n=!i.options.slide;i.options.slide=n;n||$(".control-sidebar").removeClass("control-sidebar-open")});$('[data-sidebarskin="toggle"]').on("click",function(){var n=$(".control-sidebar");n.hasClass("control-sidebar-dark")?(n.removeClass("control-sidebar-dark"),n.addClass("control-sidebar-light")):(n.removeClass("control-sidebar-light"),n.addClass("control-sidebar-dark"))});$('[data-enable="expandOnHover"]').on("click",function(){$(this).attr("disabled",!0);u.expandOnHover();$("body").hasClass("sidebar-collapse")||$('[data-layout="sidebar-collapse"]').click()});$("body").hasClass("fixed")&&$('[data-layout="fixed"]').attr("checked","checked");$("body").hasClass("layout-boxed")&&$('[data-layout="layout-boxed"]').attr("checked","checked");$("body").hasClass("sidebar-collapse")&&$('[data-layout="sidebar-collapse"]').attr("checked","checked")}var r,e,h,t,n,c,l,a,v,y,p,w,b,k,d,g,nt;$('[data-toggle="control-sidebar"]').controlSidebar();$('[data-toggle="push-menu"]').pushMenu();var u=$('[data-toggle="push-menu"]').data("lte.pushmenu"),i=$('[data-toggle="control-sidebar"]').data("lte.controlsidebar"),f=$("body").data("lte.layout");$(window).on("load",function(){u=$('[data-toggle="push-menu"]').data("lte.pushmenu");i=$('[data-toggle="control-sidebar"]').data("lte.controlsidebar");f=$("body").data("lte.layout")});r=["skin-blue","skin-black","skin-red","skin-yellow","skin-purple","skin-green","skin-blue-light","skin-black-light","skin-red-light","skin-yellow-light","skin-purple-light","skin-green-light"];e=$("<div />",{id:"control-sidebar-theme-demo-options-tab","class":"tab-pane active"});h=$("<li />",{"class":"active"}).html("<a href='#control-sidebar-theme-demo-options-tab' data-toggle='tab'><i class=\"fa fa-wrench\"><\/i><\/a>");$('[href="#control-sidebar-home-tab"]').parent().before(h);t=$("<div />");t.append('<h4 class="control-sidebar-heading">布局设置<\/h4><div class="form-group"><label class="control-sidebar-subheading"><input type="checkbox" checked data-layout="fixed"class="pull-right"/> 固定布局<\/label><p>激活固定布局。不能使用固定和装箱的布局。<\/p><\/div><div class="form-group"><label class="control-sidebar-subheading"><input type="checkbox"data-layout="layout-boxed" class="pull-right"/> 装箱布局<\/label><p>激活装箱布局<\/p><\/div><div class="form-group"><label class="control-sidebar-subheading"><input type="checkbox"data-layout="sidebar-collapse"class="pull-right"/> 切换侧边栏<\/label><p>切换左边栏的状态（打开或折叠）<\/p><\/div><div class="form-group"><label class="control-sidebar-subheading"><input type="checkbox"data-enable="expandOnHover"class="pull-right"/> 侧边栏展开悬停<\/label><p>让侧边栏迷你展开悬停<\/p><\/div><div class="form-group"><label class="control-sidebar-subheading"><input type="checkbox"data-controlsidebar="control-sidebar-open"class="pull-right"/> 切换右边栏幻灯片<\/label><p>切换幻灯片内容和推送内容效果 <\/p><\/div><div class="form-group"><label class="control-sidebar-subheading"><input type="checkbox"data-sidebarskin="toggle"class="pull-right"/> 切换右侧边栏皮肤<\/label><p>在右边和右边的皮肤之间切换<\/p><\/div>');n=$("<ul />",{"class":"list-unstyled clearfix"});c=$("<li />",{style:"float:left; width: 33.33333%; padding: 5px;"}).append('<a href="javascript:void(0)" data-skin="skin-blue" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover"><div><span style="display:block; width: 20%; float: left; height: 7px; background: #367fa9"><\/span><span class="bg-light-blue" style="display:block; width: 80%; float: left; height: 7px;"><\/span><\/div><div><span style="display:block; width: 20%; float: left; height: 20px; background: #222d32"><\/span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"><\/span><\/div><\/a><p class="text-center no-margin">Blue<\/p>');n.append(c);l=$("<li />",{style:"float:left; width: 33.33333%; padding: 5px;"}).append('<a href="javascript:void(0)" data-skin="skin-black" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover"><div style="box-shadow: 0 0 2px rgba(0,0,0,0.1)" class="clearfix"><span style="display:block; width: 20%; float: left; height: 7px; background: #fefefe"><\/span><span style="display:block; width: 80%; float: left; height: 7px; background: #fefefe"><\/span><\/div><div><span style="display:block; width: 20%; float: left; height: 20px; background: #222"><\/span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"><\/span><\/div><\/a><p class="text-center no-margin">Black<\/p>');n.append(l);a=$("<li />",{style:"float:left; width: 33.33333%; padding: 5px;"}).append('<a href="javascript:void(0)" data-skin="skin-purple" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover"><div><span style="display:block; width: 20%; float: left; height: 7px;" class="bg-purple-active"><\/span><span class="bg-purple" style="display:block; width: 80%; float: left; height: 7px;"><\/span><\/div><div><span style="display:block; width: 20%; float: left; height: 20px; background: #222d32"><\/span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"><\/span><\/div><\/a><p class="text-center no-margin">Purple<\/p>');n.append(a);v=$("<li />",{style:"float:left; width: 33.33333%; padding: 5px;"}).append('<a href="javascript:void(0)" data-skin="skin-green" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover"><div><span style="display:block; width: 20%; float: left; height: 7px;" class="bg-green-active"><\/span><span class="bg-green" style="display:block; width: 80%; float: left; height: 7px;"><\/span><\/div><div><span style="display:block; width: 20%; float: left; height: 20px; background: #222d32"><\/span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"><\/span><\/div><\/a><p class="text-center no-margin">Green<\/p>');n.append(v);y=$("<li />",{style:"float:left; width: 33.33333%; padding: 5px;"}).append('<a href="javascript:void(0)" data-skin="skin-red" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover"><div><span style="display:block; width: 20%; float: left; height: 7px;" class="bg-red-active"><\/span><span class="bg-red" style="display:block; width: 80%; float: left; height: 7px;"><\/span><\/div><div><span style="display:block; width: 20%; float: left; height: 20px; background: #222d32"><\/span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"><\/span><\/div><\/a><p class="text-center no-margin">Red<\/p>');n.append(y);p=$("<li />",{style:"float:left; width: 33.33333%; padding: 5px;"}).append('<a href="javascript:void(0)" data-skin="skin-yellow" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover"><div><span style="display:block; width: 20%; float: left; height: 7px;" class="bg-yellow-active"><\/span><span class="bg-yellow" style="display:block; width: 80%; float: left; height: 7px;"><\/span><\/div><div><span style="display:block; width: 20%; float: left; height: 20px; background: #222d32"><\/span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"><\/span><\/div><\/a><p class="text-center no-margin">Yellow<\/p>');n.append(p);w=$("<li />",{style:"float:left; width: 33.33333%; padding: 5px;"}).append('<a href="javascript:void(0)" data-skin="skin-blue-light" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover"><div><span style="display:block; width: 20%; float: left; height: 7px; background: #367fa9"><\/span><span class="bg-light-blue" style="display:block; width: 80%; float: left; height: 7px;"><\/span><\/div><div><span style="display:block; width: 20%; float: left; height: 20px; background: #f9fafc"><\/span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"><\/span><\/div><\/a><p class="text-center no-margin" style="font-size: 12px">Blue Light<\/p>');n.append(w);b=$("<li />",{style:"float:left; width: 33.33333%; padding: 5px;"}).append('<a href="javascript:void(0)" data-skin="skin-black-light" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover"><div style="box-shadow: 0 0 2px rgba(0,0,0,0.1)" class="clearfix"><span style="display:block; width: 20%; float: left; height: 7px; background: #fefefe"><\/span><span style="display:block; width: 80%; float: left; height: 7px; background: #fefefe"><\/span><\/div><div><span style="display:block; width: 20%; float: left; height: 20px; background: #f9fafc"><\/span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"><\/span><\/div><\/a><p class="text-center no-margin" style="font-size: 12px">Black Light<\/p>');n.append(b);k=$("<li />",{style:"float:left; width: 33.33333%; padding: 5px;"}).append('<a href="javascript:void(0)" data-skin="skin-purple-light" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover"><div><span style="display:block; width: 20%; float: left; height: 7px;" class="bg-purple-active"><\/span><span class="bg-purple" style="display:block; width: 80%; float: left; height: 7px;"><\/span><\/div><div><span style="display:block; width: 20%; float: left; height: 20px; background: #f9fafc"><\/span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"><\/span><\/div><\/a><p class="text-center no-margin" style="font-size: 12px">Purple Light<\/p>');n.append(k);d=$("<li />",{style:"float:left; width: 33.33333%; padding: 5px;"}).append('<a href="javascript:void(0)" data-skin="skin-green-light" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover"><div><span style="display:block; width: 20%; float: left; height: 7px;" class="bg-green-active"><\/span><span class="bg-green" style="display:block; width: 80%; float: left; height: 7px;"><\/span><\/div><div><span style="display:block; width: 20%; float: left; height: 20px; background: #f9fafc"><\/span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"><\/span><\/div><\/a><p class="text-center no-margin" style="font-size: 12px">Green Light<\/p>');n.append(d);g=$("<li />",{style:"float:left; width: 33.33333%; padding: 5px;"}).append('<a href="javascript:void(0)" data-skin="skin-red-light" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover"><div><span style="display:block; width: 20%; float: left; height: 7px;" class="bg-red-active"><\/span><span class="bg-red" style="display:block; width: 80%; float: left; height: 7px;"><\/span><\/div><div><span style="display:block; width: 20%; float: left; height: 20px; background: #f9fafc"><\/span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"><\/span><\/div><\/a><p class="text-center no-margin" style="font-size: 12px">Red Light<\/p>');n.append(g);nt=$("<li />",{style:"float:left; width: 33.33333%; padding: 5px;"}).append('<a href="javascript:void(0)" data-skin="skin-yellow-light" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover"><div><span style="display:block; width: 20%; float: left; height: 7px;" class="bg-yellow-active"><\/span><span class="bg-yellow" style="display:block; width: 80%; float: left; height: 7px;"><\/span><\/div><div><span style="display:block; width: 20%; float: left; height: 20px; background: #f9fafc"><\/span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"><\/span><\/div><\/a><p class="text-center no-margin" style="font-size: 12px">Yellow Light<\/p>');n.append(nt);t.append('<h4 class="control-sidebar-heading">Skins<\/h4>');t.append(n);e.append(t);$("#control-sidebar-home-tab").after(e);rt();$('[data-toggle="tooltip"]').tooltip()});