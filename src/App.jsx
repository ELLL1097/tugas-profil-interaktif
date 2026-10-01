import React from 'react';
import Header from './components/Header.jsx';
import Card from './components/Card.jsx';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Memanggil komponen Header */}
      <Header />
      
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', padding: '20px' }}>
        {/* Memanggil komponen Card berkali-kali dengan Props berbeda */}
        <Card 
          nama="Iqbal Yahya" 
          profesi="Frontend Developer" 
          deskripsi="Suka membuat antarmuka web yang rapi dan interaktif menggunakan React." 
        />
        <Card 
          nama="ELLL" 
          profesi="Data Analyst" 
          deskripsi="Berpengalaman dalam mengolah data dan membuat visualisasi yang menarik." 
        />
        <Card 
          nama="Lelouch Lamperouge" 
          profesi="UI/UX Designer" 
          deskripsi="Fokus pada pengalaman pengguna yang intuitif dan desain yang estetis." 
        />
      </div>
    </div>
  );
}

export default App;