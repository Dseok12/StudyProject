$(document).ready(function(){
  /* 모바일버튼 부분 */
  $('.m_btn').on('click', function(){
    $('.m_btn').toggleClass('on');
    $('.m_menu_box').fadeToggle(300)
  })
  /* //모바일버튼 부분 */


















});

/* Chart.JS */
const ctx = document.getElementById('myChart');

const myChart = new Chart(ctx, {
  type: 'bar',
  data: {
      labels: ['HTML', 'CSS', 'jQuery', 'Javascript', 'SCSS', 'VUE.JS', 'GITHUB'],
      datasets: [{
          label: ['SKILL'],
          data: [95, 95, 80, 75, 95, 70, 85],
          backgroundColor: [
              'rgba(255, 99, 132, 0.4)',
              'rgba(54, 162, 235, 0.4)',
              'rgba(255, 159, 64, 0.4)',
              'rgba(255, 206, 86, 0.4)',
              'rgba(153, 102, 255, 0.4)',
              'rgba(75, 192, 192, 0.4)',
              'rgba(0, 0, 0, 0.4)',
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(0, 0, 0, 1)',
          ],
          borderWidth: 2
      }]
  },
  options: {
      scales: {
          y: {
              beginAtZero: true
          }
      }
  }
});











