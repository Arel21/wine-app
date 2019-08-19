window.onload = function() {
    // Initial list of wines
    let listWines = JSON.stringify([
        {
            name: 'Vinho do Porto',
            vineyard: 'Fonseca',
            variety: 'Tawny',
            year: 2013,
            alcohol: 20.5,
            country: 'Portugal'
        },
        {
            name: 'Vin de Bordeaux',
            vineyard: 'Château Margaux',
            variety: 'Red',
            year: 2018,
            alcohol: 19.0,
            country: 'France'
        },
        {
            name: 'Chianti',
            vineyard: 'Gaiole in Chianti',
            variety: 'White',
            year: 2010,
            alcohol: 22.0,
            country: 'Italy'
        }
    ]);

    // Check browser support for localStorage
    if (typeof(Storage) !== undefined) {
        localStorage.setItem("initialWines", listWines);
    }
    else {
        alert("Your browser does not support Web Storage. This webapp won't work.");
    }

    var modal = document.getElementById("newWine");
    var btn = document.getElementById("more");

    // Populate list with wines
    var listData = JSON.parse(localStorage.getItem("initialWines"));
    var list = document.getElementById("wines");

    for (var i = 0; i < listData.length; i++) {
        var wine = listData[i];
        var listItem = document.createElement("li");
        listItem.appendChild(document.createTextNode(wine.name));
        listItem.setAttribute('onclick', 'showDetails(event)');
        list.appendChild(listItem);
    }

    // Form to add more wines
    const form = document.querySelector('form');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        var listData = JSON.parse(localStorage.getItem("initialWines"));
        var list = document.getElementById("wines");

        var newName = document.getElementById("newName").value;
        var newVineyard = document.getElementById("newVineyard").value;
        var newVariety = document.getElementById("newVariety").value;
        var newYear = document.getElementById("newYear").value;
        var newAlcohol = document.getElementById("newAlcohol").value;
        var newCountry = document.getElementById("newCountry").value;

        listData.push(
            {
                name: newName,
                vineyard: newVineyard,
                variety: newVariety,
                year: newYear,
                alcohol: newAlcohol,
                country: newCountry
            }
        );

        localStorage.setItem("initialWines", JSON.stringify(listData));

        var listItem = document.createElement("li");
        listItem.appendChild(document.createTextNode(newName));
        listItem.setAttribute('onclick', 'showDetails(event)');
        list.appendChild(listItem);
        modal.style.display = "none";
    });

    btn.onclick = function() {
        modal.style.display = "block";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

/**
 * Shows details of selected wine.
 * @param {*} event list item selected.
 */
function showDetails(event) {
    var listData = JSON.parse(localStorage.getItem("initialWines"));
    for (var i = 0; i < listData.length; i++) {
        if (listData[i].name == event.target.innerText) {
            var wine = listData[i];
            document.getElementById("name").innerHTML = '';
            document.getElementById("name").appendChild(document.createTextNode(wine.name));
            document.getElementById("vineyard").innerHTML = '';
            document.getElementById("vineyard").appendChild(document.createTextNode(wine.vineyard));
            document.getElementById("variety").innerHTML = '';
            document.getElementById("variety").appendChild(document.createTextNode(wine.variety));
            document.getElementById("year").innerHTML = '';
            document.getElementById("year").appendChild(document.createTextNode(wine.year));
            document.getElementById("alcohol").innerHTML = '';
            document.getElementById("alcohol").appendChild(document.createTextNode(wine.alcohol));
            document.getElementById("country").innerHTML = '';
            document.getElementById("country").appendChild(document.createTextNode(wine.country));
        }
    }
}
