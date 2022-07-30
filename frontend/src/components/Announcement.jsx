import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #3fbbbb;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return (
    <Container>wonderful Deal! Free Shipping on Orders Over ₹500</Container>
  );
};

export default Announcement;
