import styled from "styled-components";

type BaseLayoutProps = {
  children: React.ReactNode;
};

const Main = styled.main`
  min-height: 100vh;
  display: flex;
`;

const Sider = styled.nav`
  display: block;
  width: 264px;
  height: 100%;
  min-height: 100vh;
  background-color: lightgray;
`;

const MenuItem = styled.li``;

const Content = styled.section`
  width: calc(100% - 264px);
  height: fit-content;
  min-height: 100vh;

  padding: 48px 36px;
`;

export const BaseLayout = ({ children }: BaseLayoutProps) => {
  const menuItemArr = [
    { name: "튜토리얼", href: "/" },
    { name: "확장팩 스토리 이후", href: "" },
  ];
  return (
    <Main>
      <Sider>
        <div>New Light Wiki</div>
        {menuItemArr.map((item) => (
          <MenuItem key={item.name}>
            <a href={item.href}>{item.name}</a>
          </MenuItem>
        ))}
      </Sider>
      <Content>{children}</Content>
    </Main>
  );
};
