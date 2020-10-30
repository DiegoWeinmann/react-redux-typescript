import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ThemeProvider, theme, CSSReset } from '@chakra-ui/core'
import store from './redux/store'
import { Provider } from 'react-redux'

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<CSSReset />
				<App />
			</ThemeProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
)
