let map, cityBuildings, options;
initWorld();
displayWorldMap();


function displayWorldMap() {
    let worldMap = document.createElement('table');
    worldMap.classList.add('table', 'tabel-joc');
    for (let i = 0; i < map.length; i++) {
        let row = document.createElement('tr');
        options = [
            {name: '<i class="fas fa-sign-in-alt"></i>', cbk: 'enterCity()'},
            {name: '<i class="fas fa-khanda"></i>', cbk: ''}
        ];

        for (let j = 0; j < map[i].length; j++) {
            row.innerHTML += map[i][j] === 0 ? '<td></td>\n' : `<td onclick="displayOptions(options)"><i class="fab fa-fort-awesome"></i></td>\n`;
        }
        worldMap.appendChild(row)
    }
    let container = document.getElementById('container');
    container.innerHTML = '';
    container.appendChild(worldMap);
}

function enterCity() {
    let city = document.createElement('table');
    city.classList.add('table', 'city-table');
    for (let i = 0; i < cityBuildings.length; i++) {
        let row = document.createElement('tr');
        for (let j = 0; j < cityBuildings[i].length; j++) {
            let cell = document.createElement('td');

            if ((i === 0 || i === 9) && j === 4) cell.style.borderRight = '4px solid darkblue';
            if ((j === 0 || j === 9) && i === 4) cell.style.borderBottom = '4px solid darkblue';
            if ((j === 1 || j === 9) && i < 9 && i > 0) cell.style.borderLeft = '4px solid darkblue';
            if ((i === 1 || i === 9) && j < 9 && j > 0) cell.style.borderTop = '4px solid darkblue';

            switch (cityBuildings[i][j]) {
                case 1:
                    cell.colSpan = 2;
                    cell.rowSpan = 2;
                    cell.innerHTML = '<i class="fab fa-fort-awesome"></i>';
                    break;
                case 2:
                    continue;
            }
            row.appendChild(cell);
        }
        city.appendChild(row);
    }
    let container = document.getElementById('container');
    container.innerHTML = '';
    container.appendChild(city);
    let options = [{name: '<i class="fas fa-globe"></i>', cbk: 'displayWorldMap()'}];
    displayOptions(options);
}

function initWorld() {
    map = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];

    cityBuildings = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 2, 0, 0, 0, 0],
        [0, 0, 0, 0, 2, 2, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
}


function displayOptions(options) {
    let optionsTable = document.createElement('table');
    let container = document.getElementById('container');

    optionsTable.classList.add('table', 'city-table');

    let row = document.createElement('tr');
    for (let i = 0; i < options.length; i++) {
        row.innerHTML += '<td onclick="' + options[i].cbk + '">' + options[i].name + '</td>\n';
    }

    optionsTable.appendChild(row);
    if (container.childNodes.length>1) container.removeChild(container.childNodes[1]);
    container.appendChild(optionsTable);
}