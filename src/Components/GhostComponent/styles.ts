import styled, { keyframes } from 'styled-components';

const blink = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0.3;
  }
`;

export const Container = styled.div`
  margin: 0 50px;
  background: #1a1a1b;
  padding: 8px;
  display: flex;
  border: 1px solid #626262;

  > div:first-child {
    width: 99px;
    height: 60px;
    border-radius: 3px;
    background: #272729;
    animation: ${blink} 0.7s ease-in-out alternate infinite;
  }

  section {
    width: 100%;
    margin-left: 16px;
    height: 100%;
    div {
      width: 375px;
      border-radius: 3px;
      height: 22px;
      background: #272729;
      animation: ${blink} 0.7s ease-in-out alternate infinite;
      &:nth-child(2) {
        margin-top: 8px;
        width: 75px;
        height: 10px;
      }
      &:nth-child(3) {
        margin-top: 8px;
        width: 55px;
        height: 10px;
      }
    }
  }
`;
export const Error = styled.div`
  text-align: center;
  margin-top: 50px;

  strong {
    font-size: 18px;
    color: #d7dadc;
  }
`;
