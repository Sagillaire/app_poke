import { FC } from 'react';
import { DrawerProps } from './types';
import { DrawerStyle } from './styled';

export const Drawer: FC<DrawerProps> = ({ open, onClose, anchor, children }) => {
    return (
        <DrawerStyle anchor={anchor} open={open} onClose={onClose}>
            {children}
        </DrawerStyle>
    );
};