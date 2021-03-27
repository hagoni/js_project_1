// 1. 현재 시간을 받아와서 출력하기(AM/PM 으로 12hours로 나누기)
// 1-1. setInterval로 1초마다 랜더링
// 2. 각 select option 받아와서 저장하기
// 3. 해당 option과 현재 시간 매치해서 텍스트 보여주기
// 4. 버튼 만들고 클릭 이벤트로 출력하기
// 5. 그 외 시간에 해당될 때 다른 메시지 출력(evening / afternoon)

'use strict';

function clock() {
    // DOM 접근
    const currentTime = document.getElementById("currentTime");
    // const select1 = [];
    const select1 = Number(document.getElementById('select1').value);
    // 시간에 관한 변수
    const newDate = new Date();
    const newHours = newDate.getHours();
    const newMinutes = newDate.getMinutes();
    const newSeconds = newDate.getSeconds();
    const meridiemHours = newHours - 12;
    const optionsIndex = Math.floor(newHours / 3);

    // console.log(optionsIndex);
    if(optionsIndex === select1) {
        // console.log("adasdasd");
    }

    currentTime.innerText = `현재 시각은 ${meridiemHours}시 ${newMinutes}분 ${newSeconds}초 입니다.`;
}

window.onload = function() {
    setInterval(function() {
        clock();
    }, 1000);
}
