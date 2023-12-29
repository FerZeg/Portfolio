

const getTheme = () => 
    localStorage.getItem('theme') || 
        (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark')


const setTheme = (theme) => {
    localStorage.setItem('theme', theme)
    document.documentElement.setAttribute('data-theme', theme)
}

setTheme(getTheme())

  
window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (e) => {
    if(localStorage.theme !== 'light' && localStorage.theme !== 'dark')
        return
    if (e.matches) {
        setTheme('light')
    } else {
        setTheme('dark')
    }
})