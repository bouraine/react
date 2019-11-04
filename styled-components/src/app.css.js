import styled from "styled-components";

export const ListItemText = styled.span.attrs(_ => ({
  className: "text-truncate"
}))`
  opacity: ${({ show }) => (show ? "auto" : "0")};
  transition: opacity 2ms;
  @media screen and (max-width: 768px) {
    opacity: 0;
  }
`;

export const Left = styled.div.attrs({
className: "border d-flex flex-column"
})`
  width: ${({ show }) => (show ? "220px" : "60px")};
  transition: width 500ms ease-in-out;
  @media screen and (max-width: 768px) {
    width: 60px;
  }
`;

export const Wrapper = styled.div.attrs({
  className: "d-flex w-100"
})`
  top: 50px;
  height: 100vh;
  position: fixed;
`;

export const Right = styled.div.attrs({
  className: "border bg-danger col-12 col-md-4"
})``;

export const Main = styled.div.attrs(({ id }) => ({
  className: id ? "d-none" : "border bg-info flex-grow-1"
}))``;

export const ListItem = styled.a.attrs(_ => ({
  className: "d-flex flex-nowrap align-items-center"
}))`
  padding: 16px 16px;
  cursor: pointer;
  &:hover {
    background: aliceblue;
    color: red !important;
  }
  &:active {
    background: aliceblue;
    color: red !important;
  }
`;

export const Icon = styled.i.attrs(({ name }) => ({
  className: `mr-2 fa fa-${name}`
}))``;

export const ShowIf = styled.span.attrs(({ show }) => ({
  className: show ? "d-none d-md-inline" : "d-none"
}))``;
