import { Box, Button, ButtonProps, Modal, Typography, styled } from "@mui/material";
import NavigationBar from "./NavigationBar";
import { red } from "@mui/material/colors";
import { useState } from "react";
import React from "react";

const CenteredContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: '0 auto',
    maxWidth: '200px',
});

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function Events() {

    const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
        color: theme.palette.getContrastText(red[500]),
        backgroundColor: red['A700'],
        '&:hover': {
            backgroundColor: red[700],
        },
    }));

    let EventsList = ["Sedinta 1 ", "Sedinta 2", "Sedinta 3", "Sedinta 4"]

    const [comingEvents, setComingEvents] = useState<string[]>([]);
    const [eventDetails, setEventDetails] = useState(Array(comingEvents.length).fill(false));

    //Show detail of selected event
    //On second click on same event hide all details
    const toggleDetails = (index: number) => {
        const newEventDetails = [...eventDetails];
        newEventDetails[index] = !newEventDetails[index];
        setEventDetails(newEventDetails);
    };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        
        setComingEvents([...comingEvents,"Sedinta noua"]);
        console.log(EventsList)
    }
    return (
        <>
            <NavigationBar />
            <Box marginTop={10} />

            <CenteredContainer>
                <Typography variant="h5" gutterBottom>Comming up Events </Typography>
                <ColorButton variant="contained" onClick={handleOpen}>Creeaza Eveniment</ColorButton>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            comming Soon.
                        </Typography>
                        <Button variant="contained" onClick={handleClose}>Create</Button>
                    </Box>
                </Modal>
            </CenteredContainer>

            <Box display='flex'
                marginTop={5}
                flexDirection='column'
                justifyContent='center' >
                {comingEvents.map((event, index) => (
                    <React.Fragment key={index}>
                        <Button onClick={() => toggleDetails(index)}>
                            {event}
                        </Button>
                        {eventDetails[index] && (
                            <Typography>Detalii</Typography>

                        )}
                    </React.Fragment>
                ))}

            </Box>
        </>
    )
}