$(document).ready(function () {

  //메인 슬라이더 

  let i = 0;

  setInterval(function () {
    i++;
    if (i == 3) i = 0;

    $('.slider_box div').eq(i - 1).css('left', '0').stop().animate({ 'left': '100%' }, 1000)
    $('.slider_box div').eq(i).css('left', '-100%').stop().animate({ 'left': '0%' }, 1000)
  }, 3000)
  // 마지막 스크롤위치 10820 
  const box = document.querySelector(".ab_slider");

  box.addEventListener("scroll", () => {
    console.log("스크롤 위치:", box.scrollTop); // 현재 스크롤 위치
    console.log("전체 높이:", box.scrollHeight);
    console.log("보이는 높이:", box.clientHeight);

    // 비율 구하기
    const ratio = box.scrollTop / (box.scrollHeight - box.clientHeight);
    console.log("스크롤 비율:", ratio);
  });

  box.addEventListener("scroll", () => {
    const scrollTop = box.scrollTop; // 현재 스크롤 위치(px)
    // alert(scrollY)
    console.log("스크롤 위치:", box.scrollTop);

    if (scrollTop > 2800) {
      box.style.backgroundImage = "url('../img/ab_background_01.png')";
    }
    if (scrollTop > 5200) {
      box.style.backgroundImage = "";
    }

  });

  //event 슬라이드 2건 중 1번째 슬라이드

  let ii = 0;
  setInterval(function () {
    ii++;
    if (ii == 4) ii = 0;
    $('.s2_li li').eq(ii - 1).css('left', '0').stop().animate({ 'left': '-100%' }, 800)
    $('.s2_li li').eq(ii).css('right', '100%').stop().animate({ 'right': '0%' }, 800)
  }, 2000);











}) //document 끝 