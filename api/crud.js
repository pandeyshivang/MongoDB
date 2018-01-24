var mongoos = require('mongoose');
var userModel = require('../models/Users');
module.exports = {
    insertmethod : function (req, res) {
        console.log("insert req",req)
        var name = req.body.name;
        var email = req.body.email;
        var newUser = new userModel({
            name: name,
            email: email
        });
        newUser.save(function (err, saved) {
            console.log("error is ",err,"saved is ",saved)
            userModel.find(function (err,data) {
                res.json({
                    "yourdata" : saved,
                    "totaldata":data,
                    "error":err
                })
            })

        })
    },
    updatemethod :function (req,res) {
     console.log("update req",req)
        var oldemail = req.body.oldemail
        var newemail = req.body.newemail
        userModel.findOne({
            email : oldemail

        }).then(function (response) {
            console.log("resposne update ",response)
            response.email = newemail
            response.save().then(function (save, err) {
                if (save) {
                    res.json({
                        "message":("Update data",save)
                    })
                }else if (err){
                   res.json({ "message":("Error ",err)})
                }else {
                    return false
                }

            }).catch(function (error) {
                console.log(error)
            })

        })

    },
    deletemethod :function (req, res) {
        console.log("deleted method ",req)
        var email = req.body.email
        userModel.findOne({
            email : email
        }).then(function (response) {
            response.remove().then(function (rmv, err) {
                if (err) res.json({"message":("Error",err)})
                else if (rmv) res.json({"message":("Remove data ",rmv)})
                else return
            })
        })
    }


}