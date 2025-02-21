import React, { useEffect } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from "@mui/material";
const DialogCake = ({ isOpen, handleClose }) => {

    return (
        <>
            <Dialog
                open={isOpen}
                onClose={handleClose}
            >
                <DialogTitle>Cake</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                    </DialogContentText>
                    <MenuMenu />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={() => window.open('https://wa.me/6287730902722?text=Halo ADA, saya ingin memesan', "_blank")}>Pesan</Button>
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
        createData("Bolu Tape Toping Keju", "Rp15.000,00", "1 loyang (12x25)cm"),
        createData("Bolu Tape Toping Cokelat", "Rp15.000,00", "1 loyang (12x25)cm"),
        createData("Bolu Pandan", "Rp15.000,00", "1 loyang (12x25)cm"),
    ]


    return <>
        <TableContainer component={Paper}>
            <Table aria-label="simple table" >
                <TableHead>
                    <TableRow>
                        <TableCell><Typography fontSize={12}>Jenis</Typography></TableCell>
                        <TableCell align="left"><Typography fontSize={12}>Harga</Typography></TableCell>
                        <TableCell align="left"><Typography fontSize={12}>Deskripsi</Typography></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        datas.map((data) => {
                            return <TableRow
                                key={data.nama}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="left"><Typography fontSize={12}>{data.nama}</Typography></TableCell>
                                <TableCell align="left"><Typography fontSize={12}>{data.harga}</Typography></TableCell>
                                <TableCell align="left"><Typography fontSize={12}>{data.deskripsi}</Typography></TableCell>
                            </TableRow>
                        })
                    }
                </TableBody>
            </Table>
        </TableContainer>
    </>

}

export default DialogCake