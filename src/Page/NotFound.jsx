// import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Lottie from "lottie-react";


const NotFound = () => {
  const data = useLoaderData();
      // Dynamic title
//   useEffect(()=> {
//     document.title='Berao | Not found'
//   },[])
    return (
        <div className="h-[100vh] relative bg-white">
            <Lottie animationData={data} loop={true} className="h-[90vh] w-full"/>;
        </div>
    );
};

export default NotFound;