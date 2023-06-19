import React, {useEffect, useState} from "react";

function App(){
    const [dogImage, setDogImage] = useState(null)
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(r=> r.json())
        .then(dog => setDogImage(dog.message))
    }, [])

    if(!dogImage){
        return <p>Loading...</p>
    }

return (
    <div>
       <img src={dogImage} alt="A Random Dog"/>
    </div>
)
}

export default App