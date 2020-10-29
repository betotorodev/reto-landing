import styled from 'styled-components';

export const Main = styled.main`
  height: 100vh;
  width: 100%;
`
//header
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  padding: 20px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`

export const Img = styled.img`
  width: 100px;
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`

export const Ul = styled.ul`
  display: flex;
`

export const Li = styled.li`
  position: relative;
  margin-left: 30px;
  letter-spacing: 1px;
  & span {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 50%;
    border-bottom: 2px solid #FF5E40;
    padding-bottom: 24px;
  }
  &:last-child {
    margin-right: 30px;
  }
`

//content
export const Article = styled.article`
  display: flex;
  width: 100%;
  height: calc(100% - 100px);
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 40%;
  margin-top: 15%;
  & h1 {
    margin-bottom: 50px;
    font-size: 64px;
    font-weight: 700;
    line-height: 1;
  }
`

export const Small = styled.small`
  color: #FF5E40;
  margin-bottom: 20px;
`

export const Box = styled.div`
  position: absolute;
  left: 0;
  top: 55%;
  width: 100%;
  height: 200px;
  background-color: rgba(204, 204, 204, 0.1);
`

export const Div = styled.div`
  position: relative;
  width: 60%;
`

export const Span = styled.span`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  & small {
    font-size: 5px;
    margin: 0 15px;
    border-radius: 50%;
    box-shadow: inset 0px 0px 50px 0px rgba(255, 94, 64, 0.5),
                0px 0px 15px 1px rgba(255, 94, 64, 0.5);
  }
`

export const Hero = styled.img`
  position: absolute;
  top: 15%;
  right: 0;
  width: 90%;
  border-radius: 12px;
  box-shadow: 0 0 50px 10px rgba(0, 0, 0, 0.1);
`

export const Date = styled.div`
  position: absolute;
  left: 2%;
  top: 10%;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 450px;
  height: 120px;
  padding: 40px;
  border-top-left-radius: 12px;
  border-top-right-radius: 0;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 50px;
  font-size: 24px;
  background-color: #FF5E40;
  color: white;
  box-shadow: 0 0 50px 10px rgba(0, 0, 0, 0.1);
  & span {
    font-size: 28px;
    font-weight: bold;
    text-align: left;
    & h6 {
      font-size: 12px;
      color: rgba(255, 255, 255, 0.5);
    }
  }
  & h1 {
      font-weight: 100;
      color: rgba(255, 255, 255, 0.3);
    }
`
