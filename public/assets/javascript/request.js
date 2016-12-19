function request(type,url,data, done) {
    var xmlhttp = new XMLHttpRequest();
    var testVar;
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
           if (xmlhttp.status == 200) {

               done(xmlhttp.responseText);
           }
           else if (xmlhttp.status == 400) {
              alert('There was an error 400');
           }
           else {
               done(xmlhttp.responseText);
           }
        }
    };

    xmlhttp.open(type, url, true);
    xmlhttp.setRequestHeader("Content-type", "application/json");
    xmlhttp.send(JSON.stringify(data));
}