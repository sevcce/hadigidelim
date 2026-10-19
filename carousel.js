document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector('.carousel-track');
    const carousel = document.querySelector('.carousel');
    const cards = document.querySelectorAll('.carousel-card');
    const prevBtn = document.querySelector('.carousel-arrow.left');
    const nextBtn = document.querySelector('.carousel-arrow.right');
    const dotsContainer = document.querySelector('.dots');

    if (!track || !carousel || !cards.length || !prevBtn || !nextBtn || !dotsContainer) {
        console.warn("Carousel elemanları eksik");
        return;
    }

    let index = 0;

    function getStep() {
        return cards[1]
            ? cards[1].offsetLeft - cards[0].offsetLeft
            : cards[0].offsetWidth;
    }

    function getVisibleCount() {
        const step = getStep();
        const gap = step - cards[0].offsetWidth;
        const styles = getComputedStyle(carousel);
        const padding = parseFloat(styles.paddingLeft) + parseFloat(styles.paddingRight);
        const width = carousel.clientWidth - padding;
        return Math.floor((width + gap) / step);
    }

    // En fazla hangi sıraya kadar kaydırabileceğimizi hesaplar
    function getMaxIndex() {
        return Math.max(cards.length - getVisibleCount(), 0);
    }

    function update() {
        const step = getStep();
        track.style.transform = `translateX(-${index * step}px)`;

        document.querySelectorAll('.dot').forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    function buildDots() {
        dotsContainer.innerHTML = '';

        for (let i = 0; i <= getMaxIndex(); i++) {
            const dot = document.createElement('div');
            dot.classList.add('dot');

            dot.addEventListener('click', () => {
                index = i;
                update();
            });

            dotsContainer.appendChild(dot);
        }
    }

    nextBtn.addEventListener('click', () => {
        index = Math.min(index + 1, getMaxIndex());
        update();
    });

    prevBtn.addEventListener('click', () => {
        index = Math.max(index - 1, 0);
        update();
    });

    // Kendiliğinden ilerleme: sona gelince başa döner
    setInterval(() => {
        if (index >= getMaxIndex()) {
            index = 0;
        } else {
            index = index + 1;
        }
        update();
    }, 6000);

    // Ekran boyutu değişirse (telefonu çevirmek gibi) yeniden hesapla
    window.addEventListener('resize', () => {
        index = Math.min(index, getMaxIndex());
        buildDots();
        update();
    });

    buildDots();
    update();
});