import styled from "styled-components";

const GNBWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 80px;
  border-bottom: 1px solid #e5e5e5;
  background-color: black;
`;

const GNB = () => {
  return <GNBWrapper></GNBWrapper>;
};

export default GNB;
