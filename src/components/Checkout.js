import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

const Checkout = () => {
  return (
    <div 
      className="checkout" 
      style={{
        textAlign: 'center',
        fontFamily: 'Nunito, sans-serif',
        fontSize: '40px',
        marginTop: '50px',
      }}
    >
      <FontAwesomeIcon icon={faCode} size='1x' />
      &ensp;Coming soon!
    </div>
  );
};

export default Checkout;