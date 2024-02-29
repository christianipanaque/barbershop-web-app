"use client"

import React from 'react';
import PhotoUploadComponent from '../components/PhotoUploadComponent';
import HaircutSelectionComponent from '../components/HaircutSelectionComponent';
import AppointmentSchedulerComponent from '../components/AppointmentSchedulerComponent';


export default function Page() {
    return (
        <div className="App">
            <h1>Schedule your appointment with Santos' Barbershop</h1>
            <h2>Upload Your Photo</h2>
            <PhotoUploadComponent />
            <h2>Choose Your Haircut</h2>
            <HaircutSelectionComponent />
            <h2>Schedule Your Appointment</h2>
            <AppointmentSchedulerComponent />
            <h1>
                <button type='submit'> SCHEDULE NOW </button>
            </h1>
        </div>
    );
}