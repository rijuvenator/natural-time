// for starters, decimal -> sexagesimal can be done with numerals[number]
var numerals = [];
for (i=0;i<10;i++) { numerals.push(i.toString()              ); }
for (i=0;i<20;i++) { numerals.push(String.fromCharCode( 97+i)); }
for (i=0;i<20;i++) { numerals.push(String.fromCharCode( 65+i)); }
for (i=0;i<10;i++) { numerals.push(String.fromCharCode(945+i)); }

// decimal to sexagesimal
function dec2sex(val, sex_state) {
    var result = '';
    var temp = parseInt(val);
    var to_base = 60;
    while (temp > 0) {
        result = numerals[temp % to_base] + result;
        temp = (temp - (temp % to_base)) / to_base;
    }
    result = (result || '0').padStart(3, "0");

    if      (sex_states[sex_state] == "def") { return result; }
    else if (sex_states[sex_state] == "sec") { return [result.slice(0    ), "."                  ].join("") + " s"; }
    else if (sex_states[sex_state] == "min") { return [result.slice(0, -1), ".", result.slice(-1)].join("") + " m"; }
    else if (sex_states[sex_state] == "hrs") { return [result.slice(0, -2), ".", result.slice(-2)].join("") + " h"; }
}

// wrapper
function pad(num, s) { return num.toString().padStart(s, "0"); }
// seconds to time
function secs2time(val, time_state) {
    val = parseInt(val);
    var pm = false;
    if (val > 12*60*60) { pm = true; }
    var hrs   = (Math.floor( val       / 3600));
    var mins  = (Math.floor((val%3600) / 60  ));
    var secs  = (Math.floor( val       % 60  ));
    var hr12  = ( (val > 13*60*60) ? (hrs-12) : hrs );

    var t = time_states[time_state];
    if      (t == "def") { return pad((hr12 == 0) ? 12 : hr12, 2) + ":"    + pad(         mins, 2) + ":"    + pad(secs, 2) + " " + (pm ? "pm" : "am"); }
    else if (t == "24h") { return pad(hrs                    , 2) + ":"    + pad(         mins, 2) + ":"    + pad(secs, 2)                           ; }
    else if (t == "h60") { return pad(hrs                    , 0) + " h, " + pad(         mins, 0) + " m, " + pad(secs, 0) + " s"                    ; }
    else if (t == "h10") { return (val/3600).toFixed(3) + " h"                                                                                       ; }
    else if (t == "m60") { return                                            pad(hrs*60 + mins, 0) + " m, " + pad(secs, 0) + " s"                    ; }
    else if (t == "m10") { return (val/60  ).toFixed(3) + " m"                                                                                       ; }
    else if (t == "s10") { return pad(val, 0) + " s"                                                                                                 ; }
}

// slider function, slider, and display elements
function sliderListener() {
    document.getElementById("time"       ).textContent = secs2time(this.value, time_state);
    document.getElementById("output_secs").textContent = dec2sex  (this.value, sex_state);
}

var input_element = document.createElement("input");
input_element.id = "slider";
input_element.type = "range";
input_element.classList.add("slider");
input_element.value = "0";
input_element.min = "0";
input_element.max = "86399";
input_element.oninput = sliderListener;

var time_element = document.createElement("h2");
time_element.classList.add('display');
time_element.id = "time";
var time_state = 0;
var time_states = ["def", "24h", "h60", "h10", "m60", "m10", "s10"];
var pretty_time_states = ["12-hour", "24-hour", "hrs, mins, secs", "decimal hours", "mins, secs", "decimal minutes", "seconds"];
function changeTimeState() {
    time_state = (time_state + 1)%time_states.length;
    time_state_button.textContent = pretty_time_states[time_state];
    input_element.oninput();
}
time_element.onclick = changeTimeState;
var time_state_button = document.createElement("button");
time_state_button.textContent = "12-hour";
time_state_button.classList.add("time_button");
time_state_button.onclick = changeTimeState;
time_state_button.style['width'] = '13em';

var output_secs_element = document.createElement("h2");
output_secs_element.classList.add('display');
output_secs_element.id = "output_secs";
var sex_state = 0;
var sex_states = ["def", "sec", "min", "hrs"];
var pretty_sex_states = ["natural time", "natural seconds", "natural minutes", "natural hours"];
function changeSexState() {
    sex_state = (sex_state + 1)%sex_states.length;
    sex_state_button.textContent = pretty_sex_states[sex_state];
    input_element.oninput();
}
output_secs_element.onclick = changeSexState;
var sex_state_button = document.createElement("button");
sex_state_button.textContent = "natural time";
sex_state_button.classList.add("time_button");
sex_state_button.onclick = changeSexState;
sex_state_button.style['width'] = '13em';

// button function and elements
var durationMap = {"s" : 1, "m" : 60, "h" : 3600};
function changeSlider() {
    if (this.textContent[0] == "+") {
        input_element.value = parseInt(input_element.value) + durationMap[this.textContent[2]];
    }
    else {
        input_element.value = parseInt(input_element.value) - durationMap[this.textContent[2]];
    }
    input_element.oninput();
}

var button_texts = ["–1h", "–1m", "–1s", "+1s", "+1m", "+1h"];
var buttons = [];
for (i=0; i<button_texts.length; i++) {
    let button = document.createElement("button");
    button.textContent = button_texts[i];
    button.classList.add("time_button");
    button.onclick = changeSlider;
    buttons.push(button);
}

// conversion table
function makeCell(tr, text) { var td = tr.insertCell(); td.appendChild(document.createTextNode(text)); return td; }
function getCellText(i) {
    var div = Math.floor(i/10)
    if (div % 2 == 0) { return ((div/2)*10 + (i%10)).toString(); }
    else              { return numerals[(div-1)/2*10 + (i%10)]; }
}
var tbl = document.createElement('table');
for (i=0;i<120;i++) {
    if (i%10==0) {
        tr = tbl.insertRow();
        //td = makeCell(tr, ((Math.floor(i/10))%2==0) ? "Base 10" : "Base 60");
    }
    td = makeCell(tr, getCellText(i));
    td.classList.add( (((Math.floor(i/10))%2==0) ? "base10" : "base60") );
}

// final layout
var main = document.createElement('div');
main.id = "main";

function addSection(text) {
    var div = document.createElement('div');
    div.classList.add("section");
    var h3 = document.createElement('h3');
    h3.textContent = text;
    div.appendChild(h3);
    main.appendChild(div);
    return div;
}

function addP(text, div) {
    var p = document.createElement('p');
    p.textContent = text;
    div.appendChild(p);
}

var section = addSection("Natural Time Clock");
addP("Change the time with the slider.\nIncrement with +/– buttons or arrow keys.\nCycle between units in either system.", section);

var container = document.createElement('div');
container.appendChild(time_state_button);
container.appendChild(sex_state_button);
section.appendChild(container);

section.appendChild(time_element);
section.appendChild(output_secs_element);

var container = document.createElement('div');
container.appendChild(input_element);
section.appendChild(container);

for (i=0; i<buttons.length; i++) {
    section.appendChild(buttons[i])
}

section = addSection("Base 60 Conversion Table");
addP("Numbers in base 10 (decimal) are shaded gray.\nCorresponding base 60 numerals appear underneath.", section);
section.appendChild(tbl);

section = addSection("");
var p = document.createElement('p');
p.innerHTML = "Explanations, examples, and source code at<br>the <i>Natural Time</i> repository on";
section.appendChild(p);
var a = document.createElement('a');
a.textContent = 'GitHub';
a.href = "https://github.com/rijuvenator/natural-time";
section.appendChild(a);
addP("\n\n\n", section);

document.body.appendChild(main);
input_element.oninput();
