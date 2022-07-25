import React from 'react';
import {Box, Container, Typography} from "@mui/material";

export const EmailVerifiedSuccess = () => (
    <Container>
        <Box mt={4}>
            <Typography color={'primary'} variant={'h3'} align={'center'}>
                Email verified success !
            </Typography>
        </Box>
    </Container>
);
