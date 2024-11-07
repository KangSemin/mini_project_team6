document.addEventListener('DOMContentLoaded', function () {
    const characters = document.querySelectorAll('.character');
    const originalTextElements = document.querySelectorAll('.original-text');

    const hideElements = (elements, delay) => {
        elements.forEach(element => {
            element.style.opacity = '0';
            setTimeout(() => {
                element.style.display = 'none';
            }, delay);
        });
    };

    const showElements = (elements) => {
        elements.forEach(element => {
            element.style.display = 'flex';  // flex로 변경하여 이미지와 텍스트가 같이 보이게
            element.style.opacity = '0';
            setTimeout(() => { element.style.opacity = '1'; }, 10);
        });
    };

    characters.forEach((character, index) => {
        // `new-text1`부터 `new-text4`까지 처리
        const newTextElements = document.querySelectorAll(`.new-text${index + 1}`);

        character.addEventListener('mouseenter', function () {
            hideElements(originalTextElements, 500);
            setTimeout(() => {
                showElements(newTextElements);
            }, 500);
        });

        character.addEventListener('mouseleave', function () {
            hideElements(newTextElements, 500);
            setTimeout(() => {
                showElements(originalTextElements);
            }, 500);
        });

        character.addEventListener('click', function () {
            const link = character.getAttribute('data-link');
            window.location.href = link;
        });
    });
});
