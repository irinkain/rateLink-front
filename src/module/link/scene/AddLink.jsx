import React, { useEffect, useState, useRef } from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'

import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { getAllCategoryRequest } from '../../categories/actions/categoryActions'
import { createLinkRequest } from '../actions/linkActions'

const useStyles = makeStyles(theme => ({
  root: {
    width: 500,
    '& > * + *': {
      marginTop: theme.spacing(3)
    }
  }
}))

const AddLink = ({ isLoading, getAllCategory, data, createLink }) => {
  const classes = useStyles()

  const [categories, setCategories] = useState([])
  let titleInput = useRef(null)
  let imageUrl = useRef(null)

  const handleSelect = (option, value) => {
    const newValue = []
    value.map(elem => {
      newValue.push(elem.id)
    })
    setCategories(newValue)
  }

  const handleClick = () => {
    const title = titleInput.value
    const url = imageUrl.value
    createLink({
      title,
      isVisable: true,
      url,
      categories
    })
    window.location = '/'
  }

  useEffect(() => {
    getAllCategory()
  }, [])
  return (
    <div>
      <div>
        <TextField
          inputRef={element => (titleInput = element)}
          id="link-title"
          label="title"
          variant="outlined"
        />
      </div>
      <div>
        <TextField
          inputRef={element => (imageUrl = element)}
          id="Img-url"
          label="Image url "
          variant="outlined"
        />
      </div>
      <div className={classes.root}>
        <Autocomplete
          multiple
          id="category"
          options={isLoading ? [] : data}
          loading={isLoading}
          getOptionLabel={option => option.title}
          onChange={handleSelect}
          filterSelectedOptions
          renderInput={params => (
            <TextField
              {...params}
              variant="outlined"
              label="Choose category"
              placeholder="Choose category"
            />
          )}
        />
      </div>
      <div>
        <Button variant="contained" color="primary" onClick={handleClick}>
          Add link
        </Button>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    isLoading: state.category.get('isLoading'),
    data: state.category.get('data')
  }
}
const mapDispachToProps = dispach => ({
  getAllCategory: () => dispach(getAllCategoryRequest()),
  createLink: payload => dispach(createLinkRequest(payload))
})

export default connect(mapStateToProps, mapDispachToProps)(AddLink)
