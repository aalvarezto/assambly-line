import React, { Component } from 'react';
import styled from 'styled-components';

const LoaderContainer = styled.div`
  svg {
    margin-top: 150px;
    margin-left: 45%;
  }
`;
const CarouselContainer = styled.div`
  position: relative;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  font-weight: bold;
  @keyframes display {
    0% {
      transform: translateX(150px);
      opacity: 0;
    }
    30% {
      transform: translateX(0);
      opacity: 1;
    }
    50% {
      transform: translateX(0);
      opacity: 1;
    }
    70% {
      transform: translateX(-150px);
      opacity: 0;
    }

    100% {
      transform: translateX(-150px);
      opacity: 0;
    }
  }
  .slide {
    position: absolute;
    top: 0;
    opacity: 0;
    animation: display 6s infinite;
    font-family: Inter !important;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: normal;
    text-align: center;
    color: #2b2b2b;
    width: 284px;
  }
  p:nth-child(2) {
    animation-delay: 3s;
  }
`;

type Props = {};

export default class Loader extends Component<Props> {
  render() {
    return (
      <LoaderContainer>
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
          display="block"
        >
          <circle
            cx="50"
            cy="50"
            fill="none"
            stroke="#fa6400"
            strokeWidth="8"
            r="30"
            strokeDasharray="141.37166941154067 49.12388980384689"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              repeatCount="indefinite"
              dur="1s"
              values="0 50 50;360 50 50"
              keyTimes="0;1"
            ></animateTransform>
          </circle>
        </svg>
        <CarouselContainer>{this.props.children}</CarouselContainer>
      </LoaderContainer>
    );
  }
}
