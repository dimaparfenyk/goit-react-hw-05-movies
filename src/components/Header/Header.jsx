// 
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { SiteNav, StyledNavLink } from "./Header.styled";

export const Header = () => {
    return (
        <><SiteNav>
            <StyledNavLink to="/">Home</StyledNavLink>
            <StyledNavLink to="/movies">Movies</StyledNavLink>
        </SiteNav>
            <Suspense>
                <Outlet />
            </Suspense></>
    );
};

