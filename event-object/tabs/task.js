let tabs = Array.from(document.querySelectorAll('.tab'))
let tabContent = Array.from(document.querySelectorAll('.tab__content'))


for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', changeTab);
  }

function changeTab (event) {
    let currentTab = (element) => element.classList.contains('tab_active');
    let currentTabInd = tabs.findIndex(currentTab);
    tabs[currentTabInd].classList.remove('tab_active');
    tabContent[currentTabInd].classList.remove('tab__content_active');
    let newIndex = tabs.indexOf(event.target)
    tabs[newIndex].classList.add('tab_active');
    tabContent[newIndex].classList.add('tab__content_active');
}