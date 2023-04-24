import { Drawer } from '@mui/material';
import styled from 'styled-components';
import { device } from '../../../utils';

export const DrawerStyle = styled(Drawer)`
    .MuiPaper-root { 
        width: 320px;
        padding: 10px;
        background-color: #8C8C8C;

        @media ${device.mobileL} {
            width: 380px;
        }

        @media ${device.tablet} {
            width: 620px;
        }
    }
`;