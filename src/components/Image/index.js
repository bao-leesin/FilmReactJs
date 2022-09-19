import images from "~/assets/images"
import { useState } from "react";

function Image  ({src=images.noImage,fallback: fallbackDefault = images.noImage,...props}){
    const [fallback,setFallback] = useState('')
    const handleError = () => {    
        setFallback(fallbackDefault) 
    }
    
    return  <img src={fallback || src} {...props} onError={handleError} />;
}

export default Image;