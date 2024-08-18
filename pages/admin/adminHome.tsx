import Dashboard from '@/components/adminComp/dashboard'
import DashboardTop from '@/components/adminComp/dashboardTop'
import React from 'react'

export default function AdminHome() {
  return (
    <div className='flex flex-row'>
        
        <Dashboard/>
       <DashboardTop/>
    </div>
  )
}
