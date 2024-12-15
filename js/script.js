import { fetchWeatherData } from "./weather.js";
import { DeepL } from "./translation.js";

let html = '';
const domCode = document.getElementById('dom-code');

// ----- 教材コード

try {

$(function() {
  $('#fadeIn').on('click', function () {
    $('.box').css('opacity', 1);
  });
  $('#fadeOut').on('click', function () {
    $('.box').css('opacity', 0);
  });


  $('#slideUp').on('click', function () {
    $('.box').css('height', 0);
  });
  $('#slideDown').on('click', function () {
    $('.box').css('height', 200);
  });

});

} catch(e) {
  const deepLmsg = await DeepL(e.message);
  html += `<div class="text-danger">【エラー】${deepLmsg}</div>`;
}

// -----
// domCode.innerHTML = html;
fetchWeatherData();

const resetBtn = document.getElementById('reset-btn');
resetBtn.addEventListener('click', () => {
  location.reload();
});