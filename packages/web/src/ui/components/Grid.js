import React from 'react';
import styled from 'styled-components';

const Table = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  border-radius: 2px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  max-width: calc(100% - 30px);
  width: 100%;
  box-sizing: border-box;
  margin: 20px auto 20px auto;
  align-items: center;

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
  border-bottom: 1px solid #ededed;
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
