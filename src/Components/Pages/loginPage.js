import React from 'react';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import { Grid, Card, Typography, Button } from '@material-ui/core';

const LoginPage = props => {
  return (
    <div>
      <Grid container spacing={2} justify='center' style={{ minHeigh: '100vh', maxWidth: '100%' }}>
        <Grid item xs={4} align='center' />
        <Grid item xs={4} align='center'>
          <Card style={{ padding: '1em', marginTop: '1em' }}>
            <Typography variant='h6'>Login to Wheelhouse</Typography>
            <Formik
              initialValues={{ username: '', password: '' }}
              onSubmit={(values, { setSubmitting }) => {
                // TODO:: replace with the actual api call...
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}>
              {({ isSubmitting }) => (
                <Form style={{ display: 'flex', flexWrap: 'wrap' }}>
                  <Field
                    name='username'
                    label='Username'
                    type='text'
                    component={TextField}
                    margin='normal'
                    required={true}
                    variant='outlined'
                    autoComplete='username'
                    fullWidth
                  />
                  <Field
                    name='password'
                    label='Password'
                    type='password'
                    component={TextField}
                    margin='normal'
                    required={true}
                    variant='outlined'
                    autoComplete='current-password'
                    fullWidth
                  />
                  <Button
                    variant='contained'
                    type='submit'
                    color='primary'
                    disabled={isSubmitting}
                    style={{ marginTop: '8px' }}
                    fullWidth>
                    Login
                  </Button>
                </Form>
              )}
            </Formik>
          </Card>
        </Grid>
        <Grid item xs={4} align='center' />
      </Grid>
    </div>
  );
};

export default LoginPage;
