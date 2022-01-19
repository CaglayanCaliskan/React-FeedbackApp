import spinner from '../assets/spn.gif';
function Spinner() {
  return (
    <img
      src={spinner}
      alt='Loading..'
      style={{ width: '100px', margin: 'auto', display: 'block' }}
    />
  );
}

export default Spinner;
