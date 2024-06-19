import React from "react";
import styled from "styled-components";

function Navbar() {
  return (
    <Wrapper>
      <section>
        <div></div>
        <nav>
          <ul className="menuItems">
            <li>
              <a href="/" data-item="Home">
                Home
              </a>
            </li>
            <li>
              <a href="/" data-item="About">
                About
              </a>
            </li>
            <li>
              <a href="/" data-item="Projects">
                Projects
              </a>
            </li>
            <li>
              <a href="/" data-item="Code">
                Code
              </a>
            </li>
            <li>
              <a href="/" data-item="Contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  nav {
    margin: 3rem 0;
    background: #f9f9f9;
    padding: 1rem 0;
  }

  nav .menuItems {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  nav .menuItems li {
    margin: 1.6rem 5rem;
  }

  nav .menuItems li a {
    text-decoration: none;
    color: #8f8f8f;
    font-size: 24px;
    font-weight: 400;
  }
`;
export default Navbar;
