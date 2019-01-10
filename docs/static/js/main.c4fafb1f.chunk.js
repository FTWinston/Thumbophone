(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/logo.ee7cd8ed.svg"},function(e,t,n){e.exports=n(23)},,,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a,o=n(0),i=n.n(o),s=n(7),r=n.n(s),c=(n(15),n(1)),l=n(2),u=n(4),m=n(3),p=n(5),h=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).keydown=function(e){e.which===n.props.keycode&&(n.setState({active:!0}),n.props.start())},n.keyup=function(e){e.which===n.props.keycode&&(n.setState({active:!1}),n.props.stop())},n.state={active:!1},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.keydown),document.addEventListener("keyup",this.keyup)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.keydown),document.removeEventListener("keyup",this.keyup)}},{key:"render",value:function(){var e=this,t=function(){e.setState({active:!1}),e.props.stop()},n=this.state.active?"player__note player__note--active":"player__note";n+=this.props.isLeft?" player__note--left":" player__note--right";var a={height:"".concat(this.props.height,"vh"),marginTop:"".concat(this.props.topMargin,"vh")};return i.a.createElement("div",{className:n,style:a,onTouchStart:function(){e.setState({active:!0}),e.props.start()},onTouchEnd:t,onTouchCancel:t},this.props.text,i.a.createElement("sub",null,this.props.octave))}}]),t}(o.PureComponent),f=(n(17),function(){function e(){Object(c.a)(this,e),this.audioCtx=void 0,this.gain=void 0,this.oscillators={},this.audioCtx=new AudioContext,this.gain=this.audioCtx.createGain(),this.gain.connect(this.audioCtx.destination)}return Object(l.a)(e,[{key:"setVolume",value:function(e){this.gain.gain.setValueAtTime(e,this.audioCtx.currentTime)}},{key:"start",value:function(e){if(void 0===this.oscillators[e]){var t=this.audioCtx.createOscillator();t.type="sine",t.frequency.setValueAtTime(e,this.audioCtx.currentTime),t.start();var n=this.audioCtx.createGain();t.connect(n),n.connect(this.gain),this.oscillators[e]={oscillator:t,gain:n}}}},{key:"stop",value:function(e){var t=this,n=this.oscillators[e];if(void 0!==n){delete this.oscillators[e];var a=n.gain.gain;a.setValueAtTime(a.value,this.audioCtx.currentTime),n.gain.gain.exponentialRampToValueAtTime(1e-4,this.audioCtx.currentTime+.03),setTimeout(function(){n.oscillator.stop(),n.gain.disconnect(t.gain)},25)}}},{key:"stopAll",value:function(){for(var e in this.oscillators){var t=this.oscillators[e];t.oscillator.stop(),t.gain.disconnect(this.gain)}}}]),e}()),v=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).audio=new f,n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.audio.setVolume(this.props.volume),document.fullscreenElement||document.documentElement.requestFullscreen()}},{key:"componentWillUnmount",value:function(){this.audio.stopAll(),document.exitFullscreen&&document.fullscreenElement&&document.exitFullscreen()}},{key:"componentDidUpdate",value:function(e,t){this.props.volume!==e.volume&&this.audio.setVolume(this.props.volume)}},{key:"render",value:function(){var e=this,t=this.props.notes.map(function(t,n){var a=n<4,o=3===n?e.props.leftButtonOffset:7===n?e.props.rightButtonOffset:e.props.buttonSpacing;return i.a.createElement(h,{key:n,keycode:n+49,text:t.name,octave:t.octave,start:function(){return e.audio.start(t.frequency)},stop:function(){return e.audio.stop(t.frequency)},height:e.props.buttonLength,topMargin:o,isLeft:a})}),n=this.props.flip?"player player--flipped":"player";return i.a.createElement("div",{className:n},i.a.createElement("div",{className:"player__notes"},t),i.a.createElement("a",{className:"player__back",href:"#",onClick:function(t){t.preventDefault(),e.props.exit()}},"go back"))}}]),t}(o.Component),d={name:"D",frequency:293.66,octave:4},y={name:"E",frequency:329.63,octave:4},g={name:"F",frequency:349.23,octave:4},b={name:"G\u266d",frequency:369.99,octave:4},E={name:"G",frequency:392,octave:4},k={name:"A",frequency:440,octave:4},_={name:"B",frequency:493.88,octave:4},O={name:"C",frequency:523.25,octave:5},S={name:"D\u266d",frequency:554.37,octave:5},w={name:"D",frequency:587.33,octave:5},j={name:"E\u266d",frequency:622.25,octave:5},C={name:"E",frequency:659.25,octave:5},N={name:"G\u266d",frequency:739.99,octave:5},x={name:"A\u266d",frequency:830.61,octave:5},q=[{name:"C Major",notes:[{name:"C",frequency:261.63,octave:4},d,y,g,E,k,_,O]},{name:"D Major",notes:[d,y,b,E,k,_,S,w]},{name:"E Major",notes:[y,b,{name:"A\u266d",frequency:415.3,octave:4},k,_,S,j,C]},{name:"F Major",notes:[g,E,k,{name:"B\u266d",frequency:466.16,octave:4},O,w,C,{name:"F",frequency:698.46,octave:5}]},{name:"G Major",notes:[E,k,_,O,w,C,N,{name:"G",frequency:783.99,octave:5}]},{name:"A Major",notes:[k,_,S,w,C,N,x,{name:"A",frequency:880,octave:5}]},{name:"B Major",notes:[_,S,j,C,N,x,{name:"B\u266d",frequency:932.33,octave:5},{name:"B",frequency:987.77,octave:5}]}],T=n(8),H=n.n(T),F=(n(19),function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=q.indexOf(this.props.selectedScale),n=q.map(function(e,t){return i.a.createElement("option",{key:t,value:t.toString()},e.name)});return i.a.createElement("div",{className:"site"},i.a.createElement("header",{className:"site__header"},i.a.createElement("img",{src:H.a,className:"site__logo",alt:"logo"}),i.a.createElement("p",null,"Use your phone as a musical instrument!")),i.a.createElement("div",{className:"site__links"},i.a.createElement("a",{className:"site__link",href:"#",onClick:function(t){t.preventDefault(),e.props.help()}},"Instructions"),i.a.createElement("a",{className:"site__link site__link--primary",href:"#",onClick:function(t){t.preventDefault(),e.props.play()}},"Play now")),i.a.createElement("div",{className:"site__options"},i.a.createElement("label",{className:"site__option"},i.a.createElement("span",{className:"site__label"},"Key"),i.a.createElement("select",{className:"site__value",value:t.toString(),onChange:function(t){return e.props.selectScale(q[t.target.selectedIndex])}},n)),i.a.createElement("label",{className:"site__option"},i.a.createElement("span",{className:"site__label"},"Volume"),i.a.createElement("input",{className:"site__value",type:"range",min:"0",max:"1",step:"0.025",value:this.props.volume,onChange:function(t){return e.props.setVolume(parseFloat(t.target.value))}})),i.a.createElement("label",{className:"site__option"},i.a.createElement("span",{className:"site__label"},"Flip screen"),i.a.createElement("input",{className:"site__value",type:"checkbox",checked:this.props.flip,onChange:function(t){return e.props.setFlip(t.target.checked)}}))),i.a.createElement("div",{className:"site__links"},i.a.createElement("a",{className:"site__link",href:"#",onClick:function(t){t.preventDefault(),e.props.calibrate()}},"Calibrate to fit")))}}]),t}(o.Component)),I=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.flip?"top":"bottom";return i.a.createElement("div",{className:"site site--help"},i.a.createElement("header",{className:"site__header"},i.a.createElement("p",null,"How to play")),i.a.createElement("p",null,"To play your phone properly, follow these instructions after you click ",i.a.createElement("em",null,"play"),"...",i.a.createElement("ol",{className:"site__help"},i.a.createElement("li",null,"Hold your phone with the screen facing upwards."),i.a.createElement("li",null,"Press the ",t," edge of the phone against your lips."),i.a.createElement("li",null,"Rest the phone on your thumbs, with the fingers of each hand along the edges of the phone, so they can all touch the screen."),i.a.createElement("li",null,"Push keys and make music!")),"If the buttons don't fit your hands easily, try calibrating."),i.a.createElement("div",{className:"site__links"},i.a.createElement("a",{className:"site__link",href:"#",onClick:function(t){t.preventDefault(),e.props.back()}},"Go back")))}}]),t}(o.Component),A=(n(21),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).timer=void 0,n.state={numTouches:0},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){document.fullscreenElement||document.documentElement.requestFullscreen()}},{key:"componentWillUnmount",value:function(){document.exitFullscreen&&document.fullscreenElement&&document.exitFullscreen()}},{key:"render",value:function(){var e=this,t="calibration calibration--num".concat(this.state.numTouches),n=this.state.numTouches>0?i.a.createElement("p",null,this.state.numTouches):i.a.createElement("p",null,"Hold the phone in position, and touch the screen with all 8 fingers in the positions that are most comfortable.",i.a.createElement("br",null),i.a.createElement("br",null),"Keep all 8 fingers touching the screen until the phone vibrates. Buttons will be placed where you put your fingers."),a=function(t){if(e.setState({numTouches:t.touches.length}),8===t.touches.length){for(var n=[],a=0;a<t.touches.length;a++)n.push({x:t.touches[a].pageX,y:t.touches[a].pageY});setTimeout(function(){return e.checkCalibration(n)},3e3)}else void 0!==e.timer&&(clearTimeout(e.timer),e.timer=void 0)};return i.a.createElement("div",{className:t,onTouchStart:a,onTouchEnd:a,onTouchCancel:a},n)}},{key:"checkCalibration",value:function(e){if(8===this.state.numTouches){e.sort(function(e,t){return e.x>t.x?1:t.x>e.x?-1:0});var t=e.slice(0,4).map(function(e){return 100*e.y/window.innerHeight}).sort(),n=e.slice(4).map(function(e){return 100*e.y/window.innerHeight}).sort(),a=[window.innerHeight,(t[3]+t[2])/2,(t[2]+t[1])/2,(t[1]+t[0])/2,0],o=[window.innerHeight,(n[3]+n[2])/2,(n[2]+n[1])/2,(n[1]+n[0])/2,0],i=[a[1]-a[0],a[2]-a[1],a[3]-a[2],a[4]-a[3],o[1]-o[0],o[2]-o[1],o[3]-o[2],o[4]-o[3]];window.navigator.vibrate(100),this.props.finish(i,[0,0,0,0,0,0,0,0])}}}]),t}(o.Component));!function(e){e[e.Home=0]="Home",e[e.Help=1]="Help",e[e.Play=2]="Play",e[e.Calibration=3]="Calibration"}(a||(a={}));var D="scale",B="volume",M="flip",V="buttonOffsets",P="buttonSizes",G=function(e){function t(e){var n;Object(c.a)(this,t),n=Object(u.a)(this,Object(m.a)(t).call(this,e));var o=q[0],i=sessionStorage.getItem(D);if(null!==i){var s=q.filter(function(e){return e.name===i});s.length>0&&(o=s[0])}var r=.1,l=sessionStorage.getItem(B);if(null!==l){var p=parseFloat(l);p>=0&&p<=1&&(r=p)}var h=!1;"1"===sessionStorage.getItem(M)&&(h=!0);var f=[20,20,20,20,20,20,20,20],v=sessionStorage.getItem(P);null!==v&&(f=JSON.parse(v));var d=[3,3,3,3,6,3,3,3],y=sessionStorage.getItem(V);return null!==y&&(d=JSON.parse(y)),n.state={display:a.Home,scale:o,volume:r,flip:h,buttonSizes:f,buttonOffsets:d},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;if(this.state.display===a.Help){return i.a.createElement(I,{back:function(){return e.setState({display:a.Home})},flip:this.state.flip})}if(this.state.display===a.Play){return i.a.createElement(v,{exit:function(){return e.setState({display:a.Home})},notes:this.state.scale.notes,volume:this.state.volume,flip:this.state.flip,buttonLength:20,buttonSpacing:3,leftButtonOffset:3,rightButtonOffset:6})}if(this.state.display===a.Calibration){return i.a.createElement(A,{finish:function(t,n){sessionStorage.setItem(P,JSON.stringify(t)),sessionStorage.setItem(V,JSON.stringify(n)),e.setState({buttonSizes:t,buttonOffsets:n,display:a.Play})}})}return i.a.createElement(F,{help:function(){return e.setState({display:a.Help})},play:function(){return e.setState({display:a.Play})},calibrate:function(){return e.setState({display:a.Calibration})},selectedScale:this.state.scale,selectScale:function(t){sessionStorage.setItem(D,t.name),e.setState({scale:t})},volume:this.state.volume,setVolume:function(t){sessionStorage.setItem(B,t.toString()),e.setState({volume:t})},flip:this.state.flip,setFlip:function(t){sessionStorage.setItem(M,t?"1":"0"),e.setState({flip:t})}})}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,2,1]]]);
//# sourceMappingURL=main.c4fafb1f.chunk.js.map