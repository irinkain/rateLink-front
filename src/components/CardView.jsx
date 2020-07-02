import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import '../module/link/main.css'
import { substractDate } from '../utils/dateConvert'

const useStyles = makeStyles({
  root: {
    width: 345
  },
  media: {
    height: 180
  },
  iconWrapper: {
    padding: 10
  }
})

const CardView = ({ data, updateLink }) => {
  const classes = useStyles()
  const photo = data.url
  let categories = ''
  const react = data.react ? data.react.id : 0
  data.categories.map(value => {
    categories += value.title + ',' + ' '
  })
  const handleReactClick = (e, item) => {
    const updateData = {
      id: data.id,
      react: item
    }
    updateLink(updateData)
  }
  const minute = substractDate(data.created_at)
  if (minute > 3 && data.isVisable === true) {
    const updateData = {
      id: data.id,
      isVisable: false
    }
    updateLink(updateData)
  }

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={photo}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {data.title}
          </Typography>
          <Typography gutterBottom variant="h6" component="h4">
            catogory : {categories}
          </Typography>
        </CardContent>
      </CardActionArea>
      {data.isVisable && (
        <CardActions>
          <div className={classes.iconWrapper}>
            <div className="icon-container">
              <button
                type="button"
                onClick={e => handleReactClick(e, 1)}
                className={`${react === 1 && 'active'}`}
              >
                <i className="fas fa-thumbs-up" />
              </button>
              <button
                type="button"
                onClick={e => handleReactClick(e, 2)}
                className={`${react === 2 && 'active'}`}
              >
                <i className="fas fa-thumbs-down" />
              </button>
              <button
                type="button"
                onClick={e => handleReactClick(e, 3)}
                className={`${react === 3 && 'active'}`}
              >
                <i className="fas fa-times-circle" />
              </button>
            </div>
          </div>
        </CardActions>
      )}
    </Card>
  )
}

export default CardView
