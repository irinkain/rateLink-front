/* eslint-disable react/jsx-wrap-multilines */
import React from 'react'
import { connect } from 'react-redux'
import * as yup from 'yup'
import Avatar from '@material-ui/core/Avatar'
import { useForm, Controller } from 'react-hook-form'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { authUserRequest } from '../actions/authActions'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        Otar Terterashvili
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}))
const signInVS = yup.object().shape({
  identifier: yup.string().required('username required.'),
  password: yup
    .string()
    .required('password required.')
    .min(5, 'Password is too short - should be 5 chars minimum.')
})

const SignIn = ({ signInRequest, errorMsg, isError, isLogined }) => {
  if (isLogined) {
    window.location = '/'
  }
  const classes = useStyles()

  const { control, handleSubmit, errors } = useForm({
    defaultValues: {
      identifier: '',
      password: ''
    },
    validationSchema: signInVS
  })
  const onSubmit = submitData => {
    console.log(submitData)
    signInRequest(submitData)
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <Controller
            as={
              <TextField
                variant="outlined"
                margin="normal"
                error={!!(errors && errors['identifier'])}
                helperText={
                  errors && errors['identifier'] && errors['identifier'].message
                }
                required
                fullWidth
                id="identifier"
                label="username"
                name="identifier"
                autoFocus
              />
            }
            name="identifier"
            control={control}
          />
          <Controller
            as={
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                error={!!(errors && errors['password'])}
                helperText={
                  errors && errors['password'] && errors['password'].message
                }
                name="password"
                label="Password"
                type="password"
                id="password"
              />
            }
            name="password"
            control={control}
          />

          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
          {isError && (
            <Grid container>
              <Grid item xs>
                <Typography
                  component="p"
                  variant="subtitle1"
                  style={{ color: 'red' }}
                >
                  {errorMsg}
                </Typography>
              </Grid>
            </Grid>
          )}
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  )
}

const mapStateToProps = state => ({
  isLogined: state.auth.get('isLogined'),
  isLoading: state.auth.get('isLoading'),
  isError: state.auth.get('isError'),
  errorMsg: state.auth.getIn(['error', 'message'])
})

const mapDispatchToProps = dispatch => ({
  signInRequest: payload => dispatch(authUserRequest(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
