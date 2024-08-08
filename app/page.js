'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.replace('/dashboard');
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f0f0f0'
    }}>
      <h1 
        onClick={handleClick}  
        style={{
          color: '#1e3a8a', 
          fontSize: '4rem', 
          fontWeight: 'bold',
          cursor: 'pointer'  
        }}
      >
        Welcome to PrepBot!
      </h1>
    </div>
  );
}

