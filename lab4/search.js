class PlayerSearch {
    constructor(player, rating, position) {
        this.player = player;
        this.rating = Number(rating);
        this.position = position;
    }

    print() {
        console.log(`Запрос на подбор игрока\nИмя: ${this.player}\nМинимальный рейтинг: ${this.rating}\nПозиция: ${this.position}`);
    }
}

const form = document.getElementById('search');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const search = new PlayerSearch(
        form.elements.player.value,
        form.elements.rating.value,
        form.elements.position.value
    );

    search.print();
});
