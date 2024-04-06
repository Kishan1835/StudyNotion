import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom'


const PrivateRoute = ({ isLoggedIn, children }) => {
    if (isLoggedIn) {
        return children;
    }
    else {
        return <Navigate to='/login' />
    }
}

PrivateRoute.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired
};

export default PrivateRoute