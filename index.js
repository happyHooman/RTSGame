let map, cityBuildings;
initWorld();
displayWorldMap();
addControls();


function displayWorldMap() {
    let worldMap = document.createElement('table');
    worldMap.classList.add('table', 'tabel-joc');
    for (let i = 0; i < map.length; i++) {
        let row = document.createElement('tr');
        for (let j = 0; j < map[i].length; j++) {
            row.innerHTML += map[i][j] === 0 ? '<td></td>\n' : '<td onclick="enterCity()"><i class="fab fa-fort-awesome"></i></td>\n';
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
    console.log(city);
    let container = document.getElementById('container');
    container.innerHTML = '';
    container.appendChild(city);
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

function addControls() {
    let keyboardControl = (e) => { if (e.keyCode === 87) displayWorldMap()};
    window.addEventListener('keydown', keyboardControl);
}