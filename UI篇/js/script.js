/**
 * Created by 蛋 on 2017/7/30.
 */
window.onload=function () {
    var chess=document.getElementById('chess');
    var context=chess.getContext('2d');

    context.strokeStyle='#BFBFBF';

    //画水印
    var logo=new Image();
    logo.src='images/logo.png';
    logo.onload=function () {
        context.drawImage(logo,0,0,450,450);

        //画棋盘
        drawChessBoard();
    }


    //画棋盘
    var drawChessBoard=function () {
        for (var i = 0; i < 15; i++) {
            context.moveTo(15 + i * 30, 15);
            context.lineTo(15 + i * 30, 435);
            context.stroke();//画线
            context.moveTo(15, 15 + i * 30);
            context.lineTo(435, 15 + i * 30);
            context.stroke();//画线,描边
        }
    }
        //画棋子
        var  oneStep=function (i,j,me) {

            context.beginPath();
            context.arc(15+i*30,15+j*30,13,0,2*Math.PI);//画扇形  此处是画圆
            context.closePath();
            var gradient=context.createRadialGradient(15+i*30+2,15+j*30-2,13,15+i*30+2,15+j*30-2,0);//渐变
           if(me){
               gradient.addColorStop(0,'#0A0A0A');
               gradient.addColorStop(1,'#636766');
           }else{
               gradient.addColorStop(0,'#D1D1D1');
               gradient.addColorStop(1,'#F9F9F9');
           }
            context.fillStyle=gradient;//设置填充色
            context.fill();//填充
        }
        //实现落子
        var me=true;
        var chessBoard=[];//存储落子情况
        for(var i=0;i<15;i++){
            chessBoard[i]=[];
            for(var j=0;j<15;j++){
                chessBoard[i][j]=0;
            }
        }
        chess.onclick=function (e) {
            var x=e.offsetX;
            var y=e.offsetY;
            var i=Math.floor(x/30);
            var j=Math.floor(y/30);
            if(chessBoard[i][j]==0){
                oneStep(i,j,me);
                if(me){
                    chessBoard[i][j]=1;
                }
                else {
                    chessBoard[i][j]=2;
                }
                me=!me;
            }
        }

}