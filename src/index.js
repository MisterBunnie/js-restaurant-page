import { initialPageLoad } from './initial-page-load'

initialPageLoad()

// Tab Switching module
let tabSwitchingModule = (function () {
    const homeTab = document.createElement('.home')
    homeTab.addEventListener('click', initialPageLoad)

    const menuTab = document.createElement('.menu')
    menuTab.addEventListener('click', menu)

    const contactTab = document.createElement('.contact')
    contactTab.addEventListener('click', contact)
})()
