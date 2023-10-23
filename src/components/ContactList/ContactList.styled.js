import styled from 'styled-components';

export const ContactListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  margin: 8px;
  font-size: 28px;

  width: 100%;
  button {
    background-color: #00ffff;
    color: white;
    border: none;
    padding: 4px 8px;
    border-radius: 4px;
    cursor: pointer;
    margin-left: 20px;
    font-size: 24px;

    &:hover {
      background-color: #7fff00;
    }
  }
`;
