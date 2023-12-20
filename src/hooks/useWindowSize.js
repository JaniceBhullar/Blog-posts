import { useState, useEffect } from "react";

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined
    })

useEffect(() => {
// if this function is called, it will track the height and width of the window
const handleResize = () => {
// Window is the constructor funtion for the window; window is a global variable holding an instance of Window; window represents the browser window containing your doc
    setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
    })
}
handleResize()

window.addEventListener("resize", handleResize)
// listen to resize and handle Resize
// const cleanUp = () => {
//     console.log("runs if a useEffect dependency changes")
//     window.removeEventListener("resize", handleResize)
// }
// return cleanUp;

return (() => window.removeEventListener("resize", handleResize))

},[])
return windowSize
}

// will run only at loadtime
// but to get values to readjust when window is resized we will add event listner to listen to resize
// use cleanup func - to prevent memory leak - we need to remove event listener - 

export default useWindowSize

// memory leak: The browser keeps objects in heap memory while they can be reached from the root 
// through the reference chain. Garbage Collector is a background process in the JavaScript engine 
// that identifies unreachable objects, removes them, and reclaims the underlying memory.
// A memory leak occurs when an object in memory that is supposed to be cleaned in a garbage 
// collection cycle stays reachable from the root through an unintentional reference by another 
// object. Keeping redundant objects in memory results in excessive memory use inside the app and 
// can lead to degraded and poor performance.

// When you use the useEffect hook, you have the option to return a cleanup function. 
// This cleanup function is used to clean up any resources or effects that were created in the hook.  
// You can clean side effects like fetching data from an API, setting up event listeners, 
// or creating intervals or timeouts. Let’s cover these side effects one by one.

// useEffect cleanup function can takes place in two incidents:

// When a component using the useEffect hook unmounts.
// When the dependency array in the useEffect hook changes as it triggers a re-render of the component.
// It is used to tidy up any unwanted effects that were created during the component's lifespan, 
// and we can also use it to perform additional cleanup tasks.