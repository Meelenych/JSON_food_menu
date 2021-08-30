import menuItems from './menu.json';
// console.log(menuItems)
let { name, description, image, price, ingredients } = menuItems

import template from './templates/template.hbs'



const mainMenu = document.querySelector('.js-menu')
// console.log(mainMenu)
const menuLine = template(menuItems)

mainMenu.insertAdjacentHTML('afterbegin', menuLine)