import { FC } from 'react';

import { Divider, Grid } from '@mui/material';

import { ElectoralLayout } from '../layouts/electoralLayout';
import { InquiryForm, InquiryInfo, TableVoting } from '../components';

export const ElectionPage:FC = () => {
  return (
    <ElectoralLayout>
      <Grid
        margin="0 auto"
        width="90%"
        display="flex"
        justifyContent="start"
        alignContent="center"
        flexDirection="column"
      >
        <InquiryInfo />

        <Grid container spacing={3} sx={{ margin: '0 auto' }}>
          <Grid item xs={12} sm={12} md={4} padding="20px">
            <InquiryForm />
          </Grid>

          <Divider orientation="vertical" flexItem />

          <Grid
            item
            xs={11}
            sm={11}
            md={7}
            display="flex"
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
          >
            <TableVoting />
          </Grid>
        </Grid>
      </Grid>
    </ElectoralLayout>
  );
};
