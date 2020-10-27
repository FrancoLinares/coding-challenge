import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
// Material-UI
import TextField from '@material-ui/core/TextField'
import Alert from '@material-ui/lab/Alert'
// Styles
import '../../assets/search.scss'
// External lib
import axios from 'axios'
// Lib
import createUrl from '../../lib/requests/createUrl.ts'

function Search() {
  // States
  const [searchText, setSearchText] = useState('')
  const [searchError, setSearchError] = useState(null)
  const [movies, setMovies] = useState(null)
  const initialRender = useRef(true)
  // Functions
  const onChange = (e) => {
    const { value } = e.target
    setSearchText(value)
  }

  useEffect(() => {
    // Avoid excecute search function on initial render
    if (initialRender.current) {
      initialRender.current = false
    } else {
      if (searchText.length >= 3) {
        searchMovie()
        setSearchError(null)
      } else {
        // Get rid of Alert if text field is empty
        if (searchText.length === 0) {
          setSearchError(null)
        } else {
          setSearchError('Write a little bit more')
        }
      }
    }
  }, [searchText])

  const searchMovie = async () => {
    try {
      const url = createUrl(searchText)
      const req = await axios.get(url)
      setMovies(req.data.results)
    } catch (e) {
      console.log(`Axios request failed: ${e}`)
    }
  }

  return (
    <>
      <TextField
        fullWidth
        id="movie"
        label="Find Movie"
        variant="outlined"
        name="search"
        value={searchText}
        onChange={onChange}
      />
      {searchError && (
        <Alert severity="info" className="alert">
          This is an info alert — check it out!
        </Alert>
      )}
      {/* <MoviesList /> */}
    </>
  )
}

Search.propTypes = {}

export default Search
