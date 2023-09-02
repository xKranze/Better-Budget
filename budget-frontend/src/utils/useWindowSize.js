import { useEffect, useState } from "react"

//hook
export const useWindowSize = ()=>{
    //default width hieght  = 0
    const [size, setSize] = useState([window.innerWidth, window.innerHeight])

//useeffect to update everytime user changes screen size. 
useEffect(() => {
    const updateSize = () => {
        //can call the window at anytime its a global object width-x height-y axis
setSize([window.innerWidth, window.innerHeight])
    }
   // everytimee screen size changes it will trigger this update function.
    window.addEventListener('resize', updateSize)
    //then remove listner and update size again
        return () => window.removeEventListener('resize', updateSize)
    }, [])

    return {
        width: size[0],
        height: size[1]
    }
}