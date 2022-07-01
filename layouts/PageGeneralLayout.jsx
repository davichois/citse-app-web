import { NavBarHome } from "../components";

export const PageGeneralLayout = ({ children, title }) => {
  return (
    <>
      <nav>
        <NavBarHome />
      </nav>
      <main>{children}</main>
    </>
  );
};
