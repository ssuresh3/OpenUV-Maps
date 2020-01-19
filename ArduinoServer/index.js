var SerialPort = require("serialport")
var axios = require('axios')
var serialPort = new SerialPort("\\\\.\\COM7", {
    baudRate: 9600
}, false)
// serialPort.close()
// it opens the connection and register an event 'data'
serialPort.on("open", function () {
    console.log('Communication is on!');

    // when your app receives data, this event is fired
    // so you can capture the data and do what you need
    serialPort.on('data', function (data) {
        console.log("sending: ");
        console.log(data.toString());

        axios.post('http://104.42.153.193:3000/post',{
            uv:parseInt(data.toString()),
            time:Date.now()
        }).then((res)=>{
            console.log(res.statusText)
        })
    });
});