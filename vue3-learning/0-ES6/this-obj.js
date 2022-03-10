//对象中的this指针
//定义对象
class Player{
    //定义构造函数
    constructor(name,age){
        this.name = name ;
        this.age = age;
    }
    toPrint(){
        console.log(this.name + "-------" + this.age);
    }
 }
 var player1 =new Player('xxy',18);
 player1.toPrint();
