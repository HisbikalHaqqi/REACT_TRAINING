import React, { Component } from 'react'
import Input from '../../atom/Form/Input/Input'
import Button from '../../atom/Button/Button'
import './SectionForm.css'

class SectionForm extends Component {
    render () {
        return (
            <div className="section-form">
                <h4>Lengkap Kolom Dibawah Ini</h4>
                <Input type="text" label="NIK KTP" placeholder="16 Digit"/>
                <Input type="text" label="NIK Karyawan" placeholder="16 Digit"/>
                <Input type="text" label="Nama Lengkap" placeholder="Sesuai KTP"/>
                <Input type="text" label="Alamat" placeholder="Sesuai Domisili"/>
                <Input type="text" label="No Telephone" placeholder="08XX / 021 "/>
                <Input type="text" label="Deskripsi Vaksin" placeholder="Tgl Dan Vaksin Ke - "/>
                <div className="mt-2"></div>
                <Button/>
                <div className="mb-2"></div>
            </div>

        )
    }
}

export default SectionForm