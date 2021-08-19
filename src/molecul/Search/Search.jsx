import React from 'react'
import Button from '../../atom/Button/Button'
import Input from '../../atom/Form/Input/Input'

const Search = () => {
    return (
        <div>
            <div className="form-horizontal">
                <Input label="Cari" type="text" placeholder="Cari Lokasi Vaksin"/>
                <Button/>
            </div>
        </div>
    )
}

export default Search