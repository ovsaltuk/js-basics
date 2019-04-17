var snakeGame = {
    block: '#snake-field',
    size: 20,
    speed: 200, // мс - скорость
    snake: [],
    direction: 'y+', // направление движения
    prevDirection: 'y+',
    isRunning: false,
    snakeTimer: null,
    score: 0,
    prepareGameField(){
        for(var i = 0; i < this.size; i++){
            var row = document.createElement('div');
            row.classList.add('row');
            for(var j = 0; j < this.size; j++){
                var cell = document.createElement('div');
                cell.classList.add('cell');
                cell.dataset['y'] = `${i}`;
                cell.dataset['x'] = `${j}`;
                row.appendChild(cell);
            }
            document.querySelector(this.block).appendChild(row);
        }
    },
    respawn(){
        var start = Math.floor(this.size / 2); // получаем начальные координаты
        var snakeHead = document.querySelector(`[data-y="${start}"][data-x="${start}"]`);
        snakeHead.classList.add('snake-unit');
        //тело змеи
        var snakeBody = document.querySelector(`[data-y="${start + 1}"][data-x="${start}"]`);
        snakeBody.classList.add('snake-unit');
        this.snake.push(snakeHead);
        this.snake.push(snakeBody);
    },
    createFood(){
        var foodCreated = false;
        while(!foodCreated){ // бесконечный цикл для создания еды
            var foodX = Math.floor(Math.random() * this.size); // Позиция еды по х
            var foodY = Math.floor(Math.random() * this.size); // Позиция еды по у
            var foodCell = document.querySelector(`[data-y="${foodY}"][data-x="${foodX}"]`);
            if(!foodCell.classList.contains('snake-unit') && !foodCell.classList.contains('food-unit')){
                foodCell.classList.add('food-unit');
                foodCreated = true
            }
        }
    },
    init(){
        var that = this;
        this.prepareGameField();
        document.querySelector('#snake-new-game').addEventListener('click', function(){
           that.startGame();
        });
        addEventListener('keydown', function(e){
           that.changeDirection(e);
        });
    },
    startGame(){
        var that = this;
        this.isRunning = true;
        // Сброс параметров игры
        this.direction = 'y+';
        this.prevDirection = 'y+';
        this.score = 0;
        for (var el of this.snake){
            el.classList.remove('snake-unit');
        }
        this.snake = [];
        var units = [...document.querySelectorAll('.food-unit')];
        for (var elem of units){
            elem.classList.remove('food-unit');
        }

        // Запуск новой игры
        clearInterval(this.snakeTimer);
        this.respawn();
        this.snakeTimer = setInterval(function () {
            that.move();
        }, this.speed); // запускаем move через каждые speed мс
        this.createFood();
    },
    finishGame(){
      this.isRunning = false;
      clearInterval(this.snakeTimer);
      if(this.score < (this.size ** 2)){
          alert(`Вы проиграли!\nВаш результат ${this.score}`);
      } else {
          alert(`Вы победили!\nВаш результат ${this.score}`);
      }
    },
    changeDirection(event){
        switch(event.keyCode){
            case 37: //клавиша влево
                if(this.prevDirection !== 'x+'){
                    this.direction = 'x-'
                }
                break;
            case 38: //клавиша вверх
                if(this.prevDirection !== 'y+'){
                    this.direction = 'y-'
                }
                break;
            case 39: //клавиша вправо
                if(this.prevDirection !== 'x-'){
                    this.direction = 'x+'
                }
                break;
            case 40: //клавиша вниз
                if(this.prevDirection !== 'y-'){
                    this.direction = 'y+'
                }
                break;
        }
    },
    haveFood(unit){
      if(unit.classList.contains('food-unit')){
          unit.classList.remove('food-unit');
          this.createFood();
          this.score++;
          return true
      }
      return false
    },
    move(){
        var newUnit;
        // текущая ячейка для хвоста
        var coordY = +this.snake[this.snake.length - 1].dataset.y;
        var coordX = +this.snake[this.snake.length - 1].dataset.x;
        // Новая ячейка
        switch (this.direction){
            case 'x-':
                newUnit = document.querySelector(`[data-y="${coordY}"][data-x="${coordX -= 1}"]`);
                break;
            case 'x+':
                newUnit = document.querySelector(`[data-y="${coordY}"][data-x="${coordX += 1}"]`);
                break;
            case 'y-':
                newUnit = document.querySelector(`[data-y="${coordY -= 1}"][data-x="${coordX}"]`);
                break;
            case 'y+':
                newUnit = document.querySelector(`[data-y="${coordY += 1}"][data-x="${coordX}"]`);
                break;
        }
        if(this.snake.indexOf(newUnit) === -1 && newUnit !== null){
            newUnit.classList.add('snake-unit');
            this.snake.push(newUnit);
            this.snake[this.snake.length - 1].dataset['y'] = `${coordY}`;
            this.snake[this.snake.length - 1].dataset['x'] = `${coordX}`;
            if(!this.haveFood(newUnit)){
                this.snake.shift().classList.remove('snake-unit');
            }


        } else {
            // end game
            this.finishGame();
        }
        this.prevDirection = this.direction;
    }
};
snakeGame.init();