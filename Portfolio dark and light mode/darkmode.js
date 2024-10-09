let darkMode = localStorage.getItem('darkmode')
const darkLightModeToggle = document.getElementById('dark-light-toggle')

const enableDarkMode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
}

const disableDarkMode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', 'inactive')
}

if(darkMode === 'active')
    enableDarkMode()

darkLightModeToggle.addEventListener("click", () => {
    if (darkMode !== "active") {
        darkMode = 'active'
        enableDarkMode()
    } else {
        disableDarkMode()
        darkMode = 'inactive'
    }
});