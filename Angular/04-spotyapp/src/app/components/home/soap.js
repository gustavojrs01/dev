function soapRequest(){
    var str = 'your SOAP request';
  
          function createCORSRequest(method, url) {
                      var xhr = new XMLHttpRequest();
                      if ("withCredentials" in xhr) {
                          xhr.open(method, url, false);
                      } else if (typeof XDomainRequest != "undefined") {
                          alert
                          xhr = new XDomainRequest();
                          xhr.open(method, url);
                      } else {
                          console.log("CORS not supported");
                          alert("CORS not supported");
                          xhr = null;
                      }
                      return xhr;
                  }
          var xhr = createCORSRequest("POST", "http://localhost:8080");
          if(!xhr){
           console.log("XHR issue");
           return;
          }
  
          xhr.onload = function (){
           var results = xhr.responseText;
           console.log(results);
          }
  
          xhr.setRequestHeader('Content-Type', 'text/xml');
          xhr.send(str);
   }