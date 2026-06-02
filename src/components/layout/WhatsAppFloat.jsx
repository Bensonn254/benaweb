import { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppFloat() {
  const [isHovered, setIsHovered] = useState(false)

  const handleClick = () => {
    window.open("https://wa.me/254743052401?text=Hi%20BenaWeb%2C%20I'd%20like%20to%20discuss%20a%20web%20project.", "_blank")
  }

  return (
    <div
      className="whatsapp-float-btn"
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'fixed',
        right: '25px',
        bottom: '90px',
        zIndex: 9999,
        backgroundColor: '#25d366',
        color: '#fff',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transform: isHovered ? 'scale(1.05) translateY(-3px)' : 'scale(1) translateY(0)',
        transition: 'all 0.3s ease',
      }}
      title="Chat with us on WhatsApp"
    >
      <FaWhatsapp style={{ fontSize: '32px' }} />
    </div>
  )
}
