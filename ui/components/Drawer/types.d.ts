export interface DrawerProps {
    open: boolean;
    anchor: Anchor;
    onClose: () => void;
    children: ReactNode;
}

export type Anchor = 'top' | 'left' | 'bottom' | 'right';