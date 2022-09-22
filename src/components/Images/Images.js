import images from "~/assets/images"
import { useState } from "react";
import PropTypes from "prop-types";

function Image  ({src=images.noImage,fallback: fallbackDefault = images.noImage,...props}){
    const [fallback,setFallback] = useState('')
    const handleError = () => {    
        setFallback(fallbackDefault) 
    }    
    return  <img src={fallback || src} {...props} onError={handleError} />;
}

Image.propTypes = {
    src: PropTypes.string,
    fallback: PropTypes.string
}

export default Image;