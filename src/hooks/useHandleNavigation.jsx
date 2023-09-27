import { useNavigate } from 'react-router-dom';
import routesConfig from '../routes/routesConfig';

const useNavigationButton = pageToNavigate => {

    const navigate = useNavigate();

    const locations = routesConfig.map(route => {
		return route.path;
    });

    const path = locations.filter(path => pageToNavigate === path).toString()

    const handleNavigationClick = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
        navigate(`/${path}`)
    }
    
    return { handleNavigationClick };
}

export default useNavigationButton;