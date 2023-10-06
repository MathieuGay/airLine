import React from 'react';
import '../styles/Header.css';
import { Button } from 'primereact/button';
        

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="#"><Button label="Acheter un billet" severity="danger" raised rounded /></a></li>
          <li><a href="#"><Button label="Liste des Pays" severity="danger" raised rounded/></a></li>
          <li><a href="#"><Button label="Informations" severity="danger" raised rounded/></a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
