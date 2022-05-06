import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

//Import Icons
import FeatherIcon from 'feather-icons-react';

const Navdata = () => {
  const history = useHistory();
  //state data
  const [isDashboard, setIsDashboard] = useState(false);
  const [isApps, setIsApps] = useState(false);

  // Apps
  const [isEcommerce, setIsEcommerce] = useState(false);

  const [iscurrentState, setIscurrentState] = useState('Dashboard');

  function updateIconSidebar(e) {
    if (e && e.target && e.target.getAttribute('subitems')) {
      const ul = document.getElementById('two-column-menu');
      const iconItems = ul.querySelectorAll('.nav-icon.active');
      let activeIconItems = [...iconItems];
      activeIconItems.forEach((item) => {
        item.classList.remove('active');
        var id = item.getAttribute('subitems');
        if (document.getElementById(id))
          document.getElementById(id).classList.remove('show');
      });
    }
  }

  useEffect(() => {
    document.body.classList.remove('twocolumn-panel');
    if (iscurrentState !== 'Dashboard') {
      setIsDashboard(false);
    }
    if (iscurrentState !== 'Apps') {
      setIsApps(false);
    }
  }, [history, iscurrentState, isDashboard, isApps, isEcommerce]);

  const menuItems = [
    {
      label: 'Menu',
      isHeader: true,
    },
    {
      id: 'dashboard',
      label: 'Dashboards',
      icon: <FeatherIcon icon='home' className='icon-dual' />,
      link: '/#',
      stateVariables: isDashboard,
      click: function (e) {
        e.preventDefault();
        setIsDashboard(!isDashboard);
        setIscurrentState('Dashboard');
        updateIconSidebar(e);
      },
    },
    {
      id: 'apps',
      label: 'Relatório',
      icon: <FeatherIcon icon='grid' className='icon-dual' />,
      link: '/#',
      click: function (e) {
        e.preventDefault();
        setIsApps(!isApps);
        setIscurrentState('Apps');
        updateIconSidebar(e);
      },
      stateVariables: isApps,
      subItems: [
        {
          id: 'mailbox',
          label: 'Mensal',
          link: '/pages-starter',
          parentId: 'apps',
        },
        {
          id: 'appsecommerce',
          label: 'Ecommerce',
          link: '/#',
          isChildItem: true,
          click: function (e) {
            e.preventDefault();
            setIsEcommerce(!isEcommerce);
          },
          parentId: 'apps',
          stateVariables: isEcommerce,
          childItems: [
            {
              id: 1,
              label: 'Products',
              link: '/pages-starter',
              parentId: 'apps',
            },
            {
              id: 2,
              label: 'Product Details',
              link: '/pages-starter',
              parentId: 'apps',
            },
          ],
        },
      ],
    },
  ];
  return <React.Fragment>{menuItems}</React.Fragment>;
};
export default Navdata;
