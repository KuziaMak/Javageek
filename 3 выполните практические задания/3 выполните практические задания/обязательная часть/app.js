'use strict';

let fitlerPopup = document.querySelector('.filterPopup');
let fitlerLabel = document.querySelector('.filterLabel');
let filterIcon = document.querySelector('.filterIcon');

fitlerLabel.addEventListener('click', function () {
    fitlerPopup.classList.toggle('hidden');
    fitlerLabel.classList.toggle('filterLabelPink');
    filterIcon.classList.toggle('filterIconPink');

    if (filterIcon.getAttribute('src') === 'images/filter.svg') {
        filterIcon.setAttribute('src', 'images/filterHover.svg')
    } else {
        filterIcon.setAttribute('src', 'images/filter.svg')
    }
});

let filterHeaders = document.querySelectorAll('.filterCategoryHeader');
filterHeaders.forEach(function (header) {
    header.addEventListener('click', function (event) {
        event.target.nextElementSibling.classList.toggle('hidden');
    })
});

let filterSizes = document.querySelector('.filterSizes');
let filterSizeWrap = document.querySelector('.filterSizeWrap');
filterSizeWrap.addEventListener('click', function () {
    filterSizes.classList.toggle('hidden');
});

let buyWeb = document.querySelector(".cartIconWrap")
let buy = 0
buyWeb.childNodes[3].innerText = buy
let summ = 0
let mass = {}
let content = "" // display: none;
let basket = document.querySelector(".basket")
buyWeb.addEventListener("click", (event) => { basket.classList.toggle("displayN") })
let featuredImgAll = document.querySelectorAll(".featuredImgDark > button ")
featuredImgAll.forEach((even) => {
    even.addEventListener("click", (elem) => {
        if (mass[elem.path[elem.path.length - 7].childNodes[3].firstElementChild.innerText] === undefined) {
            mass[elem.path[elem.path.length - 7].childNodes[3].firstElementChild.innerText] = {
                quantity: 1,
                price: +elem.path[elem.path.length - 7].childNodes[3].lastElementChild.innerText.substring(1)
            }

        } else {
            mass[elem.path[elem.path.length - 7].childNodes[3].firstElementChild.innerText].quantity += 1
        }
        buy = 0
        summ = 0
        content = ""
        for (let key in mass) {
            buy += 1
            summ += mass[key].price * mass[key].quantity
            content += `
            <tr>
        <th>${key}</th>
        <th>${mass[key].quantity}</th>
        <th>${mass[key].price}</th>
        <th>${mass[key].quantity * mass[key].price}</th>
       </tr>
            `
        }
        buyWeb.childNodes[3].innerText = buy

        basket.innerHTML = `<tr>
        <th>Название товара</th>
        <th>Количество</th>
        <th>Цена</th>
        <th>Итого</th>
       </tr>
       ${content}
       <tr>
        <td colspan="4" style="text-align: right;">Товар в корзине на сумму: ${summ}</td>
       </tr> `

    })
}) //elem.path[3].childNodes[3].firstElementChild.innerText
// +elem.path[3].childNodes[3].lastElementChild.innerText.substring(1)