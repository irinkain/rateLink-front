import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link as Lnk } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles } from '@material-ui/core/styles'
import CardView from '../../../components/CardView'
import {
  getAllListFailure,
  getAllListRequest,
  updateLinkRequest
} from '../actions/linkActions'
import { Button } from '@material-ui/core'
import { removeToken } from '../../../utils/auth'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 140,
    width: 100
  },
  control: {
    padding: theme.spacing(2)
  },
  link: {
    marginRight: 30,
    marginBottom: 30
  },
  linkWrapper: {
    marginBottom: 30,
    display: 'flex',
    justifyContent: 'space-between'
  }
}))

const Link = ({ data, isLoading, getAllLink, updateLink, react }) => {
  const classes = useStyles()

  const handleLogout = () => {
    removeToken()
    window.location = '/sign-in'
  }

  useEffect(() => {
    getAllLink()
  }, [])

  console.log(data)

  return (
    <section>
      <div className={classes.linkWrapper}>
        <Lnk className={classes.link} to="/add-link">
          ლინკის დამატება
        </Lnk>
        <Button variant="contained" color="primary" onClick={handleLogout}>
          გასვლა
        </Button>
      </div>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={8}>
            {isLoading ? (
              <CircularProgress />
            ) : (
              data.map(value => (
                <Grid key={value.id} item>
                  <CardView
                    data={value}
                    updateLink={updateLink}
                    react={react}
                  />
                </Grid>
              ))
            )}
          </Grid>
        </Grid>
      </Grid>
    </section>
  )
}

const mapStateToProps = state => {
  return {
    isLoading: state.link.get('isLoading'),
    data: state.link.get('data'),
    react: state.link.get('react')
  }
}
const mapDispachToProps = dispach => ({
  getAllLink: () => dispach(getAllListRequest()),
  updateLink: payload => dispach(updateLinkRequest(payload))
})

export default connect(mapStateToProps, mapDispachToProps)(Link)
