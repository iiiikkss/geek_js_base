let game = {
    //Запускает игру
    run(){
        while(true){
            //Получаем направление от игрока. 
            const direction = mover.getDirection();
            if(direction === null){
                console.log('Игра окончена');
                return;
            }
            const nextPoint = mover.getNextPosition(direction);
            if (mover.canPlayerMakeStep(nextPoint)) {
                renderer.clear();
                player.move(nextPoint);
                renderer.render();
            }
        }
    },
    // метод выполняется прои открытие страницы
    init(){
        console.log("Ваше положение в виде о.");
        renderer.render();
        console.log("Чтобы начать игру наберите game.run() и нажмите Enter.");
    }
};

game.init()