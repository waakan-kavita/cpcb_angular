import { RouteInfo } from './sidebar.metadata';

//Sidebar menu Routes and data
export const ROUTES: RouteInfo[] = [

    {
        path: '', title: 'Dashboard', icon: 'bi bi-house-door', class: 'sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
            { path: '/dashboard/e-commerce', title: 'Source Pollutant GIS Map', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/dashboard/sales', title: 'Live Pollutant GIS Map', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/dashboard/analytics', title: 'Ambient', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/dashboard/project-management', title: 'Emission Map', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/dashboard/cms-dashboard', title: 'Effluent  Map', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    {
        path: '/table/table', title: 'Detailed Online Status', icon: '', imageIcon: 'assets/images/icons/online_status.jpg', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
    {
        path: '/table/table', title: 'Online Data Comparision', icon: 'lni lni-database', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
    {
        path: '/table/table', title: 'Data Validation',icon:'', imageIcon: 'assets/images/icons/data_validation.jpg', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
    {
        path: '', title: 'Reports', icon: 'lni lni-files', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
            submenu: [
                { path: '', title: 'Data Reports', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                   
                { path: '', title: 'CPCB Reports', icon: 'bx bx-right-arrow-alt', class: 'sub', badge: '', badgeClass: '', isExternalLink: false, 
                        submenu: [
                            { path: '', title: 'Monthly Offline', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                            { path: '', title: 'Monthly Backup', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                            { path: '', title: 'Live Industries', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                            { path: '', title: 'Delayed Industries', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                            { path: '', title: 'Offline Industries', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                            { path: '', title: 'Industry Details', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },

                        ] },
                    
                { path: '', title: 'SMS Reports', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                {path: '', title: 'Calibration Report', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                {path: '', title: 'Login Log Reports', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                { path: '', title: 'PCB Connectivity Status Report', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                {path: '', title: 'Wind Rose Report', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                           
            ]
    },

    {
        path: '', title: 'Industry Online Status', icon: '',imageIcon: 'assets/images/icons/online_status.jpg', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/application/email-app', title: 'Remote Calibration Check', icon: 'lni lni-spinner-arrow', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/application/chat-box', title: 'Station wise Data', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/application/industry-wise-data', title: 'Industry wise data', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/application/METADATA', title: 'METADATA', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/application/DAS', title: 'DAS', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/application/Industry-Contact-Details', title: 'Industry Contact Details', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    {
        path: '/table/table', title: 'Remote calibration check', icon: 'lni lni-spinner-arrow', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
   
    { path: 'https://codervent.com/skodash-angular/demo/collapsed-menu/ltr/docs/', title: 'Documentation', icon: 'bi bi-file-earmark-code', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
    { path: 'https://themeforest.net/user/codewrrap/portfolio', title: 'Support', icon: 'bi bi-headset', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] }

    
];