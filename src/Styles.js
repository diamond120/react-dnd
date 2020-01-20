import React from "react";
import styled from "styled-components";

//  Breakpoints for screensizes
export const MAX_BREAKPOINTS = {
  XXS: '450px',
  XS: '599.9px',
  SM: '959.9px',
  MD: '1279.9px'
};

export const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Grid = styled.div`
  width: 1000px;
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
`;

export const GridImage = styled.div`
  flex-grow: 1;
  border: 1px solid white;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: ${props => `url("${props.src}")`};
  background-size: cover;
  background-position: 50%;
`;

const GridItemWrapper = styled.div`
  flex: 0 0 33.3%;
  display: flex;
  justify-content: center;
  align-items: stretch;

  box-sizing: border-box;
  cursor: pointer;

  :before {
    content: "";
    display: table;
    padding-top: 100%;
  }
  
  @media (max-width: ${MAX_BREAKPOINTS.SM}) {
    flex: 0 0 50%;
  }
  @media (max-width: ${MAX_BREAKPOINTS.XXS}) {
    flex: 0 0 100%;
  }
`;

export const GridItem = ({ forwardedRef, ...props }) => (
  <GridItemWrapper ref={forwardedRef} {...props} />
);
