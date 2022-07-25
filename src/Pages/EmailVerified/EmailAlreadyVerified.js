import React from 'react';
import {Box, Container, Typography} from "@mui/material";

export const EmailAlreadyVerified = () => (
    <Container>
        <Box mt={4}>
            <Typography color={'primary'} variant={'h3'} align={'center'}>
                Email already verified!
            </Typography>
        </Box>
    </Container>
);
