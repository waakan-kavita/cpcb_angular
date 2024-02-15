// Sidebar route metadata
export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    imageIcon?: string;
    class: string;
    badge: string;
    badgeClass: string;
    isExternalLink: boolean;
    submenu : RouteInfo[];
}
