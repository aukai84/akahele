export function retrieveData(link) {
  return new Promise(function(resolve, reject){
    let newReq = new XMLHttpRequest();
    newReq.open('GET', link);
    newReq.onload = function(){
      if(this.status >= 200 && this.status < 300){
        resolve(JSON.parse(newReq.response));
      } else {
        reject({
          status: this.status,
          statusText: newReq.statusText
        });
      }
    };
    newReq.onerror = function(){
      reject({
        status: this.status,
        statusText: newReq.statusText
      });
    };
    newReq.send();
  });
}

export function retrieveCityData(city, year) {
    return new Promise(function(resolve, reject){
        let newReq = new XMLHttpRequest();
        newReq.open('GET', `hhtp:`);
        newReq.onload = function(){
            if(this.status >= 200 && this.status < 300){
                resolve(JSON.parse(newReq.response));
            } else {
                reject({
                    status: this.status,
                    statusText: newReq.statusText
                })
            }
        };
        newReq.onerror = function(){
            reject({
                    status: this.status,
                    statusText: newReq.statusText
                })
        };
        newReq.send();
    })
}

export function retrieveStateData(state, year){
    return new Promise(function(resolve, reject){
        let newReq = new XMLHttpRequest();
        newReq.open('GET', '');
        newReq.onload = function(){
            if(this.status >= 200 && this.status < 300){
                resolve(JSON.parse(newReq.response));
            } else {
                reject({
                    status: this.status,
                    statusText: newReq.statusText
                })
            }
        };
        newReq.onerror = function(){
            reject({
                    status: this.status,
                    statusText: newReq.statusText
                })
        };
        newReq.send();
    })
}

export function sendToApi(link, data){
  return new Promise(function(resolve, reject){
    let newReq = new XMLHttpRequest();
    newReq.open('POST', link);
    newReq.setRequestHeader("Content-type", "application/json");
    newReq.onload = function(){
      if(this.status >= 200 && this.status < 300){
        resolve(JSON.parse(newReq.response));
    } else {
      reject({
        status: this.status,
        statusText: newReq.statusText
        });
      }
    };
    newReq.onerror = function(){
      reject({
        status: this.status,
        statusText: newReq.statusText
      });
    };
    newReq.send(JSON.stringify(data));
  });
}