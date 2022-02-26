/**
 * NodeList.prototype.forEach() polyfill
 * https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach#Polyfill
 */
if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}



// Sidebar hamburger

const sidebarToggleBtn = document.querySelector('.menu-icon-wrapper');
const menuIcon = document.querySelector('.menu-icon');
const sidebar = document.querySelector('.sidebar');


sidebarToggleBtn.onclick = function () {
    menuIcon.classList.toggle('menu-icon-active');
    sidebar.classList.toggle('sidebar--mobile-active');
}


// ------------------------- Клик по кнопке и показ 3 скрытых карточек ----------------------

const btnShowMoreCards = document.querySelector('.btn-more');
const hiddenCards = document.querySelectorAll('.hidden-cards');

btnShowMoreCards.addEventListener('click', () => {

    hiddenCards.forEach((elem) => {
        elem.classList.toggle('hidden-cards')
    })
})

// ------------------------- Показать скрыть ввиджеты -------------------------

const widgets = document.querySelectorAll('.widget');


widgets.forEach(widget => {
    widget.addEventListener('click', (e) => {
        if (e.target.classList.contains('widget__title')) {
            e.target.classList.toggle('widget__title--active');
            e.target.nextElementSibling.classList.toggle('widget__body--hidden');
        }
    })
})


// ------------------- WIDGET LOCATION НАЧАЛО -------------------------------------


const checkBoxAny = document.querySelector('#location-05');
const allLocationCheckboxes = document.querySelectorAll('.location__checkbox');
const topLocationCheckboxes = document.querySelectorAll('[data-location-param]');

// Клик по кнопке "Любая" и отключение других чекбоксов
checkBoxAny.addEventListener('change', function () {
    if (checkBoxAny.checked) {
        allLocationCheckboxes.forEach(item => {
            item.checked = false;
            checkBoxAny.nextElementSibling.classList.add('location__btn-active');
        })
    }
})

//  Убираем подсветку кнопки "Любая" при включенных чекбоксах
topLocationCheckboxes.forEach(function (item) {
    item.addEventListener('change', function () {
        checkBoxAny.nextElementSibling.classList.remove('location__btn-active');
    })
})

// ------------------- WIDGET LOCATION КОНЕЦ-------------------------------------


// ------------------- WIDGET ДОП. ОПЦИИ НАЧАЛО -------------------------------------

const showMoreOptions = document.querySelector('.widget__show-hidden');
const hiddenCheckBoxes = document.querySelectorAll('.checkbox--hidden');

const changeButtonInnerHTML = function () {
    showMoreOptions.innerHTML =
        (showMoreOptions.innerHTML === 'Показать еще')
            ? showMoreOptions.innerHTML = 'Скрыть'
            : showMoreOptions.innerHTML = 'Показать еще';
}

// Скрываем/показваем доп. опции + меняем текст кнопки

showMoreOptions.onclick = function (e) {
    e.preventDefault();

    if ((showMoreOptions.innerHTML === 'Показать еще')) {
        hiddenCheckBoxes.forEach(function (item) {
            item.classList.remove('checkbox--hidden');
            changeButtonInnerHTML();
        })
    } else {
        hiddenCheckBoxes.forEach(function (item) {
            item.classList.add('checkbox--hidden');
            changeButtonInnerHTML();
        })
    }
}


// ------------------- WIDGET ДОП. ОПЦИИ КОНЕЦ -------------------------------------

