/*! For license information please see main.bde72ea87585ebc44fe9.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Airflow=t():(e.Airflow=e.Airflow||{},e.Airflow.main=t())}(self,(function(){return function(){"use strict";var e={1068:function(e,t,o){o.d(t,{$O:function(){return c},M1:function(){return m},n0:function(){return l},oY:function(){return u},z6:function(){return i}});var n="YYYY-MM-DD, HH:mm:ss",r="YYYY-MM-DD, HH:mm:ss z",a="z (Z)",i="YYYY-MM-DDThh:mm:ssTZD",c="timezone";function m(e){return e instanceof moment?e.isUTC()?"UTC":e.format(a):"UTC"===e?e:moment().tz(e).format(a)}function l(e,t){var o=moment(e),r=$.extend({title:!0},t).title,a=document.createElement("time");return a.setAttribute("datetime",o.format()),r&&a.setAttribute("title",o.isUTC()?"":"UTC: ".concat(o.clone().utc().format())),a.innerText=o.format(n),a}function u(e){moment.tz.setDefault(e),$('time[data-datetime-convert!="false"]').each((function(e,t){var o=$(t),a=moment(o.attr("datetime"));a._isValid&&o.text(a.format(o.data("with-tz")?r:n)),void 0!==o.attr("title")&&o.attr("title",a.isUTC()?"":"UTC: ".concat(a.clone().utc().format()))})),$(".datetime input").each((function(e,t){t.value=moment(t.value).format()}))}}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,o),a.exports}o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return function(){o.r(n),o.d(n,{convertSecsToHumanReadable:function(){return c},escapeHtml:function(){return i}});var e=o(1068);function t(){var t=moment();$("#clock").attr("datetime",t.format(e.z6)).html("".concat(t.format("HH:mm")," <strong>").concat((0,e.M1)(t),"</strong>"))}function r(o){localStorage.setItem("selected-timezone",o);var n=new CustomEvent(e.$O,{detail:o});document.dispatchEvent(n),(0,e.oY)(o),t(),$("body").trigger({type:"airflow.timezone-change",timezone:o})}window.isoDateToTimeEl=e.n0,window.moment=Airflow.moment;var a=document.createElement("span");function i(e){return a.textContent=e,a.innerHTML}function c(e){var t=e,o=e,n=o-Math.floor(o);t=Math.floor(t);var r=Math.floor(t/3600);t-=3600*r;var a=Math.floor(t/60);t-=60*a;var i="";return r>0&&(i+="".concat(r,"Hours ")),a>0&&(i+="".concat(a,"Min ")),t+n>0&&(Math.floor(o)===o?i+="".concat(t,"Sec"):i+="".concat((t+=n).toFixed(3),"Sec")),i}function m(e){var t=$(e),o=$(".filter_val.form-control",t.parents("tr"));"Is Null"===t.text()||"Is not Null"===t.text()?(void 0!==o.attr("required")&&(o.removeAttr("required"),o.attr("airflow-required",!0)),1===o.parent(".datetime").length?o.parent(".datetime").hide():o.hide()):("true"===o.attr("airflow-required")&&(o.attr("required",!0),o.removeAttr("airflow-required")),1===o.parent(".datetime").length?o.parent(".datetime").show():o.show())}window.escapeHtml=i,window.convertSecsToHumanReadable=c,window.postAsForm=function(e,t){var o=$("<form></form>");o.attr("method","POST"),o.attr("action",e),$.each(t||{},(function(e,t){var n=$("<input></input>");n.attr("type","hidden"),n.attr("name",e),n.attr("value",t),o.append(n)}));var n=$("<input></input>");n.attr("type","hidden"),n.attr("name","csrf_token"),n.attr("value",csrfToken),o.append(n),$(document.body).append(o),o.submit()},$(document).ready((function(){!function(){var t=moment.tz.guess(),o=localStorage.getItem("selected-timezone"),n=localStorage.getItem("chosen-timezone");function a(o){localStorage.setItem("chosen-timezone",o),o!==t||o!==Airflow.serverTimezone?($("#timezone-manual a").data("timezone",o).text((0,e.M1)(o)),$("#timezone-manual").show()):$("#timezone-manual").hide()}n&&a(n),r(o||Airflow.defaultUITimezone),"UTC"!==Airflow.serverTimezone&&($("#timezone-server a").html("".concat((0,e.M1)(Airflow.serverTimezone),' <span class="label label-primary">Server</span>')),$("#timezone-server").show()),Airflow.serverTimezone!==t?$("#timezone-local a").attr("data-timezone",t).html("".concat((0,e.M1)(t),' <span class="label label-info">Local</span>')):$("#timezone-local").hide(),$("a[data-timezone]").click((function(e){r($(e.currentTarget).data("timezone"))})),$("#timezone-other").typeahead({source:$(moment.tz.names().map((function(e){return{category:e.split("/",1)[0],name:e.replace("_"," "),tzName:e}}))),showHintOnFocus:"all",showCategoryHeader:!0,items:"all",afterSelect:function(e){var t=this;this.$element.val(""),a(e.tzName),r(e.tzName),setTimeout((function(){document.activeElement.blur(),t.shown=!1,t.focused=!1}),1)}})}(),$("#clock").attr("data-original-title",hostName).attr("data-placement","bottom").parent().show(),t(),setInterval(t,1e3),$.ajaxSetup({beforeSend:function(e,t){/^(GET|HEAD|OPTIONS|TRACE)$/i.test(t.type)||this.crossDomain||e.setRequestHeader("X-CSRFToken",csrfToken)}}),$.fn.datetimepicker.defaults.sideBySide=!0,$(".datetimepicker").datetimepicker({format:"YYYY-MM-DDTHH:mm:ssZ"}),$(".datepicker").datetimepicker({format:"YYYY-MM-DD"}),$(".timepicker").datetimepicker({format:"HH:mm:ss"}),$(".filters .select2-chosen").each((function(e,t){m(t)})),$(".filters .select2-chosen").on("DOMNodeInserted",(function(e){m(e.target)})),$("#filter_form a.filter").click((function(){$(".datetimepicker").datetimepicker(),$(".filters .select2-chosen").on("DOMNodeInserted",(function(e){m(e.target)}))})),$(".js-tooltip").tooltip()}))}(),n}()}));