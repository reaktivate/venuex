import React from 'react';
import styled from 'styled-components';

const Table = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  border-radius: 2px;
  background-color: #ffffff;
  width: 100%;
  box-sizing: border-box;
  align-items: center;
  border: 1px solid #eeeeee;
  & .staff-list-tools {
    display: none;
  }
`;

const Content = styled.div`
  flex-direction: column;
  display: flex;
  width: 100%;
`;

const Header = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  height: 65px;
`;

const Grid = (props) => {
  const { HeaderRender, RowRender, data } = props;

  return (
    <Table>
      <Header>
        <HeaderRender {...props} />
      </Header>
      <Content>
        {data.map((row) => (
          <RowRender {...props} data={row} key={row.id} />
        ))}
      </Content>
    </Table>
  );
};

export default Grid;
