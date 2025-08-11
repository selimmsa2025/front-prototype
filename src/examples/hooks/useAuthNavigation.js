import { useNavigate } from 'react-router-dom';

export default function useAuthNavigation() {
  let navigate = useNavigate();

  const navigateToLogin = () => {
    navigate('/login');
  };

  return navigateToLogin;
}