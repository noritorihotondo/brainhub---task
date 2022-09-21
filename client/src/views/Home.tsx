import React from 'react';
import styled from 'styled-components';
import { Box } from '@mui/material';
import { Link, Typography, MainWrapper } from '../components';

const LinksWrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 20px;
  gap: 30px;
`;

export const Home = () => {
  return (
    <>
      <MainWrapper>
        <Typography variant="h2" text="Home"></Typography>
        <LinksWrapper>
          <Link to="/create-user" text="Create User" />
          <Link to="/create-event" text="Create Event" />
        </LinksWrapper>
      </MainWrapper>
    </>
  );
};
