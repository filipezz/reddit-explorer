import styled from 'styled-components';

interface LabelProps {
  textColor: string;
}

export const Posts = styled.div`
  margin: 0 50px;
  border: 1px solid #626262;
  border-radius: 5px 5px 0 0;

  a {
    background: #1a1a1b;
    width: 100%;
    padding: 8px;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: flex-start;
    transition: transform 0.2s ease-in-out;
    border: 1px solid #1a1a1b;
    border-bottom: 1px solid #626262;

    picture {
      width: 80px;
      height: 60px;
      border-radius: 3px;
      background: #333;
      display: flex;
      svg {
        margin: auto;
      }
    }

    &:hover {
      border: 1px solid #d7dadc;
    }
    &:last-of-type {
      border-radius: 0 0 5px 5px;
    }
    &:first-of-type {
      border-radius: 5px 5px 0 0;
    }
    img {
      width: 80px;
      height: 60px;
      border-radius: 3px;
      background: #333;
    }

    div {
      margin-left: 16px;
      flex: 1;

      strong {
        color: #d7dadc;
        line-height: 1.4em;
      }
      p {
        color: rgb(129, 131, 132);
        margin-top: 8px;
        margin-right: 3px;
        font-size: 12px;
        display: block;
      }
    }
    svg {
      margin-left: auto;
      color: #cbcbcb;
    }
  }
`;

export const Label = styled.span<LabelProps>`
  color: ${(props) => (props.textColor === 'light' ? 'white' : 'black')};
  font-weight: bold;
  padding: 3px 8px;
  border-radius: 10px;
  font-size: 12px;
  margin-right: 5px;

  &:hover {
    opacity: 0.8;
  }
`;
