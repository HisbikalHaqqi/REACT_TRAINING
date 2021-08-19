import React, { Component } from 'react'
import Karyawan from '../../assets/datavaksin.json'
import './Table.css'

class Table extends Component {
    render()
     {
        return(
            
            <div>
                <center><h3>Data Karyawan Yang Sudah Di Vaksin</h3></center>
                <div className="mb-2"></div>
                <div className="tableFixHead">
                    <table>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>NIK</th>
                                <th>Nama Karyawan</th>
                                <th>Keterangan Vaksin</th>
                                <th>No Telepon</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            {
                            Karyawan.map((item, i) => {
                                    return(
                                        <tr>
                                        <td key={i}>{ item.No }</td>
                                            <td key={i}>{ item.NIK }</td>
                                            <td key={i}>{ item.Nama }</td>
                                            <td key={i}>{ item.Keterangan }</td>
                                            <td key={i}>{ item.NoHp }</td>
                                        </tr>
                                    )
                            })
                            }
                        </tbody>
                    </table>
                </div>
                </div>
        )
    }
}
export default Table