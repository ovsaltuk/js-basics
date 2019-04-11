const chess = {
    chessContainer: document.getElementById('tableChess'),

    renderMap () {
        for (let row = 0; row < 10; row++) { //создаем строки
            const tr = document.createElement('tr');
            this.chessContainer.appendChild(tr);

            for (let cell = 0; cell < 10; cell++){ //создаем ячейки
                const td = document.createElement('td');
                this.chessContainer.appendChild(td);

                const letterArr = [ '','a','b','c','d', 'e','f','g','h',''];
                if (row === 0 || row === 9){
                    td.innerHTML = letterArr[cell];
                }
                const numberArr = ['0', '8', '7', '6', '5', '4', '3', '2', '1'];
                if ((row !== 0 && row !== 9 && cell === 0) || (row !== 0 && row !== 9 && cell === 9)){
                    td.innerHTML = numberArr[row];
                }


                if(this.isCellBlack(row, cell)){
                        td.style.backgroundColor = '#989898';
                    }
            }

        }

    },

    isCellBlack (rowNum, colNum) {
       if((colNum > 0 && colNum < 9 && rowNum > 0 && rowNum < 9 && (rowNum % 2 === 0 && colNum % 2 !== 0)) ||
           (colNum > 0 && colNum < 9 && rowNum > 0 && rowNum < 9 && (rowNum % 2 !== 0 && colNum % 2 === 0)))
            return true
    },
};

chess.renderMap();


