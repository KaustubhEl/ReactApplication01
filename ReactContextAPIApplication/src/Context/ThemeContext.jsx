import React, { createContext, useState } from 'react'

export const context = createContext();
const ThemeContext = (prop) => {

    const [theme, setTheme] = useState('light')

  return (
    <div>

<context.Provider value={[theme,setTheme]}>   
    {prop.children}
</context.Provider>
    </div>
 
  )
}

export default ThemeContext
