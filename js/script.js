/*----------------
ローディング
----------------*/
const loading = document.querySelector('#loading');

// ロードが完了したら
window.addEventListener('load', () => {
    // ローディング画面を非表示にする
    loading.animate(
        {
            opacity: [1, 0],
            visibility: 'hidden'
        },
        {
            duration: 500,
            delay: 2000,
            fill: 'forwards',
        });
});


/*----------------
スライドショー
----------------*/
const mv = document.querySelector('#mainvisual img');

let i = 1;
const setMv = () => {

    if(i===3) {
        i = 1
    } else {
        i++;
    }
    mv.src = `img/mainvisual${i}.jpg`;
};

setInterval(setMv, 6000);

/*----------------
フェードイン
----------------*/
const showElement = (entries, obs) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.animate(
                {
                    opacity: [0, 1],
                },
                {
                    duration: 2000,
                    fill: 'forwards',
                });
            obs.unobserve(entry.target);
        }
    });
};

const elementObserver = new IntersectionObserver(showElement);

const fadeElements = document.querySelectorAll('.fadein');
fadeElements.forEach((fadeElement) => {
    elementObserver.observe(fadeElement);
});