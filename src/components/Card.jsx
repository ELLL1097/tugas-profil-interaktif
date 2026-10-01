import React, { useState } from 'react';

// Menerima props: nama, profesi, dan deskripsi
function Card({ nama, profesi, deskripsi }) {
  // Membuat state untuk menghitung jumlah Like
  const [likes, setLikes] = useState(0);

  return (
    <div style={{ 
      border: '1px solid #ddd', 
      borderRadius: '8px', 
      padding: '20px', 
      margin: '10px', 
      width: '250px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)' 
    }}>
      <h2 style={{ margin: '0 0 10px 0' }}>{nama}</h2>
      <h4 style={{ margin: '0 0 10px 0', color: '#555' }}>{profesi}</h4>
      <p>{deskripsi}</p>
      
      {/* Tombol interaktif menggunakan state */}
      <button 
        onClick={() => setLikes(likes + 1)} 
        style={{ padding: '8px 12px', cursor: 'pointer', backgroundColor: '#007BFF', color: 'white', border: 'none', borderRadius: '4px' }}
      >
        👍 Like ({likes})
      </button>
    </div>
  );
}

export default Card;