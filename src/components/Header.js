import React from 'react';
import '../styles/Header.css';
import './pages/Countries';
import { Menubar } from 'primereact/menubar';
import airLine from "../assets/airLine.png";
import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';


export default function Header() {

  const navigate = useNavigate();

  const handleCountriesClick = () => {
    navigate('/countries');  // Utilisez la fonction de navigation
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
      icon: 'pi pi-fw pi-globe',
      items: [
        {
          label: 'Europe',
          command: handleCountriesClick,
          icon: 'pi pi-fw pi-globe',
        },

        {
          label: 'America',
          icon: 'pi pi-fw pi-globe',
          items: [
            {
              label: 'North America',
            },
            {
              label: 'South America',
            }
          ]
        },
    {
      label: 'Asia',
      icon: 'pi pi-fw pi-globe',
    },

  ]
},
{
  label: 'Users',
    icon: 'pi pi-fw pi-user',
      items: [
        {
          label: 'New',
          icon: 'pi pi-fw pi-user-plus',

        },
        {
          label: 'Delete',
          icon: 'pi pi-fw pi-user-minus',

        },
        {
          label: 'Search',
          icon: 'pi pi-fw pi-users',
          items: [
            {
              label: 'Filter',
              icon: 'pi pi-fw pi-filter',
              items: [
                {
                  label: 'Print',
                  icon: 'pi pi-fw pi-print'
                }
              ]
            },
            {
              icon: 'pi pi-fw pi-bars',
              label: 'List'
            }
          ]
        }
      ]
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
  <div className="navbar">
    <Menubar model={items} start={start} className='navbar' />
  </div>
)
}

