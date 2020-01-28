function show(data) {
    console.log(data);
}

//функціонал Robot
function Robot(){
    this.name = "Robot";
    
    this.Work = function(){     
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
    }
};

var myRobot = new Robot();
show(myRobot.Work());

//функціонал CoffeRobot
function CoffeRobot(){
    Robot.call(this);
    this.name = "CoffeRobot";
}
var myCoffeRobot = new CoffeRobot();
show(myCoffeRobot.Work());

//функціонал RobotDancer
function RobotDancer(){
    Robot.call(this);
    this.name = "RobotDancer";
}
var myRobotDancer = new RobotDancer();
show(myRobotDancer.Work());

//функціонал RobotCoocker
function RobotCoocker(){
    Robot.call(this);
    this.name = "RobotCoocker";
}
var myRobotCoocker = new RobotCoocker();
show(myRobotCoocker.Work());