import React from "react";
import styled from "styled-components";

function Header() {
    const SiteHeader = styled.header`
        max-width: 100%;
        background-color: #e6e7f2;
        padding: 10px 0;
    `

    const SiteH1 = styled.h1`
        font-size: 40px;
    `

    return (
        <SiteHeader>
            <SiteH1>NASA Photo of the Day</SiteH1>
        </SiteHeader>
    )
}

export default Header;