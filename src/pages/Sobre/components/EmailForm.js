import { Button, TextField } from "@mui/material";
import { Field, Formik, Form } from "formik";
import React from "react";
import styled from "styled-components";

export const EmailForm = () => {
    return (
        <Formik
            initialValues={{
                name: '',
                email: '',
                mensagem: '',
                userId:0
            }}
            onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                alert(JSON.stringify(values, null, 2));
            }}
        >

            <Form>
                <label htmlFor="name">Seu Nome</label>
                <Field as={CustomTextField} id="name" name="name"/>

                <label htmlFor="email">Seu email</label>
                <Field
                    id="email"
                    name="email"
                    type="email"
                    as={CustomTextField}
                />

                <label htmlFor="mensagem">Sua mensagem</label>
                <Field 
                    id="mensagem" 
                    name="mensagem"
                    as={MensageTextField}
                />

                <Button type="submit" variant="contained" fullWidth>Submit</Button>
            </Form>
        </Formik>
    )
}

const CustomTextField = ({
  size='small',
  variant = 'standard',
  ...other
}) => {
  return (
    <TextField
        fullWidth
        size={size}
        {...other}
        InputLabelProps={{ shrink: true }}
    />
  );
};

const MensageTextField = styled(CustomTextField)`
`