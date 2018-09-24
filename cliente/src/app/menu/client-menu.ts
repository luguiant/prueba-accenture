import { NbMenuItem } from '@nebular/theme';

export const MENU_CLIENT: NbMenuItem[] = [
  {
    title: 'Inicio',
    icon: 'nb-home',
    link: '/user-dashboard',
    home: true,
  },
  {
    title: 'Creditos',
    icon: 'nb-compose',
    children: [
      {
        title: 'Solicitud de credito',
        link: '/user-dashboard/credits-form-user',
      },
      {
        title: 'Historial de solicitudes',
        link: '/user-dashboard/credits-list-user'
      },
    ],
  },
  {
    title: 'Salir',
    icon: 'nb-power-circled',
    link: '/logout/1'
  }
];
