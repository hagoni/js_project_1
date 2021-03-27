'use strict';

function clock() {
    // 현재 시간 받아오기
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();
    const currentSecond = currentTime.getSeconds();
    let nowHour = null;
    // console.log(`${currentHour}시 ${currentMinute}분 ${currentSecond}초`);

    // 현재 시간 출력하기
    let nowTime = document.getElementById("currentTime");
    nowTime.innerText = `현재 시간은 ${currentHour}시 ${currentMinute}분 ${currentSecond}초`;

    // 시간 변수로 나눠주기
    if(currentHour >= 0 && currentHour <= 6) {
        nowHour = 0;
    } else if(currentHour >= 6 && currentHour <= 12) {
        nowHour = 1;
    } else if(currentHour >= 12 && currentHour <= 18) {
        nowHour = 2;
    } else {
        nowHour = 3;
    }
    console.log(nowHour);

    // select 값 저장
    let select1Index = document.getElementById("select1").options.selectedIndex,
        select2Index = document.getElementById("select2").options.selectedIndex,
        select3Index = document.getElementById("select3").options.selectedIndex;
    console.log(select1Index);

    // select 값과 현재 시간 비교하여 출력
    if((nowHour === select1Index) == true) {
        document.getElementById("selectText1").innerText = "Let's eat meals now!!!!!!";
    } else {
        document.getElementById("selectText1").innerText = null;
    }
    if((nowHour === select2Index) == true) {
        document.getElementById("selectText2").innerText = "study.....time..... :(";
    } else {
        document.getElementById("selectText2").innerText = null;
    }
    if((nowHour === select3Index) == true) {
        document.getElementById("selectText3").innerText = "Happy Tennis Time :)";
    } else {
        document.getElementById("selectText3").innerText = null;
    }

}

// 버튼 클릭 시 지정 텍스트 출력
let textWrap = document.getElementById("selectTextWrap"),
    textButton = document.getElementById("btnClickText"),
    innerButton = document.getElementById("innerButton");
    
// innerButton.addEventListener('click', function() {
//     if(textWrap.style.display == "block") {
//         textWrap.style.display = "none";
//         textButton.innerText = "지정 텍스트를 출력했습니다.";
//         innerButton.innerText = "원래대로 돌려놔라!!";
//     } else {
//             textWrap.style.display = "block";
//             textButton.innerText = "";
//             innerButton.innerText = "지정 텍스트 출력";
//     }
// })
innerButton.addEventListener('click', function() {
    if(textWrap.style.display == "none") {
        textWrap.style.display = "block";
        textButton.innerText = "";
        innerButton.innerText = "지정 텍스트 출력";
    } else {
        textWrap.style.display = "none";
        textButton.innerText = "지정 텍스트를 출력했습니다.";
        innerButton.innerText = "원래대로 돌려놔라!!";
            
    }
})


window.onload = function() {
    setInterval(function(){
        clock();
    },1000);
}
