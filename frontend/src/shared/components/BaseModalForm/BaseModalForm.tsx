import { Box, Modal, Typography } from "@mui/material"
import style from './BaseModalForm.module.css'
import { JSX } from "react"

interface BaseModalFormType {
    ariaLabelLedBy: string,
    ariaDescripbedby: string,
    setIsOpen: (open: boolean) => void;
    isOpen: boolean;
    titleModal: string,
    children: JSX.Element
}

const BaseModalForm = ({ isOpen, ariaDescripbedby,
    ariaLabelLedBy, titleModal, children, setIsOpen }: BaseModalFormType) => {

    const handleClose = () => setIsOpen(false);

    return <>
        <Modal
            open={isOpen}
            onClose={handleClose}
            aria-labelledby={ariaLabelLedBy}
            aria-describedby={ariaDescripbedby}
        >
            <Box className={style.modalBox}>
                <Typography variant="h6" component="h2">
                    {titleModal}
                </Typography>
                {children}
            </Box>
        </Modal>
    </>
}

export default BaseModalForm;