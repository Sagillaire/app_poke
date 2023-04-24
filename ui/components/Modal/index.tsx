import { FC } from 'react'
import { TModal } from './types'
import Box from '@mui/material/Box'
import { ModalBoxStyle } from './styled'
import { Modal as ModalMui } from '@mui/material'

export const Modal: FC<TModal> = ({ children, onClose, open }) => {
    return (
        <ModalMui
            open={open}
            onClose={onClose}
        >
            <Box sx={ModalBoxStyle}>
                {children}
            </Box>
        </ModalMui>
    )
}