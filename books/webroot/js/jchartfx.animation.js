(function(){var c=window.cfx,b=window.sfx;c.AnimationDelay={Auto:0,None:4096,PerPoint:1,PerSeries:2,PerPointInverse:17,PerPointRandom:33,PerPointSeries:3};c.AnimationDirection={Auto:0,Upward:1,Downward:2,FromCenter:3};c.AnimationTiming={Auto:0,Linear:1,EaseIn:2,EaseOut:3,EaseInEaseOut:4,EaseOutBounce:5};c.BarAnimation={Value:0,Drop:1};c.BubbleAnimation={Position:0,Size:1,PositionAndSize:2};c.LineAnimation={DrawX:0,YData:1,YProgress:2};c.PieAnimation={Radial:1,Angle:2,RadialAndAngle:3,AngleFromTop:258,
RadialAngleFromTop:259};var i=function r(){r._ic();this.d=this.e=0;this.a=!1;this.c=0};c.AnimationSettings=i;i.prototype={_0AnimationSettings:function(){this.b=1.2;return this},getDelay:function(){return this.e},setDelay:function(b){this.e=b},getDirection:function(){return this.d},setDirection:function(b){this.d=b},getDuration:function(){return this.b},setDuration:function(b){this.b=b},getEnabled:function(){return this.a},setEnabled:function(b){this.a=b},getTiming:function(){return this.c},setTiming:function(b){this.c=
b}};i._dt("CWA",b.Sy,0);var l=function s(){s._ic();this.n=!1;this.m=this.e=this.c=null;this.f=this.l=!1;this.j=this.k=0;this.i=null;this.g=this.h=!1};c.AnimationAttributes=l;l.prototype={_0AnimationAttributes:function(b){this.b=b;this.d=(new i)._0AnimationSettings();this.a=(new i)._0AnimationSettings();this.a.b=0.4;return this},r:function(){null==this.c&&(this.c=(new h)._0co(this,this.m));return this.c},getDataChange:function(){return this.a},setDataChange:function(b){this.a=b},getLoad:function(){return this.d},
getShowSpeed:function(){return this.g},setShowSpeed:function(b){this.g=b},o:function(){var b=this.b.r;this.j=b.iaM();this.k=b.iaH();this.i=b.iaO().j(this.j,this.k,!1,!0);this.e=Array(2*this.b.getAxesY().Se());for(var b=0,k=this.b.getAxesY().Sb();!0==k.SI();){var a=k.SK();this.e[b++]=a.z;this.e[b++]=a.E}},q:function(b,k){if(this.n)return!0;this.f=b;this.h&&(this.h=!1,this.f=!0);if(this.f)return this.m=this.d,!this.d.a&&(this.a.a&&null==this.i)&&this.o(),this.d.a&&!this.l;if(k){if(!this.a.a)return!1;
var a=this.b.r,e=!1;if(this.j!=a.iaM()||this.k!=a.iaH())e=!0;else for(var a=0,d=this.b.getAxesY().Sb();!0==d.SI();){var f=d.SK();if(this.e[a++]!=f.z){e=!0;break}if(this.e[a++]!=f.E){e=!0;break}}if(e)return this.o(),!1;this.m=this.a;return!0}return!1},p:function(b,k){this.d.a&&null!=this.c&&!this.c.al(b,k)&&(this.a.a&&this.o(),this.l=!0,this.c=null,this.n=!1)},reset:function(){this.l=!1;this.c=null;this.h=!0;this.b.c(32)}};l._dt("CWA",b.Sy,0);var m=function k(){k._ic();this.d=null;this.e=this.a=this.b=
0;this.i=!1;this.o=this.k=null;this.f=this.g=0;this.n=null;this.c=this.h=0};c.cn=m;m.prototype={_0cn:function(b){this.m=b;return this},getCompactFormula:function(){return this.d.getCompactFormula()},setCompactFormula:function(b){this.d.setCompactFormula(b)},getHasData:function(){return!0},getShared:function(){return this.d.getShared()},setShared:function(b){this.d.setShared(b)},getItem1:function(b){return this.d.getItem1(b)},setItem1:function(b,a){this.d.setItem1(b,a)},getItem:function(b,a){var e=
0;if(null!=this.d){if(e=this.d.getItem(b,a),0!=(this.e&32))return e+=this.k.getItem(b,a)}else e=this.f;if(c.c6.d(e))return e;var d=this;if(0!=this.m.L){if(0==(this.m.L&1<<b))return e;null!=this.o&&0!=b&&(d=this.o[b-1])}var f=this.m.N(b,a,this.c);return d.p(b,a,e,f)},setItem:function(b,a,e){this.d.setItem(b,a,e)},q:function(b){return this.f!=b.f||this.g!=b.g||this.i!=b.i||this.h!=b.h||this.e!=b.e||this.b!=b.b||this.c!=b.c||this.a!=b.a?!1:!0},p:function(c,a,e,d){var f=0,g=0,g=null!=this.n?this.n[c][a]:
this.f;3==this.a&&(f=(this.g+this.f)/2);c=0;this.i&&(c=0<e?this.g:this.f);if(0>=d){if(this.i)return 2==this.a?c:0;switch(this.a){case 1:return g;case 2:return this.g;case 3:return f}}if(0!=(this.e&2))return c=0,2==this.a?(c=this.g-d*this.h,c<e&&(c=e)):1==this.a?(c=g+d*this.h,c>e&&(c=e)):(g=b.a.n(this.g-f,f-this.f),e<f?(c=f-d*g,c<e&&(c=e)):(c=f+d*g,c>e&&(c=e))),c;if(this.i)return 2==this.a?c-d*(c-e):d*e;switch(this.a){case 2:return this.g-d*(this.g-e);case 3:return f+d*(e-f)}return g+d*(e-g)},clear:function(){this.d.clear()},
l:function(b){this.f=b.k;this.g=b.m;this.i=0<this.g&&0>this.f;this.h=this.g-this.f}};m._dt("CWIA",b.Sy,0);var h=function a(){a._ic();this.j=!1;this.D=this.e=this.y=this.g=this.d=this.m=0;this.v=null;this.u=0;this.x=!1;this.ab=0;this.i=null;this.Z=this.aa=this.k=0;this.M=null;this.Y=this.t=0;this.C=null;this.c=this.I=0;this.a=null;this.L=0;this.X=null;this.B=!1;this.K=null;this.p=this.f=0;this.o=null;this.H=!1;this.w=this.W=null;this.G=0;this.V=null;this.F=0};c.co=h;h.prototype={_0co:function(a,e){this.b=
new b.c;this.C=a;this.X=e;this.g=e.b;this.d=e.e;this.p=e.c;this.D=1;this.Y=0.35;return this},aj:function(a){this.B&&(a.h.t=this.Z,a.a.y=this.aa);1<=this.c&&this.R(a.c)},r:function(a,b){switch(b){case 2:return a*a;case 3:return-a*(a-2);case 4:a/=0.5;if(1>a)return 0.5*a*a;a--;return-0.5*(a*(a-2)-1);case 5:return this.ao(a)}return a},ap:function(a){if(1<=this.c)return null!=this.v?(a.P=!1,this.v=b.V.C(a.c,c.ic4),this.v.ic6(1),this.R(a.c),!1):!0;var e=a.h,d=null==this.K,f=0;if(d){this.C.n=!0;this.K=b.ah.L();
this.I=b.a.d(a.o-a.m)+1;var g=!1,f=!this.C.f;if(0==(a.bP&524288)||f)this.a=(new m)._0cn(this),this.a.a=this.X.d,0!=(a.i&64)&&(g=!0);else{var h=a.bx.getSeries();this.i=Array(h.Se());for(var o=null,p=!0,i=null,j=0;j<h.Se();){var n=h.getItem(j).getGalleryAttributes(),n=b.V.C(n,c.icT);null==n&&(null==i&&(i=a.bx.getGalleryAttributes(),i=b.V.C(i,c.icT)),n=i);var l=h.getItem(j).getGallery(),q=(new m)._0cn(this);a.ab&&q.l(e);this.a=this.i[j]=q;this.T(a,n,l,e);null!=o&&p&&(p=this.a.q(o));0!=(n.icW(l)&64)&&
(g=!0);j+=n.icV(l);o=this.a}p&&(this.i=null)}this.V=a.ah;this.W=a.M;if(a.ab){if(this.t=0,h=b.a.o(a.aq,a.ar),o=b.a.o(a.z,a.D),p=b.a.d(a.ar-a.aq),j=b.a.d(a.D-a.z),this.b._i2(h,o,p,j),e.I(a.a)&&(this.b.w=j,this.b.h=p,this.b.x=o,this.b.y=h),g)g=a.b.h,a.j.valueToPixel(1)-g<this.b.x&&this.b.m(g,0),0==(this.e&1)&&this.b.m(0,g+2)}else this.b._cf(a.v);null==this.i&&this.a.l(e);f&&(this.u|=4,this.a.n=this.C.i);null==this.i&&(this.T(a,a.b.j,a.b.p,e),this.U(),this.af(a));a.ab?(this.G=b.a.o(a.aq,a.ar),this.F=
b.a.o(a.z,a.D)):(this.G=a.v.x,this.F=a.v.y);if(0!=(this.e&64))return this.c=1,!0;f=0}else this.H&&this.Q(),f=this.r(this.c,this.p);1>f&&(a.P=!0);this.ab++;null==this.i&&!this.j&&0!=(this.e&1)&&(0!=(this.d&2)?d&&this.ag(a):this.x&&!d&&this.J(a,f));return 0!=(a.r&128)?(a.P=!1,this.v=b.V.C(a.c,c.ic4),this.v.ic6(this.ac()),0==this.c):!0},ai:function(a){if(1<=this.c)if(0!=(this.u&1))this.u&=-2;else return!1;var b=!1;null!=this.i?(b=!0,a.ab||this.ae(a)):b=this.ah(a);return b},ah:function(a){var e=!1;if(this.j){if(a.ah=
this.a,null!=this.a.k&&(a.ay=this.a.k),null!=this.w)a.M=this.w}else if(0!=(this.e&1))if(0!=(this.d&2))e=!0;else{if(0==this.c&&null==this.i||!this.x){var d=this.r(this.c,this.D);this.J(a,d)}}else if(this.B){var d=this.r(this.c,this.p),c=a.h;this.Z=c.t;this.aa=a.a.y;d*=b.a.d(a.D-a.z);d=b.a.n(d,1);c.br(d,!1);2==this.a.a?a.a.y=a.a.L+d:3==this.a.a&&(a.a.y=b.u.z(a.a.y+a.a.L+d,2))}return e},ao:function(a){if(a<h.l)return h.h*a*a;if(a<h.n)return a-=h.A,h.h*a*a+h.P;if(a<h.q)return a-=h.z,h.h*a*a+h.O;a-=h.E;
return h.h*a*a+h.ad},ag:function(a){a=b.a.d(a.q-a.p)+1;this.m=3==(this.d&3)?a*this.I:0!=(this.d&2)?a:this.I;this.an(this.m);if(0!=(this.d&32)){this.o=Array(this.m);for(a=0;a<this.m;a++)this.o[a]=a;for(var e=(new b.U)._0U(),a=0;a<this.m;a++){var d=e.c(this.m-a),c=this.o[a];this.o[a]=this.o[d];this.o[d]=c}}},af:function(a){this.H=this.B=this.x=!1;if(0!=(a.r&128))this.H=this.j=!1;else if(this.j=(4096!=this.d||a.g(256)||0!=(this.e&2))&&0==(this.e&1)&&a.ab,0!=(this.e&8)&&(this.j=!0),0!=(this.e&16)&&(this.j=
!1),0!=(this.u&4)&&(this.j=!0),this.B=a.ab&&!this.j,0!=(this.e&1)&&(this.B=!1,4096==this.d&&null==this.i&&0==(a.r&64)&&(this.x=!0)),(this.j||!a.ab)&&4096!=this.d&&this.ag(a),this.j)this.a.d=a.ah,0!=(this.e&4)&&a.M.getHasData()&&(this.w=(new m)._0cn(this),this.w.d=a.M,this.w.l(a.j),this.w.a=this.a.a,0==(this.u&2)&&(this.u|=2,this.b.m(5,0)))},an:function(a){var e=a*this.Y,d=0;1.3>e?(e=2.5,this.f=3.5*(this.g/5)):this.f=2*(this.g/5);this.k=0;for(var c=0.5,g=a-1,h=0;8>h;h++){this.f=b.a.n(this.f,c);d=g*
this.k+this.f;if(0.2>b.a.d(d-this.g))break;this.k=this.f/e;if(this.k>=0.8*this.f)c*=1.3;else{d=g*this.k+this.f;if(0.2>b.a.d(d-this.g))break;d>this.g&&(d=(this.g-this.f)/a,0.2>d&&(e*=1.5),this.k=(this.k+d)/2);this.f=this.g-g*this.k}}},ae:function(a){0!=(this.e&1)&&a.c.sic9(null);this.j&&(a.ah=this.V,a.M=this.W);null!=this.i&&(this.a=this.i[a.d],this.U(),this.af(a),this.ah(a));if(0!=(this.e&1)){var b=this.N(a.d,0,this.p);a.c.sic9(null);this.J(a,b)}},am:function(){0==this.a.b&&(this.a.b=1);0==this.a.c&&
(this.a.c=4);0==this.a.a&&(this.a.a=1)},ac:function(){return this.r(this.c,this.p)},N:function(a,b,d){if(4096==this.d)return this.r(this.c,d);var c=0,c=3==(this.d&3)?a*this.I+b:0!=(this.d&1)?b:a;0!=(this.d&16)&&(c=this.m-c-1);null!=this.o&&(c=this.o[c]);a=c*this.k;if(this.y<=a)return 0;b=a+this.f;if(this.y>=b)return 1;a=(this.y-a)/(b-a);return a=this.r(a,d)},al:function(a){if(1<=this.c)return!1;var b=0;this.H||(this.Q(),b=this.r(this.c,this.p));var c=this.b._nc();if(null!=this.v)1<=this.c?(this.u|=
1,c._cf(this.b)):this.v.ic5(b,c);else if(this.x&&1>b){var f=0,b=b*this.b.w;if(4096==this.d){var g=b-this.t,f=this.b.x+this.t;this.t=b;b=g+1}else f=this.b.x;c._i2(f,this.b.y,b,this.b.h)}1<=this.c&&c._cf(a.SN());a.Sab(c);return!0},U:function(){this.d=this.a.b;this.p=this.a.c;this.e=this.a.e},J:function(a,c){var d=0,f=c*this.b.w;if(this.x){if(0!=c)return;var g=f-this.t,d=this.b.x+this.t;this.t=f;f=g+1}else d=this.b.x;d=(new b.c)._02c(d,this.b.y,f,this.b.h);d=(new b.aq)._0aq(d);a.c.sic9(d);null!=this.M&&
this.M._d();this.M=d},ak:function(){this.a.b=this.d;this.a.c=this.p;this.a.e=0},T:function(a,b,c,f){this.ak();var g=null;0!=(b.icW(c)&262144)&&a.ay.getHasData()&&(g=(new m)._0cn(this),g.l(f),g.d=a.ay,this.a.k=g);b.icU(c,11,this,a);null!=g&&0==g.a&&(g.a=this.a.a);this.am()},R:function(a){if(this.C.g){a.sic_(null);var c=(new b.at)._0at(),d=(new b.o)._0o("Helvetica",8),f=b.D._k(this.ab/this.g,"f2",null),g=(new b.ar)._0ar(b.m.i());a.idQ(g,this.G,this.F,32,14);g._d();a.idD(f,d,b.aj.G(),this.G,this.F,c);
d._d();c._d()}},Q:function(){this.y=this.K.J()/1E3;this.c=this.y/this.g;this.c=b.a.o(this.c,1);1!=this.D&&(this.c=this.r(this.c,this.D),this.y=this.g*this.c)}};h._dt("CWIA",b.Sy,0);c.Chart.prototype.getAnimations=function(){null==this.R&&(this.R=(new c.AnimationAttributes)._0AnimationAttributes(this));return this.R};"undefined"!=typeof c.VectorGalleryConnected&&(c.VectorGalleryConnected.prototype.getAnimationStyle=function(){return this.C});"undefined"!=typeof c.VectorGalleryConnected&&(c.VectorGalleryConnected.prototype.setAnimationStyle=
function(a){this.C=a});"undefined"!=typeof c.VectorBar&&(c.VectorBar.prototype.getAnimationStyle=function(){return this.o});"undefined"!=typeof c.VectorBar&&(c.VectorBar.prototype.setAnimationStyle=function(a){this.o=a});"undefined"!=typeof c.VectorBubble&&(c.VectorBubble.prototype.getAnimationStyle=function(){return this.o});"undefined"!=typeof c.VectorBubble&&(c.VectorBubble.prototype.setAnimationStyle=function(a){this.o=a});"undefined"!=typeof c.VectorPie&&(c.VectorPie.prototype.getAnimationStyle=
function(){return this.p});"undefined"!=typeof c.VectorPie&&(c.VectorPie.prototype.setAnimationStyle=function(a){this.p=a})})();