// 버튼을 누르면 1,2,3의 입력값을 저장한다.
// 버튼을 눌렀을 시 함수를 이용하여 값을 계산한다.
// 계산 값을 돔을 그려서 보여준다.

'use strict';

let form = document.getElementById('form');

form.addEventListener('submit', function calc(event) {
    event.preventDefault();
    let bill = Number(document.getElementById('bill').value),
    service = Number(document.getElementById('service').options.selectedIndex),
    people = Number(document.getElementById('people').value);
    
    let innerText = document.getElementById('innerText');
    let serviceNum = null;

    if ((service == "0") == true) {
        serviceNum = 0;
    } else if ((service == "1") == true) {
        serviceNum = 0.1;
    } else if ((service == "2") == true) {
        serviceNum = 0.2;
    } else if ((service == "3") == true) {
        serviceNum = 0.3;
    }

    return innerText.innerText = `each people would pay ${bill * serviceNum / people}$`;
});