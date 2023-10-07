import React from 'react';
import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const Layout = ({children}: Props) => {
  return <StyledLayout>{children}</StyledLayout>;
};

const StyledLayout = styled.div`
  min-width: 100%;
  min-height: 100vh;
  display: flex;
  background-color: cornflowerblue;
  //flex-direction: column;
  //align-items: center;
  //justify-content: center;
`;

export default Layout;
