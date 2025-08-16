document.addEventListener('DOMContentLoaded', function () {
    const filterLinks = document.querySelectorAll('.filter');
    const cards = document.querySelectorAll('.card');

    // Map filter text to category text in cards
    const filterMap = {
        'Усі': 'Усі',
        'Веб-сайти': 'Веб-сайт',
        'Додатки': 'Додаток',
        'Дизайн': 'Дизайн',
        'Маркетинг': 'Маркетинг'
    };

    filterLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            filterLinks.forEach(l => l.classList.remove('current-filter'));
            link.classList.add('current-filter');

            const filterText = link.textContent.trim();
            const categoryToMatch = filterMap[filterText];

            cards.forEach(card => {
                const category = card.querySelector('.category');
                if (filterText === 'Усі') {
                    card.style.display = '';
                } else if (category && category.textContent.includes(categoryToMatch)) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});