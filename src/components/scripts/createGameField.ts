
const createGameField = function(): string[][] {
    const size: number = 10;
    let field: string[][] = new Array(size);
    for (let i = 0; i < field.length; i+=1)
        field[i] = new Array(size).fill('empty');

    for (let i = 0; i < 1; i++)
        createShip(field, 4);
    for (let i = 0; i < 2; i++)
        createShip(field, 3);
    for (let i = 0; i < 3; i++)
        createShip(field, 2);
    for (let i = 0; i < 4; i++)
        createShip(field, 1);
    return field;
};

const createShip = function (field: string[][], sizeShip: number): void {
    while(true) {
        //The position of the ship: horizontally or vertically.
        let typeShip: boolean = Math.random()*2 < 1;

        let i:number = Math.floor( typeShip ? Math.random()*10 : Math.random()* 6);
        let j:number = Math.floor( typeShip ? Math.random()*6 : Math.random()* 10);

        let flagBadPosition: boolean = false;
        for (let k = 0; k < sizeShip; k++) {
            if (typeShip) {
                if (field[i][j + k] !== 'empty') flagBadPosition = true;

            } else {
                if (field[i + k][j] !== 'empty') flagBadPosition = true;
            }
        }

        if (flagBadPosition) {
            continue;
        }

        for (let k = 0; k < sizeShip; k++) {
            if (typeShip)
                field[i][j + k] = 'ship';
            else
                field[i + k][j] = 'ship';
        }

        markFieldAroundShip(field, sizeShip, i, j, typeShip);
        return;
    }
};

const markFieldAroundShip = function(field: string[][], sizeShip: number, _i:number,
                                     _j:number, typeShip:boolean): void {
    if (typeShip) {
        for (let j = _j-1; j <= _j+sizeShip; j++)
            for (let i = _i-1; i < _i+2; i++)
                if (i >= 0 && i < field.length)
                    if (j >= 0 && j < field.length)
                        if (field[i][j] === 'empty')
                            field[i][j] = 'ship field';
    } else
    {
        for (let i = _i-1; i <= _i+sizeShip; i++)
            for (let j = _j-1; j < _j+2; j++)
                if (i >= 0 && i < field.length) //Защита от выхода
                    if (j >= 0 && j < field.length) //За границы массива
                        if (field[i][j] === 'empty')
                            field[i][j] = 'ship field';
    }
};

export default createGameField;