import { Drawer } from '@mui/material';
import styled from 'styled-components';
import { device } from '../../../utils';

export const DrawerStyle = styled(Drawer)`
    .MuiPaper-root { 
        width: 320px;
        padding: 10px;
        /* background-color: #7ed6df;
        box-shadow: 0px 0px 5px #548E94; */
        /* border: 1px solid #7ed6df; */
        /* background-size: 100%;
        background-repeat: no-repeat;
        background-image: url('/images/locationPokemon.svg'); */

        @media ${device.mobileL} {
            width: 380px;
        }

        @media ${device.tablet} {
            width: 620px;
        }
    }
`;