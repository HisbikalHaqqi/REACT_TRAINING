import React, { Component } from 'react'
import Navbar from '../organism/Navbar/Navbar'
import Footer from '../organism/Footer/Footer'
import Section from '../organism/Section/Section'
import SectionForm from '../organism/SectionForm/SectionForm'
import './TempDashboard.css'
import Table from '../atom/Table/Table'

class TempDashboard extends Component {
    render(){
        return (
          <div className="container">
               <Navbar/>
                <Section 
                    title="Pendataaan Vaksinasi Karyawan MII"
                    desc= " Mohon segera mengisi form dibawah ini apabila sudah melakukan vaksin, vaksin minimal 1 kali Apabila karyawan tidak melakukan vaksin kontrak karyawan segera ditangguhkan, Terima Kasih"/>
                <SectionForm/>
                <Table/>
                <Footer/>
          </div>
        )
    }
}
export default TempDashboard