import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { StyledNavLink, SiteNav, Container, } from "./SharedLayout.styled";

export const SharedLayout = () => {
  return (
    <Container>
      <SiteNav>
            <StyledNavLink to="/">Home</StyledNavLink>
            <StyledNavLink to="/movies">Movies</StyledNavLink>
      </SiteNav>

      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>

    </Container>
  );
};
