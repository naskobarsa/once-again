function base64_decode(n){var i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",r,f,s,h,c,e,o,u,t=0,v=0,l="",a=[];if(!n)return n;n+="";do h=i.indexOf(n.charAt(t++)),c=i.indexOf(n.charAt(t++)),e=i.indexOf(n.charAt(t++)),o=i.indexOf(n.charAt(t++)),u=h<<18|c<<12|e<<6|o,r=u>>16&255,f=u>>8&255,s=u&255,a[v++]=e==64?String.fromCharCode(r):o==64?String.fromCharCode(r,f):String.fromCharCode(r,f,s);while(t<n.length);return l=a.join(""),this.utf8_decode(l)}function base64_encode(n){var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",f,e,o,s,h,c,l,i,u=0,t="";do f=n.charCodeAt(u++),e=n.charCodeAt(u++),o=n.charCodeAt(u++),i=f<<16|e<<8|o,s=i>>18&63,h=i>>12&63,c=i>>6&63,l=i&63,t+=r.charAt(s)+r.charAt(h)+r.charAt(c)+r.charAt(l);while(u<n.length);switch(n.length%3){case 1:t=t.slice(0,-2)+"==";break;case 2:t=t.slice(0,-1)+"="}return t}function htmlspecialchars(n,t,i,r){var e=0,u=0,o=!1,f;if((typeof t=="undefined"||t===null)&&(t=2),n=n.toString(),r!==!1&&(n=n.replace(/&/g,"&amp;")),n=n.replace(/</g,"&lt;").replace(/>/g,"&gt;"),f={ENT_NOQUOTES:0,ENT_HTML_QUOTE_SINGLE:1,ENT_HTML_QUOTE_DOUBLE:2,ENT_COMPAT:2,ENT_QUOTES:3,ENT_IGNORE:4},t===0&&(o=!0),typeof t!="number"){for(t=[].concat(t),u=0;u<t.length;u++)f[t[u]]===0?o=!0:f[t[u]]&&(e=e|f[t[u]]);t=e}return t&f.ENT_HTML_QUOTE_SINGLE&&(n=n.replace(/'/g,"&#039;")),o||(n=n.replace(/"/g,"&quot;")),n}function strip_tags(n,t){var f="",e=!1,o=[],s=[],u="",i=0,h="",r="",c=function(n,t,i){return i.split(n).join(t)};t&&(s=t.match(/([a-zA-Z0-9]+)/gi));n+="";o=n.match(/(<\/?[\S][^>]*>)/gi);for(f in o)if(!isNaN(f)){r=o[f].toString();e=!1;for(h in s)if(u=s[h],i=-1,i!=0&&(i=r.toLowerCase().indexOf("<"+u+">")),i!=0&&(i=r.toLowerCase().indexOf("<"+u+" ")),i!=0&&(i=r.toLowerCase().indexOf("<\/"+u)),i==0){e=!0;break}e||(n=c(r,"",n))}return n}function nl2br(n,t){var i=t||typeof t=="undefined"?"<br />":"<br>";return(n+"").replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g,"$1"+i+"$2")}var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(n){var f="",e,t,i,s,h,o,r,u=0;for(n=Base64._utf8_encode(n);u<n.length;)e=n.charCodeAt(u++),t=n.charCodeAt(u++),i=n.charCodeAt(u++),s=e>>2,h=(e&3)<<4|t>>4,o=(t&15)<<2|i>>6,r=i&63,isNaN(t)?o=r=64:isNaN(i)&&(r=64),f=f+this._keyStr.charAt(s)+this._keyStr.charAt(h)+this._keyStr.charAt(o)+this._keyStr.charAt(r);return f},decode:function(n){var t="",e,o,s,h,u,r,f,i=0;for(n=n.replace(/[^A-Za-z0-9\+\/\=]/g,"");i<n.length;)h=this._keyStr.indexOf(n.charAt(i++)),u=this._keyStr.indexOf(n.charAt(i++)),r=this._keyStr.indexOf(n.charAt(i++)),f=this._keyStr.indexOf(n.charAt(i++)),e=h<<2|u>>4,o=(u&15)<<4|r>>2,s=(r&3)<<6|f,t=t+String.fromCharCode(e),r!=64&&(t=t+String.fromCharCode(o)),f!=64&&(t=t+String.fromCharCode(s));return Base64._utf8_decode(t)},_utf8_encode:function(n){var i,r,t;for(n=n.replace(/\r\n/g,"\n"),i="",r=0;r<n.length;r++)t=n.charCodeAt(r),t<128?i+=String.fromCharCode(t):t>127&&t<2048?(i+=String.fromCharCode(t>>6|192),i+=String.fromCharCode(t&63|128)):(i+=String.fromCharCode(t>>12|224),i+=String.fromCharCode(t>>6&63|128),i+=String.fromCharCode(t&63|128));return i},_utf8_decode:function(n){for(var r="",t=0,i=c1=c2=0;t<n.length;)i=n.charCodeAt(t),i<128?(r+=String.fromCharCode(i),t++):i>191&&i<224?(c2=n.charCodeAt(t+1),r+=String.fromCharCode((i&31)<<6|c2&63),t+=2):(c2=n.charCodeAt(t+1),c3=n.charCodeAt(t+2),r+=String.fromCharCode((i&15)<<12|(c2&63)<<6|c3&63),t+=3);return r}};$(function(){var n={"aHJlZjovYXBwbHksY2xhc3M6cHJpbWFyeS1idG4gYmFzZS1idG4gYm90dG9tLWJ1ZmZlcg==":"PGEgaHJlZj0iL2FwcGx5IiBjbGFzcz0icHJpbWFyeS1idG4gYmFzZS1idG4gYm90dG9tLWJ1ZmZlciIgdGl0bGU9ItCa0LDQvdC00LjQtNCw0YLRgdGC0LLQsNC5Ij7QmtCw0L3QtNC40LTQsNGC0YHRgtCy0LDQuTwvYT4K",aHJlZjovYXBwbHksY2xhc3M6cHJpbWFyeS1idG4gYmFzZS1idG4sdGFyZ2V0OmJsYW5r:"PGEgaHJlZj0iL2FwcGx5IiBjbGFzcz0icHJpbWFyeS1idG4gYmFzZS1idG4iIHRhcmdldD0iX2JsYW5rIiB0aXRsZT0i0JrQsNC90LTQuNC00LDRgtGB0YLQstCw0LkiPtCa0LDQvdC00LjQtNCw0YLRgdGC0LLQsNC5PC9hPgo=","aHJlZjovYXBwbHksY2xhc3M6cHJpbWFyeS1idG4gYmFzZS1idG4gbG9uZy1idG4gY2VsbA==":"PGEgY2xhc3M9InByaW1hcnktYnRuIGJhc2UtYnRuIGxvbmctYnRuIGNlbGwiIGhyZWY9Ii9hcHBseSIgdGl0bGU9ItCa0LDQvdC00LjQtNCw0YLRgdGC0LLQsNC5Ij7QmtCw0L3QtNC40LTQsNGC0YHRgtCy0LDQuTwvYT4K","aHJlZjovYXBwbHksY2xhc3M6YXBwbHktYnRuIHByaW1hcnktYnRuIGJhc2UtYnRuLHRhcmdldDpibGFuaw==":"PGEgaHJlZj0iL2FwcGx5IiBjbGFzcz0iYXBwbHktYnRuIHByaW1hcnktYnRuIGJhc2UtYnRuIiB0aXRsZT0i0JrQsNC90LTQuNC00LDRgtGB0YLQstCw0LkiIHRhcmdldD0iX2JsYW5rIj7QmtCw0L3QtNC40LTQsNGC0YHRgtCy0LDQuTwvYT4K","aHJlZjovYXBwbHksY2xhc3M6cHJpbWFyeS1idG4gYmFzZS1idG4gYm90dG9tLWJ1ZmZlciBhcHBseS1idG4tY29uc2lzdGVudA==":"PGEgaHJlZj0iL2FwcGx5IiBjbGFzcz0icHJpbWFyeS1idG4gYmFzZS1idG4gYm90dG9tLWJ1ZmZlciBhcHBseS1idG4tY29uc2lzdGVudCIgdGl0bGU9ItCa0LDQvdC00LjQtNCw0YLRgdGC0LLQsNC5Ij7QmtCw0L3QtNC40LTQsNGC0YHRgtCy0LDQuTwvYT4K","aHJlZjovYXBwbHksY2xhc3M6cHJpbWFyeS1idG4gYmFzZS1idG4gY29sLW1kLTYgY29sLXNtLTYgY29sLW1kLW9mZnNldC0wIGNvbC1zbS1vZmZzZXQtMyBjb2wteHMtMTI=":"PGEgaHJlZj0iL2FwcGx5IiBjbGFzcz0icHJpbWFyeS1idG4gYmFzZS1idG4gY29sLW1kLTYgY29sLXNtLTYgY29sLW1kLW9mZnNldC0wIGNvbC1zbS1vZmZzZXQtMyBjb2wteHMtMTIiIHRpdGxlPSLQmtCw0L3QtNC40LTQsNGC0YHRgtCy0LDQuSI+0JrQsNC90LTQuNC00LDRgtGB0YLQstCw0Lk8L2E+Cg==",aHJlZjovYXBwbHksY2xhc3M6cHJpbWFyeS1idG4gYmFzZS1idG4gY29sLW1kLTQgY29sLW1kLW9mZnNldC00IGNvbC1zbS00IGNvbC1zbS1vZmZzZXQtNCBjb2wteHMtMTIgYXBwbHktYnRu:"PGEgaHJlZj0iL2FwcGx5IiBjbGFzcz0icHJpbWFyeS1idG4gYmFzZS1idG4gY29sLW1kLTQgY29sLW1kLW9mZnNldC00IGNvbC1zbS00IGNvbC1zbS1vZmZzZXQtNCBjb2wteHMtMTIgYXBwbHktYnRuIiB0aXRsZT0i0JrQsNC90LTQuNC00LDRgtGB0YLQstCw0LkiPtCa0LDQvdC00LjQtNCw0YLRgdGC0LLQsNC5PC9hPgo=","aHJlZjovYXBwbHksY2xhc3M6cHJpbWFyeS1idG4gYmFzZS1idG4=":"PGEgaHJlZj0iL2FwcGx5IiBjbGFzcz0icHJpbWFyeS1idG4gYmFzZS1idG4iIHRpdGxlPSLQmtCw0L3QtNC40LTQsNGC0YHRgtCy0LDQuSI+0JrQsNC90LTQuNC00LDRgtGB0YLQstCw0Lk8L2E+Cg==",aHJlZjpodHRwOi8vd3d3LnhzLXNvZnR3YXJlLmNvbS8sdGFyZ2V0OmJsYW5r:"PGEgdGFyZ2V0PSJfYmxhbmsiIGhyZWY9Imh0dHA6Ly93d3cueHMtc29mdHdhcmUuY29tLyI+WFMgU29mdHdhcmU8L2E+",aHJlZjpodHRwOi8vc21hcnRpdC5iZy8sdGFyZ2V0OmJsYW5r:"PGEgdGFyZ2V0PSJfYmxhbmsiIGhyZWY9Imh0dHA6Ly9zbWFydGl0LmJnLyI+U21hcnRJVDwvYT4=","aHJlZjpodHRwOi8vd3d3LnNvZnR3YXJlZ3JvdXAtYmcuY29tLyx0YXJnZXQ6Ymxhbms=":"PGEgdGFyZ2V0PSJfYmxhbmsiIGhyZWY9Imh0dHA6Ly93d3cuc29mdHdhcmVncm91cC1iZy5jb20vIj5Tb2Z0d2FyZSBHcm91cDwvYT4=",aHJlZjpodHRwOi8vd3d3LnN1cGVyaG9zdGluZy5iZy8sdGFyZ2V0OmJsYW5r:"PGEgdGFyZ2V0PSJfYmxhbmsiIGhyZWY9Imh0dHA6Ly93d3cuc3VwZXJob3N0aW5nLmJnLyI+U3VwZXJIb3N0aW5nLkJHPC9hPg==","aHJlZjpodHRwOi8vd3d3LmluZGVhdnIuY29tLyx0YXJnZXQ6Ymxhbms=":"PGEgdGFyZ2V0PSJfYmxhbmsiIGhyZWY9Imh0dHA6Ly93d3cuaW5kZWF2ci5jb20vIj5JbmRlYXZyPC9hPg==","aHJlZjpodHRwOi8vd3d3LmluZnJhZ2lzdGljcy5jb20vLHRhcmdldDpibGFuaw==":"PGEgdGFyZ2V0PSJfYmxhbmsiIGhyZWY9Imh0dHA6Ly93d3cuaW5mcmFnaXN0aWNzLmNvbS8iPkluZnJhZ2lzdGljczwvYT4=",aHJlZjpodHRwOi8vbmV0cGVhay5iZy8sdGFyZ2V0OmJsYW5r:"PGEgdGFyZ2V0PSJfYmxhbmsiIGhyZWY9Imh0dHA6Ly9uZXRwZWFrLmJnLyI+TmV0cGVhazwvYT4=","aHJlZjpodHRwczovL3d3dy5ocGUuY29tLyx0YXJnZXQ6Ymxhbms=":"PGEgdGFyZ2V0PSJfYmxhbmsiIGhyZWY9Imh0dHBzOi8vd3d3LmhwZS5jb20vIj5IZXdsZXR0IFBhY2thcmQgRW50ZXJwcmlzZTwvYT4=","aHJlZjovbG9naW4sY2xhc3M6cHJpbWFyeS1idG4gYmFzZS1idG4=":"PGEgaHJlZj0iL2xvZ2luIiBjbGFzcz0icHJpbWFyeS1idG4gYmFzZS1idG4iPtCS0YXQvtC0PC9hPg==",aHJlZjovYXBwbHksY2xhc3M6cHJpbWFyeS1idG4gYmFzZS1idG4gYXBwbHktYnRuLXdpdGgtbWFyZ2lu:"PGEgY2xhc3M9InByaW1hcnktYnRuIGJhc2UtYnRuIGFwcGx5LWJ0bi13aXRoLW1hcmdpbiIgaHJlZj0iL2FwcGx5IiB0aXRsZT0i0JrQsNC90LTQuNC00LDRgtGB0YLQstCw0LkiPtCa0LDQvdC00LjQtNCw0YLRgdGC0LLQsNC5PC9hPg==","aHJlZjovYXBwbHksY2xhc3M6cHJpbWFyeS1idG4gYmFzZS1idG4gYXBwbHktYnRuLWJpZ2dlcg==":"PGEgY2xhc3M9InByaW1hcnktYnRuIGJhc2UtYnRuIGFwcGx5LWJ0bi1iaWdnZXIiIGhyZWY9Ii9hcHBseSIgdGl0bGU9ItCa0LDQvdC00LjQtNCw0YLRgdGC0LLQsNC5Ij7QmtCw0L3QtNC40LTQsNGC0YHRgtCy0LDQuTwvYT4=","aHJlZjovYXBwbHk=":"PGEgaHJlZj0iL2FwcGx5IiB0aXRsZT0i0JrQsNC90LTQuNC00LDRgtGB0YLQstCw0LkiPtCa0LDQvdC00LjQtNCw0YLRgdGC0LLQsNC5PC9hPg=="};$("[hashstring]").each(function(){var r=$(this).attr("hashstring"),t=n[r],i;typeof t!="undefined"&&t!==null&&(i=Base64.decode(t),$(this).replaceWith(i))});$(document).trigger("renderpage.finish")})