import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  padding: 0 50px;
  align-items: center;
  margin-bottom: 16px;
  background: #1a1a1b;

  img {
    border-radius: 50%;
    background: #fff;
    height: 90px;
    width: 90px;
    margin-right: 15px;
  }
  h1 {
    font-size: 28px;
    margin-bottom: 5px;
    color: #d7dadc;
  }
  p {
    color: #818384;
    font-size: 14px;
    display: block;
  }
`;
export const Navigation = styled.div`
  margin: 0 50px;
  background: #1a1a1b;
  height: 56px;
  border: 1px solid #626262;
  margin-bottom: 16px;
  border-radius: 5px;
  padding: 0 12px;
  display: flex;
  align-items: center;

  a {
    border-radius: 17px;
    text-decoration: none;
    border: 0;
    padding: 0 10px;
    display: flex;
    align-items: center;
    font-size: 16px;
    color: #d7dadc;
    margin-right: 8px;
    background: 0;
    height: 32px;

    svg {
      margin-right: 4px;
    }

    &:hover {
      background: #272729;
    }
  }
`;
export const LoadMore = styled.div`
  display: flex;
  margin-top: 20px;

  button {
    margin: 0 auto;
    border-radius: 6px;
    height: 40px;
    border: 0;
    padding: 0 8px;
    text-transform: uppercase;
    font-weight: bold;
    background: #d7dadc;

    &:hover {
      background: #eee;
    }
  }
`;
