// index.js
import React from 'react'
import ReactDOM from 'react-dom'
// Babel
import '@babel/polyfill'
// Material-UI
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
// Custom Components
import Search from './components/containers/search'
// Styles
import '../src/assets/app.scss'

const App = () => {
  return (
    <>
      <CssBaseline />
      <Container className="containerPadding">
        <Search />
      </Container>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
