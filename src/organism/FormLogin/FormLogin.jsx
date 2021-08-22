import React from 'react'
import Button from '../../atom/Button/Button'
import Input from '../../atom/Form/Input/Input'
import Label from '../../atom/Label'
import './FormLogin.css'

const FormLogin = () => {
    return (
        <div className="form-login">
            <Label type="title">Form Login</Label>
            <Input type="text" label="Username / Email" placeholder="@mail.com"/>
            <Input type="password" label="Password" placeholder="Combine Letter And Number"/>
            <div className="mt-2"></div>
            <Button/>
        </div>
    )
}

export default FormLogin