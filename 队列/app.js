var RecentCounter = function(){
    this.pingArray = []
}

RecentCounter.prototype.ping = function(t){
    this.pingArray.push(t);
    debugger
    while(this.pingArray[0]<t-3000){
        this.pingArray.shift();
    }
    return this.pingArray.length;
}

var obj = new RecentCounter();
var param_1 = obj.ping(3500);
var param_1 = obj.ping(35500);

param_1;