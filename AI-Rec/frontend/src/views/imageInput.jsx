import React, { useState, useEffect } from 'react';
import { UploadImage } from '../controllers/actions';
import { useNavigate } from 'react-router-dom';
import WebcamCapture from './Components/webCam';

// MUI
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import Button from '@mui/material/Button';

function ImageInput() {
    useEffect(() => {
        document.title = 'Aesthetic Skin | AI Recognition';
    }, []);
    const [landingPage, setLandingPage] = useState(true)
    const [imageSrc, setImageSrc] = useState(null)
    const navigate = useNavigate();
    if (imageSrc !== null) {
        console.log("we got an image")
        UploadImage(imageSrc, navigate)
    }

    return (
        <>
            <Container maxWidth="xs" sx={{ padding: 0 }} alignitems="center">
                <Grid container justify="center" sx={{ maxHeight: "100vh" }} spacing={1}>
                    {landingPage ? (
                        <Grid item xs={12} textAlign="center">
                            <img
                                src="/logo.png"
                                alt="Logo"
                                style={{ width: "300px", height: "300px", margin: "20px auto 0" }}
                            />
                            <div sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <PhotoCameraIcon sx={{ fontSize: "5em", marginTop: "100px" }} />
                                <Button
                                    onClick={() => {
                                        setLandingPage(false);
                                    }}
                                    variant="contained"
                                    fullWidth
                                    sx={{ marginTop: "10px" }}
                                >
                                    Take photo
                                </Button>
                            </div>
                        </Grid>
                    ) : (
                        <WebcamCapture setImageSrc={setImageSrc} />
                    )}
                </Grid>
            </Container>
        </>
    )
}
export default ImageInput
