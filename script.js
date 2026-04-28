// 스크롤 시 요소들이 부드럽게 나타나는 애니메이션 (Intersection Observer 활용)
document.addEventListener("DOMContentLoaded", () => {
    // 관찰자 설정: 화면에 15% 정도 보일 때 애니메이션 트리거
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 화면에 보이면 'visible' 클래스 추가하여 애니메이션 실행
                entry.target.classList.add("visible");
                // 한 번 나타난 요소는 다시 관찰하지 않음
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // .fade-in 클래스를 가진 모든 요소를 찾아서 관찰 시작
    const fadeElements = document.querySelectorAll(".fade-in");
    fadeElements.forEach((el, index) => {
        // 요소마다 약간의 딜레이를 주어 부드럽게 순차적으로 나타나게 함
        el.style.transitionDelay = `${index * 0.15}s`;
        observer.observe(el);
    });
});