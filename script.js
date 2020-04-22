
// var d = new Date();
// document.getElementById("demo").innerHTML = d;

var aestTime = new Date().toLocaleString("en-US", {timeZone: "Australia/Brisbane"});
aestTime = new Date(aestTime);
document.getElementById("demo").innerHTML = aestTime;
// console.log('AEST time: '+aestTime.toLocaleString())

var asiaTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Shanghai"});
asiaTime = new Date(asiaTime);
document.getElementById("demo2").innerHTML = asiaTime;
// console.log('Asia time: '+asiaTime.toLocaleString())

var usaTime = new Date().toLocaleString("en-US", {timeZone: "America/New_York"});
usaTime = new Date(usaTime);
document.getElementById("demo3").innerHTML = usaTime;
// console.log('USA time: '+usaTime.toLocaleString())

var indiaTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"});
indiaTime = new Date(indiaTime);
document.getElementById("demo4").innerHTML = indiaTime;
// console.log('India time: '+indiaTime.toLocaleString())