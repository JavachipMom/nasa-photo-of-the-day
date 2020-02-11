import React from "react"
import styled from "styled-components"

function Footer() {
    const SiteFooter = styled.footer`
        max-width: 100%;
        background-color: #e6e7f2;
        padding: 10px 0;
        margin-top: 20px;
    `

    return (
        <SiteFooter>
            <p>Webpage created by Shaurice Pearson</p>
        </SiteFooter>
    )
}

export default Footer;