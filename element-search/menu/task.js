let menuItems = Array.from(document.getElementsByClassName('menu__item'))

console.log(menuItems)

for (let i = 0; i < menuItems.length; i++) {
    let item = menuItems[i]
    item.onclick = () => {
        let element = item.querySelector('.menu_sub')
        if (element) {
            hideOtherMenu()
            element.classList.add('menu_active');
            return false
        }
    }
}

function hideOtherMenu() {
    let subMenu = Array.from(document.getElementsByClassName('menu_active'));
    
    for (let i = 0; i < subMenu.length; i++) {
		subMenu[i].classList.remove('menu_active');
	}

}
