import React from 'react'


// Define event handler function for the input element's change event
// function handleFileSelect(event) {
//   // Get the selected file from the input element
//   const file = event.target.files[0];

//   // Create a new FileReader object
//   const reader = new FileReader();

//   // Add event listener for the FileReader object's load event
//   reader.addEventListener('load', handleImageLoad);

//   // Read the selected file as a data URL
//   reader.readAsDataURL(file);
// }

// function handleImageLoad(event) {
//     // Create a new image element
//     const img = new Image();
  
//     // Add event listener for the image element's load event
//     img.addEventListener('load', handleImageReady);
  
//     // Set the source of the image element to the data URL
//     img.src = event.target.result;
//   }
  
//   // Define event handler function for the image element's load event
//   function handleImageReady(event) {
//     // Get a reference to the image element
//     const img = event.target;
//      // Do something with the image, for example display it on the page
//      const setImg = document.querySelector('.mole');
//   document.querySelector(setImg).appendChild(img);
// }
function getImage (e){
    let setImg = document.querySelectorAll(".userDefine");
    let file = e.target.files[0];
    let filePath ="../img/"+ file.name;
    console.log(filePath)
    let setPlace = document.getElementById('mole');
    setPlace.setAttribute('src',filePath);
}
const CV = () => {
  return (
    <form className='myCV'>
        <h2 className='text-center mt-2'>Curriculmn Vitae</h2>
        <h3 className='text-center'>Of</h3>
        <h2 className='userDefine text-center'>Your Name is here</h2>
        <div className='dragImage' id='DragImg'>
            <label htmlFor='imageInput'>
                <img src="../img/5608.jpg" id='mole' alt="" />
            </label>
            <input type="file" id='imageInput' style={{display:"none"}} onChange={getImage} />
            
        </div>
        <br/>
        <div className='container p-3 row m-auto '>
            <div className='col col-md-4 mt-3'>
                <p>Name in full </p>
                <p>Father's Name </p>
                <p>Mother's Name </p>
                <p>Date of birth</p>
                <p>Gender </p>
                <p>Religion </p>
                <p> </p>
            </div>
            <div className='col col-md-1 mt-3'>
                <p>:</p>
                <p>:</p>
                <p>:</p>
                <p>:</p>
                <p>:</p>
                <p>:</p>
                <p>:</p>
            </div>
            <div className='col col-md-7 mt-3'>
                <p>MD.Akbar Hossan</p>
                <p>Solyman</p>
                <p>Jariya Begum</p>
                <p>02-04-2003</p>
                <p>Male</p>
                <p>Islam</p>
            </div>
        </div>

    </form>
  )
}

export default CV