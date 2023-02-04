export const context = {
  createContext: `import { createContext } from 'react'

export const ContextName = createContext(initialValue)`,
  contextProvider: `<ContextName.Provider value={value}>
  <App />
</ContextName.Provider>`,
  contextConsumer: `<ContextName.Consumer>
  {value=> <div>{value}</div>}
</ContextName.Consumer>`,
  useContextBasic: `import { useContext } from 'react'
import { ContextName } from './ContextName'
  
const contextValue = useContext(ContextName)`,
  useContextDP: `const {value}= useContext(ContextName)`,
  useContextExample: `const ChangeTheme = () => {
    const [mode, setMode] = useState('light')
  
    const handleClick = () => {
      setMode(mode === 'light' ? 'dark' : 'light')
    }
  
    const ThemeContext = createContext(mode)
  
    const theme = useContext(ThemeContext)
  
    return (
      <div
        style={{
          background: theme === 'light' ? '#eee' : '#222',
          color: theme === 'light' ? '#222' : '#eee',
          display: 'grid',
          placeItems: 'center',
          minWidth: '320px',
          minHeight: '320px',
          borderRadius: '4px'
        }}
      >
        <p>Выбранная тема: {theme}.</p>
        <button onClick={handleClick}>Поменять тему оформления</button>
      </div>
    )
  }`,
};
