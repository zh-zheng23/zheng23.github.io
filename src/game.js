//初始时球随机发出
var randomX = Math.floor(Math.random() * 400) + 100;
if(randomX%2){
    player01.turn=false;
    player02.turn=true;
    ball1.dx=0.5;
}else{
    player01.turn=true;
    player02.turn=false;
    ball1.dx=-0.5;
}
var energy1=document.getElementById("player1energy");
var energy2=document.getElementById("player2energy");
var score1=document.getElementById("player1score");
var score2=document.getElementById("player2score");
//进球
function ballin(){
    energy1.innerHTML="energy: "+player01.energy;
    energy2.innerHTML="energy: "+player02.energy;
    //玩家1输球
    if (ball1.x <3) {
        player02.score++;
        score2.innerHTML="score: "+player02.score;
        player01.turn=true;
        player02.turn=false;
        player01.catching=true;
        player02.catching=false;
        var shooted=false;
        var catch1=setInterval(function(){
            //让球随人移动
            ball1.x=player01.x;
            ball1.y=player01.y;
            //改变球的速度
            ball1.dx=player01.dx;
            ball1.dy=player01.dy;
            if(player01.turn==false){
                shooted=true;
                clearInterval(catch1);
            } 
        },10);
        setTimeout(function(){
            if(shooted==false){
                player01.turn = false;
                player02.turn = true;
                player01.shootBall(ball1, 0.5, player01.angle);
                clearInterval(catch1);
            }
        },3000);
    }
    //玩家2输球
    else if (ball1.x > 1395) {
        player01.score++;
        score1.innerHTML="score: "+player01.score;
        player01.turn=false;
        player02.turn=true;
        player02.catching=false;
        player02.catching=true;
        var shooted=false;
        var catch2=setInterval(function(){
            //让球随人移动
            ball1.x=player02.x;
            ball1.y=player02.y;
            //改变球的速度
            ball1.dx=player02.dx;
            ball1.dy=player02.dy;
            if(player02.turn==false){
                shooted=true;
                clearInterval(catch2);
            } 
        },10);
        setTimeout(function(){
            if(shooted==false){
                player01.turn = true;
                player02.turn = false;
                player02.shootBall(ball1, 0.5, player01.angle);
                clearInterval(catch2);
            }
        },3000);
    }

}
setInterval(ballin,100);