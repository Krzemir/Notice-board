import { API_URL } from '../../config';
import { logOut } from '../../redux/usersRedux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const Logout = () => {
  const dispatch = useDispatch();

    //TODO: add logout on server - auth/logout
  useEffect(() => { 
    const options = {
      method: 'DELETE',
    };

    fetch(`${API_URL}/auth/logout`, options )
      .then(() => {
        dispatch(logOut());
      })
    }, [dispatch])

    return null
  }
 
export default Logout;