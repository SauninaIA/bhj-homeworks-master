let menuItems = Array.from(document.getElementsByClassName('menu__item'))
let subMenuItems = Array.from(document.querySelectorAll('.menu_sub li'))

console.log(subMenuItems)

for (let i = 0; i < menuItems.length; i++) {
    let item = menuItems[i]
    item.onclick = () => {
        let element = item.querySelector('.menu_sub')
        if (element) {
            if (element.classList.contains('menu_active')) {
                element.classList.remove('menu_active');
                return false;
            } else {
                hideOtherMenu()
                element.classList.add('menu_active');
            }
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


for (let i = 0; i < subMenuItems.length; i++) {
    let item = subMenuItems[i];
    let link = item.querySelector('.menu__link').href;
    console.log(link)
    item.addEventListener('click', function() {
            window.location.href = link;
        });
}
