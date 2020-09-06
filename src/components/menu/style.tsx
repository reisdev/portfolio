import styled from "styled-components";

interface NavigationProps {
  nested?: boolean;
}

export const Navigation = styled.section<NavigationProps>`
  .topics {
    width: fit-content;
    margin: 20px auto;
  }

  .topics .item {
    text-decoration: none;
    margin: 10px 20px;
    color: white;
    font-size: 1rem;
    font-weight: 500;
  }

  @media screen and (max-width: 425px) {
    display: ${({ nested }) => (!nested ? "none" : "")};

    .topics {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 0px;
      margin: 0px;
      overflow: hidden;
      transition: height 0.2s ease-in;
    }

    .hamburguer {
      display: flex;
    }

    .topics.active {
      margin: 10px auto;
      height: 160px;
    }

    .topics li {
      opacity: 0;
      transition: opacity 0.1s ease-in;
    }

    .topics.active li {
      margin: 10px;
      opacity: 1;
      text-align: center;
    }

    .topics .item {
      font-size: 1rem;
    }
  }

  @media screen and (min-width: 426px) {
    display: ${({ nested }) => (nested ? "none !important" : "")};
  }
`;

interface MenuProps {
  position: string;
  colored: boolean;
}

export const Menu = styled.nav<MenuProps>`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  height: 63px;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  color: white !important;
  background-size: cover;
  justify-content: space-between;
  transition: background 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);

  position: ${(props) => props.position};
  background: ${({ colored }) => (colored ? "#444444" : "transparent")};

  .sticky {
    position: sticky;
    top: 0;
    flex-direction: column;
  }

  .fixed {
    position: fixed;
    top: 0;
    flex-direction: column;
  }

  .sticky > .avatar {
    margin: 0px;
  }

  .sticky > .avatar img {
    height: 32px;
    width: 32px;
  }

  .logo {
    max-height: 32px;
    margin: auto auto;
  }

  section {
    display: flex;
  }

  li {
    list-style-type: none;
    margin: auto auto;
  }

  .content {
    display: flex;
    max-width: 960px;
    width: fit-content;
    margin: auto auto;
  }

  .avatar {
    margin: auto;
  }

  ul {
    display: flex;
  }

  h1 {
    font-size: 1.8rem;
    padding-left: 10px;
    margin: auto;
    transition: font-size 0.1s ease-in;
  }

  h2 {
    font-size: 1.2rem;
    padding-left: 10px;
    margin: auto;
    transition: font-size 0.1s ease-in;
  }

  .social a {
    display: block;
  }

  .item:not(:has(img)):hover {
    user-select: none;
    background-color: rgba(0, 0, 0, 0.1);
  }

  .item:not(:has(img)) {
    background-color: transparent;
    text-transform: uppercase;
    width: fit-content;
    float: left;
    padding: 10px;
  }

  .hamburguer {
    -webkit-appearance: none;
    border: none;
    display: none;
    color: white;
    position: fixed;
    background: transparent;
    padding: 12px;
  }

  .hamburguer .icon {
    font-size: 25px;
  }

  .top {
    top: 0;
  }

  .floating.menu {
    position: fixed;
    top: 0px;
  }

  .menu ul {
    padding: 0px;
  }

  .menu .social {
    float: right;
    font-size: 1.5rem;
    display: flex;
    flex-direction: row;
    margin-block-start: 0px;
    margin-block-end: 0px;
  }

  .menu section:has(.social) {
    float: right;
    right: 0;
    position: absolute;
    margin: 9px;
  }

  a:not(.item) {
    text-decoration: none;
    color: #1c5cb1;
  }

  a:not(.item):hover {
    text-decoration: underline;
  }

  a .icon {
    color: white;
    font-size: 1.6rem;
    margin: auto 3px;
    padding: 3px;
  }

  @media screen and (max-width: 425px) {
    .topics {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 0px;
      margin: 0px;
      overflow: hidden;
      transition: height 0.2s ease-in;
    }

    .hamburguer {
      display: flex;
    }

    > .content > ${Navigation} {
      display: none !important;
    }

    .social {
      float: right;
      right: 0;
      position: absolute;
      margin: 10px;
    }

    .topics.active {
      margin: 10px auto;
      height: fit-content;
    }

    .topics li {
      opacity: 0;
      transition: opacity 0.1s ease-in;
    }

    .topics.active li {
      margin: 10px;
      opacity: 1;
      text-align: center;
    }

    .topics .item {
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 767px) {
    .content {
      margin: unset;
      width: 100%;
    }
  }
`;
