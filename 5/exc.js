//Exercise: Prototypal Inheritance with this
//How would you be able to create your own .bind() method using call or apply.


Function.prototype.bind = function(whoIsCallingMe){
    const self = this;
    return function(){
      return self.apply(whoIsCallingMe, arguments);
    };
  }