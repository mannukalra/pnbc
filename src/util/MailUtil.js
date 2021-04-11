/* SmtpJS.com - v3.0.0 */
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var XDomainRequest = require("xmlhttprequest").XDomainRequest;

let Email = {
    send:
        function (a) {
            console.log("inside function send");
            return new Promise(function (n, e) {
                a.nocache = Math.floor(1e6 * Math.random() + 1);
                a.Action = "Send";
                var t = JSON.stringify(a); 
                Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, 
                function (e) {
                    n(e);
                })
            })
        },
        ajaxPost: function (e, n, t) {
            console.log("inside function ajaxPost");
            var a = Email.createCORSRequest("POST", e);
            a.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            a.onload = function () {
                var e = a.responseText; 
                console.log("ajaxPost>>>>e"+e);
                null != t && t(e)
            };
            a.send(n);
            console.log("ajaxPost>>>>"+t.response);
        }, 
        ajax: function (e, n) {
            console.log("inside function ajax");
            var t = Email.createCORSRequest("GET", e);
            t.onload = function () {
                var e = t.responseText; 
                null != n && n(e)
            };
            t.send();
            console.log("ajax>>>>"+t.response);
        }, 
        createCORSRequest: function (e, n) {
            console.log("inside function createCORSRequest");
            var t = new XMLHttpRequest();
            if('withCredentials' in t){
                t.open(e, n, !0);
                console.log("createCORSRequest1>>>>"+JSON.stringify(t));
             }else if("undefined" != typeof XDomainRequest){
                t = new XDomainRequest().open(e, n);
                console.log("createCORSRequest2>>>>"+t);
            }
            // t.onreadystatechange = 
            // t.setRequestHeader('Access-Control-Allow-Headers', 'X-PINGOTHER');
            // t.setRequestHeader('Access-Control-Allow-Origin', '*')
            t.setRequestHeader('dataType', 'jsonp')
            return t;
        }
};




module.exports.sendMailGM = (host, uname, pwd, to, from, sub, body) =>{
    console.log("sending mail to "+to);
    Email.send({
        Host : host,
        Username : uname,
        Password : pwd,
        To : to,
        From : from,
        Subject : sub,
        Body : body
    }).then(
    message => {
        console.log(message);  
        alert(message);
    });

}

module.exports.sendMail = (sub, body) =>{
    console.log("sending mail");
    Email.send({
        SecureToken : "f631efb9-4776-403a-9735-61c0eb4bcc77",
        To : 'mkmandeepkalra@gmail.com',//tarsem.tps
        From : "mannu.kalra29@gmail.com",
        Subject : sub,
        Body : body
    }).then(
    message => {
        console.log(message);  
        if(message.includes('OK'))
            alert("Thanks for reaching out, we have recieved your message, we'll connect with you shortly");
    });

}


// Email.send({
//     SecureToken : "f631efb9-4776-403a-9735-61c0eb4bcc77",
//     To : 'mkmandeepkalra@gmail.com',
//     From : "mannu.kalra29@gmail.com",
//     Subject : "This is the subject",
//     Body : "And this is the body"
// }).then(
//   message => console.log(message)//alert(message)
// );
