import styled from "styled-components";

const Styles = styled.div`
/* Estilos básicos */
.hamburger-menu {
  position: relative;
}

/* Botão de menu */
.menu-icon {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px;
}

.menu-icon .bar {
  width: 30px;
  height: 3px;
  background-color: #333;
  transition: all 0.3s ease;
}

/* Animação de abertura */
.menu-icon .bar.open:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.menu-icon .bar.open:nth-child(2) {
  opacity: 0;
}

.menu-icon .bar.open:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

/* Menu */
.menu {
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #333;
  color: #fff;
  width: 200px;
  display: none;
  padding: 10px;
}

.menu.show {
  display: block;
}

.menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu ul li {
  margin: 10px 0;
}

.menu ul li a {
  color: #fff;
  text-decoration: none;
}
#teste {
  background-color: #f5f5f5;
}
.link {
  color: black;
  text-decoration: none
}

`

export default Styles
