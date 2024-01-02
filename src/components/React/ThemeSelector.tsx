import { Themes } from '../../utils/themes'
import { useState, useEffect } from 'react'
import './ThemeSelector.css'
export function ThemeSelector() {
    const handleClick = (theme: string) => {
        localStorage.setItem('theme', theme)
        setTheme(theme)
        document.documentElement.setAttribute('data-theme', theme)
    }
    const [themeState, setTheme] = useState<string | null>(null)
    useEffect(() => {
        const theme = localStorage.getItem('theme')
        setTheme(theme || 'light')
    }, [])
    return (
    <div className="themes-container">
            {Themes.map((theme) => (
                <div className="theme" key={theme.name}>
                    <div 
                    className={"background" + (themeState === theme.name ? " active" : "")}
                    style={{backgroundImage: theme.background}}
                    onClick={() => {
                        handleClick(theme.name)
                    }}
                    >
                        
                    </div>
                    <div className="theme__info">
                        <h4>{theme.name}</h4>
                    </div>
                </div>
            ))}
    </div>
    )
}

