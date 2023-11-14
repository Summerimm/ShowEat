/* Import */
import Header from "@components/composite/header";
import { LayoutProps } from "@customTypes/layoutProps";
import NavigationBar from "@components/composite/navigationBar";
import styled from "@emotion/styled";

// ----------------------------------------------------------------------------------------------------

/* Style */
const BodyContainer = styled("div")`
    display: flex;

    width: 100%;

    min-height: calc(100vh - 5em);
`;

const NavBarWrapper = styled("div")`
    display: flex;

    width: 250px;
    height: 100%;
`;

const BorderBox = styled("div")`
    position: fixed;
    left: 0;
    top: 0;

    width: 250px;
    height: 100%;

    border-right: 1px solid ${(props) => props.theme.colors.gray2};
    box-sizing: border-box;
`;

const FlexArticle = styled("article")`
    display: flex;

    width: calc(100% - 250px);
    height: 100%;
`;

// ----------------------------------------------------------------------------------------------------

/* Seller Page Layout */
function SellerLayout(props: LayoutProps) {
    const { children } = props;

    return (
        <>
            <Header />
            <BodyContainer>
                <BorderBox />
                <NavBarWrapper>
                    <NavigationBar isBuyer={false} />
                </NavBarWrapper>
                <FlexArticle>{children}</FlexArticle>
            </BodyContainer>
        </>
    );
}

// ----------------------------------------------------------------------------------------------------

/* Export */
export default SellerLayout;
