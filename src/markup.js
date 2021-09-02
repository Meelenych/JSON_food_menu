//===================markup==========================
import menuItems from './menu.json';
// console.log(menuItems)
import template from './templates/template.hbs'
// console.log(template)


const mainMenu = document.querySelector('.js-menu')
// console.log(mainMenu)
const menuLine = template(menuItems)

mainMenu.insertAdjacentHTML('afterbegin', menuLine)

//===================themes==========================
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const body = document.querySelector('body')
// console.log(body)
const themeSwitch = document.querySelector('#theme-switch-toggle')
// console.log(themeSwitch)

// body.classList.add(Theme.LIGHT);

themeSwitch.addEventListener('click', (e) => {

    if (e.target.checked
    ) {
        body.classList.remove(Theme.LIGHT);
        body.classList.add(Theme.DARK);
        localStorage.removeItem('Theme');
        localStorage.setItem('Theme', Theme.DARK);
    }

    else {
        body.classList.remove(Theme.DARK);
        body.classList.add(Theme.LIGHT);
        localStorage.removeItem('Theme');
        localStorage.setItem('Theme', Theme.LIGHT);
    };

})
//===================switch binding to local storage==========================
    const localSotrageTheme = localStorage.getItem('Theme');
    // console.log(localSotrageTheme)

if (localSotrageTheme === Theme.DARK) {
        // body.classList.remove(Theme.LIGHT);
        body.classList.add(Theme.DARK);
        themeSwitch.checked = true;
    }

