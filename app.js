const sim900 = require("sim900");
const sim = new sim900("/dev/cu.usbserial-A703X2W0", {});

sim.ready()
    .then(()=> {
    console.log("init...");
return sim.getICCID();
})
.then((result)=>{
    console.log("ICCID: ", result);
return sim.getSignalStrength();
})
.then((result)=>{
    console.log("SignalStrength: ", result);
return sim.status()
})
.then((result)=>{
    console.log("Status: ", result);
return sim.initGPRS();
})
.then((result)=>{
    console.log("GPRS: ", result);
return sim.getIMSI();
})
.then((result)=>{
    console.log("IMSI: ", result);
return sim.sms("Test from Node.js", "005491123280149");
})
.then((result)=>{
    console.log("SMS Sent: ", result);
return sim.initializeGPRS("gprs.personal.com", "gprs", "gprs");
})
.then((result)=>{
    console.log("GPRS: ", result);
})
.catch((err)=> {
    console.log("Error init: ", err);
});