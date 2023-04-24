import { useState } from 'react'
import { Drawer } from '../../../ui';
import { HeaderImg, HeaderStyled } from './styled'

const HeaderView = () => {
    const [open, setOpen] = useState(false);

    const handleDrawer = () => setOpen(!open);

    return (
        <HeaderStyled>
            <HeaderImg src='/images/pokeball.png' />
            <button onClick={handleDrawer} >VER</button>
            <Drawer anchor='right' open={open} onClose={handleDrawer} children={ <span>LALA</span> } />
        </HeaderStyled>
    )
}

export default HeaderView
