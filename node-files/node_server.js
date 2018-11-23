const http = require('http');
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
const readline = require('readline');
 var EMPLOYEE,HARMONY_ID;


// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(req.url);
//     res.end();
//     validate_user(req.url);
// }).listen(3000);
// console.log("Server listening at 3000");
validate_user(9);


function validate_user(harmonyId){
    MongoClient.connect(url, function(err, db) {
        var dbo = db.db("USER_DB_FOR_MAKEATHON_3");
        if (err) throw err;
        dbo.collection("employees").findOne({"harmony_id":harmonyId},{ projection: {_id:0, emp_id:1,emp_name:1}}, function(err, result) {
            if (err) throw err;
            if(result!=null){
                HARMONY_ID = harmonyId;
                EMPLOYEE = result;
                console.log('1 record found, user exists',EMPLOYEE);
                return result;
            }
            else{
                return false;
            }
            db.close();
          });
    }
    );    
}

function addLeaveTransaction(startDate, endDate,numberOfDays){
    MongoClient.connect(url, function(err, db) {
        var dbo = db.db("USER_DB_FOR_MAKEATHON_3");
        if (err) throw err;
        dbo.collection("employees").insertOne({
            "emp_id" : EMPLOYEE.emp_id,
            "request_date" : Date(),
            "number_of_days" : numberOfDays,
            "start_date" : startDate,
            "end_date" : endDate,
            "summary" : "Personal",
            "status" : "Requested"
        }, function(err, res) {
            if (err) throw err;
            console.log("collection updated!");
            db.close();
          });

    });
}

function lastLeave(){
    MongoClient.connect(url, function(err, db) {
        var dbo = db.db("USER_DB_FOR_MAKEATHON_3");
        if (err) throw err;
        dbo.collection("leave_transactions").findOne({"harmony_id":HARMONY_ID},{sort :{request_date: -1}}, function(err, result) {
            if (err) throw err;
            if(result!=null){
                console.log('1 record found, user exists',result);
                return result;
            }
            else{
                return false;
            }
            db.close();
          });
    }
    );    
}


function addUser(emp_id, harm_id, name, phone, email)
{
    MongoClient.connect(url, function(err, db) {
        var dbo = db.db("USER_DB_FOR_MAKEATHON_3");
        if (err) throw err;
        dbo.collection("employees").insertOne({
            "emp_id":emp_id,
            "harmony_id":harm_id,
            "emp_name": name,
            "phone_no":phone,
            "mail_id":email,
            "manager_name":"Manoj",
            "leave_balance":10,
            "leave_requests":0
        }, function(err, res) {
            if (err) throw err;
            console.log("collection updated!");
            db.close();
          });

    }
    );  
}
