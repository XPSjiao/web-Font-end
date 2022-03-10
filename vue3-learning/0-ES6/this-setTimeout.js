//定义对象
class Player{
    //定义构造函数
    constructor(name,age){
        this.name = name ;
        this.age = age;
    }
    //定义一个成员函数
    // toPrint(){
    //     let _this = this
    //     setTimeout(function(){
    //         console.log(_this.name+"______"+_this.age)
    //     },1000)
    // }
    toPrint(){
        
        setTimeout(() =>{
            console.log(this.name+"______"+this.age)
        },1000)
    }
}
let play1 = new Player("xx",18)
play1.toPrint()