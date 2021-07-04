const express = require('express');
const app = express();
const fileUpload = require('express-fileupload')
app.use(fileUpload());
app.get("/",(req,res)=>{
	res.sendFile(__dirname + '/views/index.html')
})
app.use(express.static(__dirname + '/locationUpload'))
app.post("/sendUpload",(req,res)=>{
	let myfile;
	let youpath;

	myfile = req.files.formUpload
	youpath = __dirname + '/locationUpload/' + myfile.name;

	myfile.mv(youpath,(err)=>{
		if(err){
			console.log(err)
		}
		res.send("file success to Upload").status(200)
		console.log("location image in  " + req.protocol + "://"+req.get("host") + "/"+myfile.name)
	})
})

app.listen(3000,()=>console.log("server on 3000"))