import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      margin: 0 0 10px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    span {
      color: rgba(855, 155, 25, 0.8);
      font-weight: bold;
      align-self: flex-start;
      margin: 0 0 10px;
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #ddd;
      font-weight: bold;
      color: #333;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.3s;

      &:hover {
        background: ${darken(0.04, '#bbb')};
      }
    }
  }

  > button {
    width: 100%;
    margin: 5px 0 0;
    height: 44px;
    background: rgba(0, 0, 0, 0.6);
    font-weight: bold;
    color: #aaa;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.3s;

    &:hover {
      background: ${darken(0.2, '#f00')};
    }
  }
`;
