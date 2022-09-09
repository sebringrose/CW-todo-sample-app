import { useSelector } from 'react-redux';

const StatusBar = () => {
  const loading = useSelector(state => state.loading);

  return <div style={{ 
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}>
    <h4>Status: {loading ? 'Loading...' : 'Loaded'}</h4>
  </div>;
}

export default StatusBar;
