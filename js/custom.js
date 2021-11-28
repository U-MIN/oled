$(function(){
    //AOS
    AOS.init();

    //스크롤 이벤트
    $(window).scroll(function(){
        let scTop = $(this).scrollTop();         //스크롤 위치값 알아내는 제이쿼리 함수
        

    //조건문으로 배경이미지 교체
    let cont4 = $('.cont4').offset().top+20
    console.log(cont4);
    if(scTop >= cont4){
        $('.cont4').addClass('on');
    }    

    //조건문으로 카운트 기능 달기
    let cont5 = $('.cont5').offset().top; //위치값=정수형
      if( scTop >= cont5){
            autoCount(6.5);
      }


        //카운트 기능 함수
        function autoCount(total){
            //변수 담아두고 시작
            let start = 0;
            let countNum = setInterval(function(){
                start += 0.1;
                result = start.toFixed(1);
                //  데이터가들어간변수명.toFixed(소숫점자릿수);

                if(start >=total){
                    clearInterval(countNum); // 최종까지 도달했으므로 숫제 멈춤
                                             // 클리어 인터벌로 셋인터벌 기능 중지
                    $('.percent').text(total+"%");
                }
                else{
                    $('.percent').text(result+"%");
                    //DOM document object model 
                    //태그 선택, 이벤트, 클래스 , 속성  
                }



            },20);
        }

    });

});