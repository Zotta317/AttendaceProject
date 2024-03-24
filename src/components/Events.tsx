import { Box, Button, ButtonProps, Typography, styled } from "@mui/material";
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

export default function Events() {

    const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
        color: theme.palette.getContrastText(red[500]),
        backgroundColor: red['A700'],
        '&:hover': {
            backgroundColor: red[700],
        },
    }));

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
      };
    const commingEvents = ["Sedinta 1 ", "Sedinta 2", "Sedinta 3", "Sedinta 4"]
   
    const [eventDetails, setEventDetails] = useState(Array(commingEvents.length).fill(false));

    //Show detail of selected event
    //On second click on same event hide all details
    const toggleDetails = (index : number) => {
      const newEventDetails = [...eventDetails];
      newEventDetails[index] = !newEventDetails[index];
      setEventDetails(newEventDetails);
    };
   
    return (
        <>
            <NavigationBar />
            <Box marginTop={10} />

            <CenteredContainer>
                <Typography variant="h5" gutterBottom>Comming up Events </Typography>
                <ColorButton variant="contained">Creaaza Eveniment</ColorButton>
                <button onClick={toggleModal} className="btn-modal">
        Open
      </button>
            </CenteredContainer>

            <Box display='flex'
                marginTop={5}
                flexDirection='column'
                justifyContent='center' >
                {commingEvents.map((event, index) => (
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