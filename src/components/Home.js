import { useState } from 'react';

import {POSTER_SIZE,BACKDROP_SIZE,IMAGE_BASE_URL} from '../config';
//components
import NoImage from '../images/no_image.jpg';

const Home = () =>{
    const [state,setState] = useState();
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(false);
    
    return(
        <div>
            <h2>Home page</h2>
        </div>
    )
}
export default Home;