import React from 'react'
import TempDashboard from '../template/TempDashboard'

const Dashboard = () => {
    const titleVal = "Pendataan Vaksinasi Karyawan MII"
    const descVal  = "Mohon segera mengisi form dibawah ini apabila sudah melakukan vaksin, vaksin minimal 1 kali Apabila karyawan tidak melakukan vaksin kontrak karyawan segera ditangguhkan, Terima Kasih"
    
    return (
        <TempDashboard 
            title= { titleVal }
            desc= { descVal }
        />
    )
}
export default Dashboard