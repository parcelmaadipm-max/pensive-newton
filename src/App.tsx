import React, { useState } from 'react';
import "./styles.css";

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const vehicles = [
    { name: 'Bike / Scooter', desc: 'Small parcels, documents, urgent local delivery' },
    { name: '3 Wheeler / Ape', desc: 'Medium goods and business parcel movement' },
    { name: 'Tata Ace', desc: 'Bulk parcels and light commercial transport' },
    { name: 'Pickup 8ft / 9ft', desc: 'Heavy goods and shop/business movement' },
    { name: 'Tata 407', desc: 'Larger loads and repeated business transport' },
    { name: '14 ft Vehicle', desc: 'High-capacity city and nearby-area movement' },
  ];

  const steps = [
    'Enter pickup and drop location',
    'Choose the right vehicle',
    'See fare estimate and confirm booking',
    'Track order live and complete payment',
  ];

  const highlights = [
    'Bangalore + Hosadurga focus',
    'Fast • Safe • Reliable local movement',
    '0% Commission – Flat platform fee only',
    'Customer, rider and merchant friendly flow',
  ];

  const whatsappBookingLink = "https://wa.me/918867252797?text=Hi%20ParcelMaadi,%20I%20would%20like%20to%20book%20a%20delivery.";
  const whatsappGroupLink = "https://chat.whatsapp.com/Ly7WO2IlYjmLskirbMH5Hc?mode=gi_t";

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900" style={{ scrollBehavior: 'smooth' }}>
      <header className="sticky top-0 z-40 border-b bg-white/9