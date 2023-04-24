import { useState } from 'react'
import { Drawer } from '../../../ui';
import { ChartStats } from '../../ChartStats';
import { ChartButton, HeaderImg, HeaderStyled } from './styled'

const HeaderView = () => {
    const [open, setOpen] = useState(false);
    const handleDrawer = () => setOpen(!open);

    return (
        <HeaderStyled>
            <HeaderImg src='/images/pokeball.png' />
            <ChartButton fontSize='large' onClick={handleDrawer} />
            <Drawer anchor='right' open={open} onClose={handleDrawer} children={<ChartStats />} />
        </HeaderStyled>
    )
}

export default HeaderView
