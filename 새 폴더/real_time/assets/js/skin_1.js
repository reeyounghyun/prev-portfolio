$(function(){ // jQuery 시작
    var target = $('.no_notes');
    var visual = target.find('ul>li');
    var visualLen = visual.length;
    
    var cnt = 0;
    var setTime; //시간 기억 변수
    
    
    //이미지 슬라이딩 함수
    function move(i){
        if(cnt == i) return;
        
        var cnt_img = visual.eq(cnt);
        var next_img = visual.eq(i);
        
         /*공지사항이 올라가는 시간*/
            cnt_img.css({top:0}).stop().animate({top:'-100%'},1000);
            next_img.css({top:'100%'}).stop().animate({top:0},1000);
        
        cnt = i;
    }//end:move();
    

    
    timer(); /*공지사항이 돌아가는 곳*/
    function timer(){
        setTime = setInterval(function(){
            var n = cnt + 1;
            if(n == visualLen){
                n = 0;
            }

            move(n);
            
        }, 3000);
    }//end:timer()
    
    /* 공지사항을 오버했을때 정지 했다 오버 해제 시 다시 재생*/
    target.mouseover(function(){
        clearInterval(setTime);
    }).mouseout(function(){
        timer();
    });
    
    
});//jQuery 종료