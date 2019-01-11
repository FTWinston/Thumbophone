(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a,o=n(0),s=n.n(o),c=n(7),r=n.n(c),i=(n(15),n(1)),m=n(2),l=n(4),u=n(3),v=n(5);!function(e){e[e.Note=0]="Note",e[e.HighlightNote=1]="HighlightNote",e[e.OctaveDown=2]="OctaveDown",e[e.OctaveUp=3]="OctaveUp"}(a||(a={}));var p,f=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).keydown=function(e){e.which===n.props.keycode&&(e.preventDefault(),n.setState({active:!0}),n.props.start())},n.keyup=function(e){e.which===n.props.keycode&&(e.preventDefault(),n.setState({active:!1}),n.props.stop())},n.state={active:!1},n}return Object(v.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.keydown),document.addEventListener("keyup",this.keyup)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.keydown),document.removeEventListener("keyup",this.keyup)}},{key:"render",value:function(){var e=this,t=function(){e.setState({active:!1}),e.props.stop()},n=this.state.active?"player__button player__button--active":"player__button";switch(this.props.type!=a.Note&&this.props.type!=a.HighlightNote||(n+=this.props.isLeft?" player__button--left":" player__button--right",this.props.isTop&&(n+=" player__button--top")),this.props.type){case a.HighlightNote:n+=" player__button--highlight";break;case a.OctaveDown:n+=" player__button--octaveDown";break;case a.OctaveUp:n+=" player__button--octaveUp"}var o=void 0===this.props.octave?void 0:s.a.createElement("sub",null,this.props.octave);return s.a.createElement("div",{className:n,onTouchStart:function(){e.setState({active:!0}),e.props.start()},onTouchEnd:t,onTouchCancel:t},this.props.text,o)}}]),t}(o.PureComponent),y=(n(17),function(){function e(){Object(i.a)(this,e),this.audioCtx=void 0,this.gain=void 0,this.oscillators={},this.audioCtx=new AudioContext,this.gain=this.audioCtx.createGain(),this.gain.connect(this.audioCtx.destination)}return Object(m.a)(e,[{key:"setVolume",value:function(e){this.gain.gain.setValueAtTime(e,this.audioCtx.currentTime)}},{key:"start",value:function(e,t){if(void 0===this.oscillators[e]){var n=this.audioCtx.createOscillator();n.type="sine",n.frequency.setValueAtTime(t,this.audioCtx.currentTime),n.start();var a=this.audioCtx.createGain();n.connect(a),a.connect(this.gain),this.oscillators[e]={oscillator:n,gain:a}}}},{key:"stop",value:function(e){var t=this.oscillators[e];void 0!==t&&(delete this.oscillators[e],this.stopOscillator(t))}},{key:"stopAll",value:function(){for(var e in this.oscillators){var t=this.oscillators[e];this.stopOscillator(t)}this.oscillators={}}},{key:"stopOscillator",value:function(e){var t=this,n=e.gain.gain;n.setValueAtTime(n.value,this.audioCtx.currentTime),e.gain.gain.exponentialRampToValueAtTime(1e-4,this.audioCtx.currentTime+.03),setTimeout(function(){e.oscillator.stop(),e.gain.disconnect(t.gain)},25)}}]),e}()),h=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).audio=new y,n.state={notes:e.mainNotes},n}return Object(v.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.audio.setVolume(this.props.volume),document.fullscreenElement||document.documentElement.requestFullscreen()}},{key:"componentWillUnmount",value:function(){this.audio.stopAll(),document.exitFullscreen&&document.fullscreenElement&&document.exitFullscreen()}},{key:"componentDidUpdate",value:function(e,t){this.props.volume!==e.volume&&this.audio.setVolume(this.props.volume)}},{key:"render",value:function(){var e=this,t=this.state.notes.map(function(t,n){var o=-1===e.props.highlightButtons.indexOf(n)?a.Note:a.HighlightNote;return s.a.createElement(f,{key:n,keycode:9==n?48:n+49,text:t.name,octave:t.octave,start:function(){return e.audio.start(n,t.frequency)},stop:function(){return e.audio.stop(n)},isLeft:n<5,isTop:4===n||9===n,type:o})}),n=function(){e.setState({notes:e.props.mainNotes})};return s.a.createElement("div",{className:"player"},s.a.createElement("div",{className:"player__notes"},t),s.a.createElement("div",{className:"player__middle"},s.a.createElement("div",{className:"player__key"},this.props.keyName),s.a.createElement("a",{className:"player__back",href:"#",onClick:function(t){t.preventDefault(),e.props.exit()}},"go back"),s.a.createElement("div",{className:"player__spacer"}),s.a.createElement(f,{keycode:16,text:"Octave Up",start:function(){e.setState({notes:e.props.highNotes})},stop:n,type:a.OctaveUp}),s.a.createElement(f,{keycode:17,text:"Octave Down",start:function(){e.setState({notes:e.props.lowNotes})},stop:n,type:a.OctaveDown})))}}]),t}(o.Component),d=11,q=[[{name:"C",frequency:16.35,octave:0},{name:"D\u266d",frequency:17.32,octave:0},{name:"D",frequency:18.35,octave:0},{name:"E\u266d",frequency:19.45,octave:0},{name:"E",frequency:20.6,octave:0},{name:"F",frequency:21.83,octave:0},{name:"G\u266d",frequency:23.12,octave:0},{name:"G",frequency:24.5,octave:0},{name:"A\u266d",frequency:25.96,octave:0},{name:"A",frequency:27.5,octave:0},{name:"B\u266d",frequency:29.14,octave:0},{name:"B",frequency:30.87,octave:0}],[{name:"C",frequency:32.7,octave:1},{name:"D\u266d",frequency:34.65,octave:1},{name:"D",frequency:36.71,octave:1},{name:"E\u266d",frequency:38.89,octave:1},{name:"E",frequency:41.2,octave:1},{name:"F",frequency:43.65,octave:1},{name:"G\u266d",frequency:46.25,octave:1},{name:"G",frequency:49,octave:1},{name:"A\u266d",frequency:51.91,octave:1},{name:"A",frequency:55,octave:1},{name:"B\u266d",frequency:58.27,octave:1},{name:"B",frequency:61.74,octave:1}],[{name:"C",frequency:65.41,octave:2},{name:"D\u266d",frequency:69.3,octave:2},{name:"D",frequency:73.42,octave:2},{name:"E\u266d",frequency:77.78,octave:2},{name:"E",frequency:82.41,octave:2},{name:"F",frequency:87.31,octave:2},{name:"G\u266d",frequency:92.5,octave:2},{name:"G",frequency:98,octave:2},{name:"A\u266d",frequency:103.83,octave:2},{name:"A",frequency:110,octave:2},{name:"B\u266d",frequency:116.54,octave:2},{name:"B",frequency:123.47,octave:2}],[{name:"C",frequency:130.81,octave:3},{name:"D\u266d",frequency:138.59,octave:3},{name:"D",frequency:146.83,octave:3},{name:"E\u266d",frequency:155.56,octave:3},{name:"E",frequency:164.81,octave:3},{name:"F",frequency:174.61,octave:3},{name:"G\u266d",frequency:185,octave:3},{name:"G",frequency:196,octave:3},{name:"A\u266d",frequency:207.65,octave:3},{name:"A",frequency:220,octave:3},{name:"B\u266d",frequency:233.08,octave:3},{name:"B",frequency:246.94,octave:3}],[{name:"C",frequency:261.63,octave:4},{name:"D\u266d",frequency:277.18,octave:4},{name:"D",frequency:293.66,octave:4},{name:"E\u266d",frequency:311.13,octave:4},{name:"E",frequency:329.63,octave:4},{name:"F",frequency:349.23,octave:4},{name:"G\u266d",frequency:369.99,octave:4},{name:"G",frequency:392,octave:4},{name:"A\u266d",frequency:415.3,octave:4},{name:"A",frequency:440,octave:4},{name:"B\u266d",frequency:466.16,octave:4},{name:"B",frequency:493.88,octave:4}],[{name:"C",frequency:523.25,octave:5},{name:"D\u266d",frequency:554.37,octave:5},{name:"D",frequency:587.33,octave:5},{name:"E\u266d",frequency:622.25,octave:5},{name:"E",frequency:659.25,octave:5},{name:"F",frequency:698.46,octave:5},{name:"G\u266d",frequency:739.99,octave:5},{name:"G",frequency:783.99,octave:5},{name:"A\u266d",frequency:830.61,octave:5},{name:"A",frequency:880,octave:5},{name:"B\u266d",frequency:932.33,octave:5},{name:"B",frequency:987.77,octave:5}],[{name:"C",frequency:1046.5,octave:6},{name:"D\u266d",frequency:1108.73,octave:6},{name:"D",frequency:1174.66,octave:6},{name:"E\u266d",frequency:1244.51,octave:6},{name:"E",frequency:1318.51,octave:6},{name:"F",frequency:1396.91,octave:6},{name:"G\u266d",frequency:1479.98,octave:6},{name:"G",frequency:1567.98,octave:6},{name:"A\u266d",frequency:1661.22,octave:6},{name:"A",frequency:1760,octave:6},{name:"B\u266d",frequency:1864.66,octave:6},{name:"B",frequency:1975.53,octave:6}],[{name:"C",frequency:2093,octave:7},{name:"D\u266d",frequency:2217.46,octave:7},{name:"D",frequency:2349.32,octave:7},{name:"E\u266d",frequency:2489.02,octave:7},{name:"E",frequency:2637.02,octave:7},{name:"F",frequency:2793.83,octave:7},{name:"G\u266d",frequency:2959.96,octave:7},{name:"G",frequency:3135.96,octave:7},{name:"A\u266d",frequency:3322.44,octave:7},{name:"A",frequency:3520,octave:7},{name:"B\u266d",frequency:3729.31,octave:7},{name:"B",frequency:3951.07,octave:7}],[{name:"C",frequency:4186.01,octave:8},{name:"D\u266d",frequency:4434.92,octave:8},{name:"D",frequency:4698.63,octave:8},{name:"E\u266d",frequency:4978.03,octave:8},{name:"E",frequency:5274.04,octave:8},{name:"F",frequency:5587.65,octave:8},{name:"G\u266d",frequency:5919.91,octave:8},{name:"G",frequency:6271.93,octave:8},{name:"A\u266d",frequency:6644.88,octave:8},{name:"A",frequency:7040,octave:8},{name:"B\u266d",frequency:7458.62,octave:8},{name:"B",frequency:7902.13,octave:8}]],E=[{name:"Major",displayNoteBeforeTonic:!0,scales:[{name:"A\u266d",notes:[8,10,0,1,3,5,7]},{name:"A",notes:[9,d,1,2,4,6,8]},{name:"B\u266d",notes:[10,0,2,3,5,7,9]},{name:"B",notes:[d,1,3,4,6,8,10]},{name:"C",notes:[0,2,4,5,7,9,d]},{name:"D\u266d",notes:[1,3,5,6,8,10,0]},{name:"D",notes:[2,4,6,7,9,d,1]},{name:"E\u266d",notes:[3,5,7,8,10,0,2]},{name:"E",notes:[4,6,8,9,d,1,3]},{name:"F",notes:[5,7,9,10,0,2,4]},{name:"G\u266d",notes:[6,8,10,d,1,3,5]},{name:"G",notes:[7,9,d,0,2,4,6]}]},{name:"Natural Minor",displayNoteBeforeTonic:!0,scales:[{name:"A\u266d",notes:[8,10,d,1,3,4,6,8]},{name:"A",notes:[9,d,0,2,4,5,7]},{name:"B\u266d",notes:[10,0,1,3,5,6,8,10]},{name:"B",notes:[d,1,2,4,6,7,9]},{name:"C",notes:[0,2,3,5,7,8,10]},{name:"D\u266d",notes:[1,3,4,6,8,9,d,1]},{name:"D",notes:[2,4,5,7,9,10,0]},{name:"E\u266d",notes:[3,5,6,8,10,d,1,3]},{name:"E",notes:[4,6,7,9,d,0,2]},{name:"F",notes:[5,7,8,10,0,1,3]},{name:"G\u266d",notes:[6,8,9,d,1,2,4,6]},{name:"G",notes:[7,9,10,0,2,3,5]}]},{name:"Melodic Minor",displayNoteBeforeTonic:!0,scales:[{name:"A\u266d",notes:[8,10,d,1,3,5,7]},{name:"A",notes:[9,d,0,2,4,6,8]},{name:"B\u266d",notes:[10,0,1,3,5,7,9]},{name:"B",notes:[d,1,2,4,6,8,10]},{name:"C",notes:[0,2,3,5,7,9,d]},{name:"D\u266d",notes:[1,3,4,6,8,10,0]},{name:"D",notes:[2,4,5,7,9,d,1]},{name:"E\u266d",notes:[3,5,6,8,10,0,2]},{name:"E",notes:[4,6,7,9,d,1,3]},{name:"F",notes:[5,7,8,10,0,2,4]},{name:"G\u266d",notes:[6,8,9,d,1,3,5]},{name:"G",notes:[7,9,10,0,2,4,6]}]},{name:"Harmonic Minor",displayNoteBeforeTonic:!0,scales:[{name:"A\u266d",notes:[8,10,d,1,3,4,7]},{name:"A",notes:[9,d,0,2,4,5,8]},{name:"B\u266d",notes:[10,0,1,3,5,6,9]},{name:"B",notes:[d,1,2,4,6,7,10]},{name:"C",notes:[0,2,3,5,7,8,d]},{name:"D\u266d",notes:[1,3,4,6,8,9,0]},{name:"D",notes:[2,4,5,7,9,10,1]},{name:"E\u266d",notes:[3,5,6,8,10,d,2]},{name:"E",notes:[4,6,7,9,d,0,3]},{name:"F",notes:[5,7,8,10,0,1,4]},{name:"G\u266d",notes:[6,8,9,d,1,2,5]},{name:"G",notes:[7,9,10,0,2,3,6]}]},{name:"Minor Pentatonic",displayNoteBeforeTonic:!1,scales:[{name:"Ab",notes:[8,d,1,3,6]},{name:"A",notes:[9,0,2,4,7]},{name:"Bb",notes:[10,1,3,5,8]},{name:"B",notes:[d,2,4,6,9]},{name:"C",notes:[0,3,5,7,10]},{name:"Db",notes:[1,4,6,8,d]},{name:"D",notes:[2,5,7,9,0]},{name:"Eb",notes:[3,6,8,10,1]},{name:"E",notes:[4,7,9,d,2]},{name:"F",notes:[5,8,10,0,3]},{name:"Gb",notes:[6,9,d,1,4]},{name:"G",notes:[7,10,0,2,5]}]},{name:"Major Pentatonic",displayNoteBeforeTonic:!1,scales:[{name:"A\u266d",notes:[8,10,0,3,5]},{name:"A",notes:[9,d,1,4,6]},{name:"B\u266d",notes:[10,0,2,5,7]},{name:"B",notes:[d,1,3,6,8]},{name:"C",notes:[0,2,4,7,9]},{name:"D\u266d",notes:[1,3,5,8,10]},{name:"D",notes:[2,4,6,9,d]},{name:"E\u266d",notes:[3,5,7,10,0]},{name:"E",notes:[4,6,8,d,1]},{name:"F",notes:[5,7,9,0,2]},{name:"G\u266d",notes:[6,8,10,1,3]},{name:"G",notes:[7,9,d,2,4]}]},{name:"Minor Pentatonic Blues",displayNoteBeforeTonic:!0,scales:[{name:"A\u266d",notes:[8,d,1,2,3,6]},{name:"A",notes:[9,0,2,3,4,7]},{name:"B\u266d",notes:[10,1,3,4,5,8]},{name:"B",notes:[d,2,4,5,6,9]},{name:"C",notes:[0,3,5,6,7,10]},{name:"D\u266d",notes:[1,4,6,7,8,d]},{name:"D",notes:[2,5,7,8,9,0]},{name:"E\u266d",notes:[3,6,8,9,10,1]},{name:"E",notes:[4,7,9,10,d,2]},{name:"F",notes:[5,8,10,d,0,3]},{name:"G\u266d",notes:[6,9,d,0,1,4]},{name:"G",notes:[7,10,0,1,2,5]}]},{name:"Major Pentatonic Blues",displayNoteBeforeTonic:!0,scales:[{name:"A\u266d",notes:[8,10,d,0,3,5]},{name:"A",notes:[9,d,0,1,4,6]},{name:"B\u266d",notes:[10,0,1,2,5,7]},{name:"B",notes:[d,1,2,3,6,8]},{name:"C",notes:[0,2,3,4,7,9]},{name:"D\u266d",notes:[1,3,4,5,8,10]},{name:"D",notes:[2,4,5,6,9,d]},{name:"E\u266d",notes:[3,5,6,7,10,0]},{name:"E",notes:[4,6,7,8,d,1]},{name:"F",notes:[5,7,8,9,0,2]},{name:"G\u266d",notes:[6,8,9,10,1,3]},{name:"G",notes:[7,9,10,d,2,4]}]},{name:"Major Bebop",displayNoteBeforeTonic:!1,scales:[{name:"A\u266d",notes:[8,10,0,1,3,4,5,7]},{name:"A",notes:[9,d,1,2,4,5,6,8]},{name:"B\u266d",notes:[10,0,2,3,5,6,7,9]},{name:"B",notes:[d,1,3,4,6,7,8,10]},{name:"C",notes:[0,2,4,5,7,8,9,d]},{name:"D\u266d",notes:[1,3,5,6,8,9,10,0]},{name:"D",notes:[2,4,6,7,9,10,d,1]},{name:"E\u266d",notes:[3,5,7,8,10,d,0,2]},{name:"E",notes:[4,6,8,9,d,0,1,3]},{name:"F",notes:[5,7,9,10,0,1,2,4]},{name:"G\u266d",notes:[6,8,10,d,1,2,3,5]},{name:"G",notes:[7,9,d,0,2,3,4,6]}]},{name:"Minor Bebop scales",displayNoteBeforeTonic:!1,scales:[{name:"A\u266d",notes:[8,10,d,0,1,3,5,6]},{name:"A",notes:[9,d,0,1,2,4,6,7]},{name:"B\u266d",notes:[10,0,1,2,3,5,7,8]},{name:"B",notes:[d,1,2,3,4,6,8,9]},{name:"C",notes:[0,2,3,4,5,7,9,10]},{name:"D\u266d",notes:[1,3,4,5,6,8,10,d]},{name:"D",notes:[2,4,5,6,7,9,d,0]},{name:"E\u266d",notes:[3,5,6,7,8,10,0,1]},{name:"E",notes:[4,6,7,8,9,d,1,2]},{name:"F",notes:[5,7,8,9,10,0,2,3]},{name:"G\u266d",notes:[6,8,9,10,d,1,3,4]},{name:"G",notes:[7,9,10,d,0,2,4,5]}]},{name:"Super Locrian",displayNoteBeforeTonic:!0,scales:[{name:"C",notes:[0,1,3,4,6,8,10]},{name:"D\u266d",notes:[1,2,4,5,7,9,d]},{name:"D",notes:[2,3,5,6,8,10,0]},{name:"E\u266d",notes:[3,4,6,7,9,d,1]},{name:"E",notes:[4,5,7,8,10,0,2]},{name:"F",notes:[5,6,8,9,d,1,3]},{name:"G\u266d",notes:[6,7,9,10,0,2,4]},{name:"G",notes:[7,8,10,d,1,3,5]},{name:"A\u266d",notes:[8,9,d,0,2,4,6]},{name:"A",notes:[9,10,0,1,3,5,7]},{name:"B\u266d",notes:[10,d,1,2,4,6,8]},{name:"B",notes:[d,0,2,3,5,7,9]}]}],g=n(8),_=n.n(g),b=(n(19),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=E.indexOf(this.props.scaleType),n=this.props.scaleType.scales.indexOf(this.props.scale),a=E.map(function(e,t){return s.a.createElement("option",{key:t,value:t.toString()},e.name)}),o=this.props.scaleType.scales.map(function(e,t){return s.a.createElement("option",{key:t,value:t.toString()},e.name)});return s.a.createElement("div",{className:"site"},s.a.createElement("header",{className:"site__header"},s.a.createElement("img",{src:_.a,className:"site__logo",alt:"logo"}),s.a.createElement("p",null,"Use your phone as a musical instrument!")),s.a.createElement("div",{className:"site__links"},s.a.createElement("a",{className:"site__link",href:"#",onClick:function(t){t.preventDefault(),e.props.help()}},"Instructions"),s.a.createElement("a",{className:"site__link site__link--primary",href:"#",onClick:function(t){t.preventDefault(),e.props.play()}},"Play now")),s.a.createElement("div",{className:"site__options"},s.a.createElement("label",{className:"site__option"},s.a.createElement("span",{className:"site__label"},"Scale"),s.a.createElement("select",{className:"site__value",value:t.toString(),onChange:function(t){return e.props.selectScaleType(E[t.target.selectedIndex])}},a)),s.a.createElement("label",{className:"site__option"},s.a.createElement("span",{className:"site__label"},"Tonic"),s.a.createElement("select",{className:"site__value",value:n.toString(),onChange:function(t){return e.props.selectScale(e.props.scaleType.scales[t.target.selectedIndex])}},o)),s.a.createElement("label",{className:"site__option"},s.a.createElement("span",{className:"site__label"},"Octave"),s.a.createElement("input",{className:"site__value",type:"range",min:"2",max:"6",step:"1",value:this.props.octave,onChange:function(t){return e.props.setOctave(parseInt(t.target.value))}})),s.a.createElement("label",{className:"site__option"},s.a.createElement("span",{className:"site__label"},"Volume"),s.a.createElement("input",{className:"site__value",type:"range",min:"0",max:"1",step:"0.025",value:this.props.volume,onChange:function(t){return e.props.setVolume(parseFloat(t.target.value))}}))))}}]),t}(o.Component)),N=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"site site--help"},s.a.createElement("header",{className:"site__header"},s.a.createElement("p",null,"How to play")),s.a.createElement("div",{className:"site__help"},"Here's some basic insructions on how to hold your phone in the intended way while playing....",s.a.createElement("br",null),"If another way works better for you, do that instead!",s.a.createElement("ol",null,s.a.createElement("li",null,'Hold your phone in "portrait" oreientation, using two hands, with the bottom edge facing you.'),s.a.createElement("li",null,"Use both thumbs to push the keys on the screen."),s.a.createElement("li",null,"That's it. Make some music!"))),s.a.createElement("div",{className:"site__links"},s.a.createElement("a",{className:"site__link",href:"#",onClick:function(t){t.preventDefault(),e.props.back()}},"Go back")))}}]),t}(o.Component);function B(e,t,n){for(var a=-1,o=0,s=e.notes.map(function(e){return e<a&&o++,a=e,q[n+o][e]}),c=t.displayNoteBeforeTonic?9-e.notes.length:10-e.notes.length,r=0;r<c;r++){var i=e.notes[r];i<a&&o++,a=i,s.push(q[n+o][i])}if(t.displayNoteBeforeTonic){var m=e.notes[e.notes.length-1],l=e.notes[0];o=m>l?-1:0,s.unshift(q[n+o][m])}return s}!function(e){e[e.Home=0]="Home",e[e.Help=1]="Help",e[e.Play=2]="Play"}(p||(p={}));var k="scaleType",D="scaleNote",O="octave",T="volume",A=function(e){function t(e){var n;Object(i.a)(this,t),n=Object(l.a)(this,Object(u.a)(t).call(this,e));var a=E[0],o=sessionStorage.getItem(k);if(null!==o){var s=E.filter(function(e){return e.name===o});s.length>0&&(a=s[0])}var c=a.scales.filter(function(e){return"C"===e.name})[0],r=sessionStorage.getItem(D);if(null!==r){var m=a.scales.filter(function(e){return e.name===r});m.length>0&&(c=m[0])}var v=4,f=sessionStorage.getItem(O);if(null!==f){var y=parseInt(f);y>=0&&y<q.length&&(v=y)}var h=.1,d=sessionStorage.getItem(T);if(null!==d){var g=parseFloat(d);g>=0&&g<=1&&(h=g)}return n.state={display:p.Home,scaleType:a,scale:c,octave:v,volume:h},n}return Object(v.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;if(this.state.display===p.Help){return s.a.createElement(N,{back:function(){return e.setState({display:p.Home})}})}if(this.state.display===p.Play){var t,n=B(this.state.scale,this.state.scaleType,this.state.octave),a=B(this.state.scale,this.state.scaleType,this.state.octave+1),o=B(this.state.scale,this.state.scaleType,this.state.octave-1);this.state.scaleType.displayNoteBeforeTonic?(t=[1],this.state.scale.notes.length<9&&t.push(this.state.scale.notes.length+1)):(t=[0],this.state.scale.notes.length<10&&t.push(this.state.scale.notes.length));var c="".concat(this.state.scale.name," ").concat(this.state.scaleType.name);return s.a.createElement(h,{exit:function(){return e.setState({display:p.Home})},keyName:c,highlightButtons:t,mainNotes:n,highNotes:a,lowNotes:o,volume:this.state.volume})}return s.a.createElement(b,{help:function(){return e.setState({display:p.Help})},play:function(){return e.setState({display:p.Play})},scaleType:this.state.scaleType,selectScaleType:function(t){var n=e.state.scaleType.scales.indexOf(e.state.scale),a=n>=0&&n<t.scales.length?t.scales[n]:t.scales[0];sessionStorage.setItem(k,t.name),e.setState({scaleType:t,scale:a})},scale:this.state.scale,selectScale:function(t){sessionStorage.setItem(D,t.name),e.setState({scale:t})},octave:this.state.octave,setOctave:function(t){sessionStorage.setItem(O,t.toString()),e.setState({octave:t})},volume:this.state.volume,setVolume:function(t){sessionStorage.setItem(T,t.toString()),e.setState({volume:t})}})}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n.p+"static/media/logo.ee7cd8ed.svg"},9:function(e,t,n){e.exports=n(21)}},[[9,2,1]]]);
//# sourceMappingURL=main.3ce80aed.chunk.js.map