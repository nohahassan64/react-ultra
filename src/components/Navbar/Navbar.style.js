import styled from 'styled-components';
import { Container } from '../../GlobalStyles';
import { Link } from 'react-router-dom';
import { FaMagento } from 'react-icons/fa';

export const Nav = styled.nav`
    background: #101522;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 999;
`;
export const NavbarContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    height: 80px;
    ${Container}
`;
export const NavLogo = styled(Link)`
    text-decoration: none;
    color: #fff;
    font-size: 2rem;
    cursor: pointer;
    display: flex;
    justify-self: flex-start;
    align-items: center;
`;
export const NavIcon = styled(FaMagento)`
    margin-right: 0.5rem;
`;
export const MobileIcon = styled.div`
    display: none;

@media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100% , 60%);
    font-size: 1.8rem;
    cursor: pointer;
}
`;
export const NavMenu = styled.ul`
     list-style: none;
     text-align: center;
     display: flex;
     align-items: center;

@media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    position: absolute;
    height: 90vh;
    width: 100%;
    top: 80px;
    left: ${({click}) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease-in-out;
    background: #101522; 
}
`;
export const NavItem = styled.li`
    height: 80px;
    border-bottom: 2px solid transparent;
&:hover {
    border-bottom: 2px solid #4b59f7;
}
@media screen and (max-width: 960px) {
    width: 100%;
    &:hover {
        border: none;
    }
}
`;
export const NavLinks = styled(Link)`
    text-decoration: none;
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    height: 100%;

@media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    &:hover {
        color: #4b59f7;
        transition: all 0.5s ease-in-out;
    }
}
`;
export const NavItemBtn = styled.li`
@media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
}
`;
export const NavBtnLink = styled(Link)`
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 8px 16px;
    border: none;
    outline: none;

`;