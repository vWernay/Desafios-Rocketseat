var theme = ''
const checkbox = document.getElementById('checkbox');

window.onload = function() {
    syncTheme()
};

checkbox.addEventListener('change', () => {
    switchTheme()
})

function syncTheme () {
    const localStorageTheme = localStorage.getItem("user-theme")
    if (localStorageTheme) {
        theme = localStorageTheme
        document.documentElement.className = theme
    } else {
        localStorage.setItem("user-theme", 'light')
    }
    switch (theme) {
        case 'light':
            checkbox.checked = false
            break
        case 'dark':
            checkbox.checked = true
            break
        default:
            checkbox.checked = false
    }
}

function switchTheme () {
    switch (theme) {
        case 'light':
            theme = 'dark'
            break
        case 'dark':
            theme = 'light'
            break
        default:
            theme = 'light'
    }
    localStorage.setItem("user-theme", theme)
    document.documentElement.className = theme
}