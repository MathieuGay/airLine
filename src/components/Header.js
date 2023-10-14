import React from 'react';
import '../styles/Header.css';
import CircleMenu from "./CircleMenu";
import { Menubar } from 'primereact/menubar';
import airLine from "../assets/airLine.png";
import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';


export default function Header() {

  const navigate = useNavigate();

  const handleCountriesClick = () => {
    navigate('/DataCountries');  // Utilisez la fonction de navigation
  };

  const handleInfoClick = () => {
    navigate('/Informations');  // Utilisez la fonction de navigation
  };

  const items = [
    {
      label: 'Acheter un billet',
      icon: 'pi pi-fw pi-ticket',
      items: [
        {
          label: 'Aller-retour',
          icon: 'pi pi-fw pi-ticket',
        },
        {
          label: 'Aller simple',
          icon: 'pi pi-fw pi-ticket'
        },
        {
          label: 'Multidestination',
          icon: 'pi pi-fw pi-ticket'
        }
      ]
    },
    {

      label: 'Liste des Pays',
      command: handleCountriesClick,
      icon: 'pi pi-fw pi-globe',
    },
    {
      label: 'Informaions',
      command: handleInfoClick,
      icon: 'pi pi-fw pi-info-circle',
    },
    {
      label: 'Events',
      icon: 'pi pi-fw pi-calendar',
      items: [
        {
          label: 'Edit',
          icon: 'pi pi-fw pi-pencil',
          items: [
            {
              label: 'Save',
              icon: 'pi pi-fw pi-calendar-plus'
            },
            {
              label: 'Delete',
              icon: 'pi pi-fw pi-calendar-minus'
            }
          ]
        },
        {
          label: 'Archive',
          icon: 'pi pi-fw pi-calendar-times',
          items: [
            {
              label: 'Remove',
              icon: 'pi pi-fw pi-calendar-minus'
            }
          ]
        }
      ]
    },
    {
      label: 'Quit',
      icon: 'pi pi-fw pi-power-off'
    }
  ];

  const start = <img alt="" src={airLine} className="logo"></img>;


  return (
    <div className="navbar-container">
      
      <div className="navbar">
        <Menubar model={items} start={start} className='navbar' />
        <CircleMenu />
      </div>
    </div>
  )
}

