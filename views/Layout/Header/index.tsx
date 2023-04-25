import { useState } from 'react'
import { Drawer } from '../../../ui';
import { useRouter } from 'next/router';
import { ChartStats } from '../../ChartStats';
import { ChartButton, HeaderImg, HeaderStyled } from './styled'

const HeaderView = () => {
    const router = useRouter()
    const [open, setOpen] = useState(false);
    const handleDrawer = () => setOpen(!open);

    return (
        <HeaderStyled>
            <HeaderImg src='/images/pokeball.png' onClick={() => router.push('/')} />
            <ChartButton fontSize='large' onClick={handleDrawer} />
            <Drawer anchor='right' open={open} onClose={handleDrawer} children={<ChartStats />} />
        </HeaderStyled>
    )
}

export default HeaderView
