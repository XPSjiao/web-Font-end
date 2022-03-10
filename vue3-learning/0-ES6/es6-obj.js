//定义对象
class Player{
    //定义构造函数
    constructor(name,age){
        this.name = name ;
        this.age = age;
    }
    //定义一个成员函数
    toPrint(){
        console.log(this.name + "______" + this.age)
    }
}
class BestPlayer extends Player{
    constructor(name,age){
        super(name,age);
        // this.name = "xxy";
        // this.age = 18;
    }
}

// var player1 = new Player('笑笑',18);
// player1.toPrint();

let bestPlayer = new BestPlayer("笑笑",18);
bestPlayer.toPrint();

