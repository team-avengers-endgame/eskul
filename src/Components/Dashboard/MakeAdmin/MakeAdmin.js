import React from 'react';
import axios from 'axios';
import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useForm } from "react-hook-form";
import { api } from '../../../Hooks/Api';
import { alert, ButtonStyle } from '../../../Hooks/useStyle';
const MakeAdmin = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        axios.patch(`${api}/users/admin`, data)
            .then((response) => {
                response.status === 200 &&
                    alert('success', 'Make a admin Successfully')
            })
            .catch((error) => {
                !error.status === 200 &&
                    alert('error', 'Bad Request, Places Try again')
                console.log(error);
            });


        reset();
    };


    return (
        <Box sx={{ p: 3 }}>
            <Box>
                <Typography variant='h5'>Make an admin form</Typography>
                <Box sx={{ maxWidth: 400 }}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <TextField size='small' fullWidth label="Email" placeholder='Email'{...register("email", { required: true })} />
                        {errors.email && <span>This admin field is required</span>} <br /> <br />
                        <Button type='submit' fullWidth sx={ButtonStyle}>Make Admin</Button>
                    </form>
                </Box>
            </Box>
        </Box>
    );
};

export default MakeAdmin;