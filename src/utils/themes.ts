interface Theme {
    name: string;
    background: string;
}


export const Themes : Theme[] = [
    {
        "name": "light",
        "background": "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)"
    },
    {
        "name": "dark",
        "background": "linear-gradient(to top right, #434343 0%, #000000 100%)"
    },
    {
        "name": "light2",
        "background": "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)"
    }
]