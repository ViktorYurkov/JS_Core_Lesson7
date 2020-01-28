function show(data) {
    console.log(data);
}

//функціонал Robot
function Robot(){
    this.name = "Robot";
};           

Robot.prototype.Work = function(){
    switch(this.name) {    
    case "Robot" : {
        return 'Я Robot – я просто працюю';
    }
    case "CoffeRobot" : {
        return 'Я CoffeRobot – я варю каву';
    }
    case "RobotDancer" : {
        return 'Я RobotDancer – я просто танцюю';
    }
    case "RobotCoocker" : {
        return 'Я RobotCoocker – я просто готую';
    }
    }
};

var myRobot = new Robot();
show(myRobot.Work());

//функціонал CoffeRobot
function CoffeRobot(){
    this.name = "CoffeRobot";
};
CoffeRobot.prototype = Object.create(Robot.prototype);
CoffeRobot.prototype.constructor = CoffeRobot;

var myCoffeRobot = new CoffeRobot();     
show(myCoffeRobot.Work());

//функціонал RobotDancer
function RobotDancer(){
    this.name = "RobotDancer";
};
RobotDancer.prototype = Object.create(Robot.prototype);
RobotDancer.prototype.constructor = RobotDancer;
var myRobotDancer = new RobotDancer();      
show(myRobotDancer.Work());

//функціонал RobotCoocker
function RobotCoocker(){
    this.name = "RobotCoocker";
};
RobotCoocker.prototype = Object.create(Robot.prototype);
RobotCoocker.prototype.constructor = RobotCoocker;
var myRobotCoocker = new RobotCoocker();      
show(myRobotCoocker.Work());

//робота всіх
var Robots = [myRobot,myCoffeRobot,myRobotDancer,myRobotCoocker,];
for (i = 0; i < Robots.length; i++) {
    show(Robots[i].Work());
}