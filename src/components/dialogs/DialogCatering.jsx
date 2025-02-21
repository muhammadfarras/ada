import React, { useEffect } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Alert from '@mui/material/Alert';
const DialogCatering = ({ isOpen, handleClose }) => {

    return (
        <>
            <Dialog
                open={isOpen}
                onClose={handleClose}
            >
                <DialogTitle>Catering</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                    </DialogContentText>
                    <MenuMenu />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={() => window.open('https://wa.me/6287730902722?text=Halo ADA, saya ingin memesan', "_blank")}>Tanya</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

const MenuMenu = () => {

    const createData = (nama, harga, deskripsi) => {
        // console.log("Nama ${nama}")
        return {nama, harga, deskripsi}
    }

    const datas = [
        createData("Pizza Slice", "Rp10.000,00", "Single Pizza, cocok untuk ganjel perut"),
        createData("Pizza Ukuran Besar", "Rp75.000,00", "Pizza ADA original, cukup untuk 3 orang dewasa")
    ]


    console.log(datas)


    return <>
        <Alert severity="info">Click tombol Tanya dibawah untuk informasi ADA Catering...</Alert>
    </>

}

export default DialogCatering