const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function(){
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});
searchInputEl.addEventListener('blur', function(){
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});

// 스크롤시 특정 요소 사라지게하기

const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function(){
    console.log(window.scrollY)
    if (window.scrollY > 500){
        // 배지 숨기기
        // gsap.to(요소, 지속시간, {옵션});
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'
        });
    } else {
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block'
        });
    }
}, 300));














































