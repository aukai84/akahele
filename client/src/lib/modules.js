export function requestHelper(header, link) {
    return new Promise(function(resolve, reject){
        let newReq = new XMLHttpRequest();
        newReq.open(header, link);
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

export function postRequestHelper(card){
    console.log(card)
    return new Promise(function(resolve, reject){
        let newReq = new XMLHttpRequest();
        newReq.open("POST", "http://localhost:9000/api/kanban/new");
        newReq.setRequestHeader("Content-type", "application/json");
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
        newReq.send(JSON.stringify(card));
    })
}

