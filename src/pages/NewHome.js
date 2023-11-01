import React,{useState} from 'react'
import axios from 'axios'

function NewHome() {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (event) => {
      const file = event.target.files[0];
      setSelectedImage(file);
    };

    const handleSubmit =(e) => {

        e.preventDefault();
        const formData = new FormData();
        formData.append("file", selectedImage);
        axios.post("http://localhost:5000/predict",formData).then((res)=>{
            console.log(res.data);
        })

    }
  
    return (
      <div>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {/* {selectedImage && <img src={URL.createObjectURL(selectedImage)} alt="Selected" />} */}
        <button onClick={handleSubmit}> predict</button>
      </div>
    );
  
}

export default NewHome

// import React, { useState } from "react";
// import "../styles/Home.css";
// import FullBannerImage from "../assets/bg2.png";
// import HalfBannerImage from "../assets/bg.jpg";
// import Navbar from '../components/Navbar'
// // import { Form, Upload, Button, message } from "antd";
// // import { UploadOutlined } from "@ant-design/icons";
// // Import axios for making HTTP requests to your backend (backend integration not shown).
// import axios from "axios";

// function Home() {
//   // const [selectedFile, setSelectedFile] = useState(null);
//   const [data, setData] = useState(null);
//   // const [isLoading, setIsLoading] = useState(false);
//   // const [image, setImage] = useState(false);

//   // const sendFile = async () => {
//   //   if (image) {
//   //     const formData = new FormData();
//   //     formData.append("file", selectedFile);
//   //     try {
//   //       // Send the file to the backend for processing (replace with your backend URL).
//   //       const response = await axios.post("http://localhost:5000/predict", formData);

//   //       if (response.status === 200) {
//   //         setData(response.data);
//   //       }
//   //     } catch (error) {
//   //       console.error("Error sending file to the backend:", error);
//   //     }

//   //     setIsLoading(false);
//   //   }
//   // };

//   // const clearData = () => {
//   //   setData(null);
//   //   // setSelectedFile(null);
//   // };

//   // const onSelectFile = (file) => {
//   //   if (!file || file.length === 0) {
//   //     setSelectedFile(null);
//   //     setData(null);
//   //     console.log("from onselectfile if");
//   //   } else {
//   //       console.log("from onselectfile else");
//   //     setSelectedFile(file[0]);
//   //     setImage(true);
//   //   }
//   // };

//   // const beforeUpload = (file) => {
//   //   const allowedFileTypes = ["image/jpeg", "image/png", "image/jpg", "image/gif"];
//   //   if (!allowedFileTypes.includes(file.type)) {
//   //     message.error("You can only upload JPG, JPEG, PNG, or GIF images!");
//   //     console.log("Not accepted");
//   //     return false;
//   //   }
//   //   console.log("accepted");
//   //   return true;
//   // };

//   // const handleFormSubmit = async () => {
//   //   if (image) {
//   //     setIsLoading(true);
//   //     sendFile();
//   //   } else {
//   //     message.error("Please upload an eye image before submitting.");
//   //   }
//   // };

//   const [selectedImage, setSelectedImage] = useState(null);

//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     setSelectedImage(file);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!selectedImage) {
//       // Show an error message.
//       alert("Please upload an image before submitting.");
//       return;
//     }
//     const formData = new FormData();
//     formData.append("file", selectedImage);
//     axios.post("http://localhost:5000/predict", formData).then((res) => {
//       console.log(res.data);
//       setData(res.data);
//     });
//   };

//   return (
//     <>
//     <Navbar />
//     <div
//       className="full-bg"
//       style={{ backgroundImage: `url(${FullBannerImage})` }}
//     >
//       <div
//         className="half-bg"
//         style={{ backgroundImage: `url(${HalfBannerImage})` }}
//       >
//         <h1 className="title">Detection of Visual Defects in Children</h1>
//         <div className="detect-cntr">
//           {data ? (
//             <div style={{position:"relative" , top:"5rem" , left:"5rem",height:"25rem" , color:"white" , fontSize:"25px"}} >
//               {/* const {class} = data;  */}
//               <h2 >predicted disease is {data.class}</h2>
//               <h2 >confidence {data.confidence}</h2>
//               {/* <br /> */}
//               {/* {selectedImage && <img src={URL.createObjectURL(selectedImage)} alt="Selected"  style={{height:"60px", width:"60px"}}/>} */}
//             </div>
//           ) : (
//             <div>
//               <div>
//                 <h1 className="heading">Detect The Impairment</h1>
//                 <div
//                   className="upload-container"
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "space-between",
//                   }}
//                 >
//                   <div>
//                     <label htmlFor="uploadtext">Upload Image to test</label>
//                     <input
//                       type="file"
//                       accept="image/*"
//                       id="uploadtext"
//                       onChange={handleImageChange}
//                       style={{ display: "none" }}
//                     />
//                   </div>
//                   <div>
//                     <button onClick={handleSubmit}> predict</button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//     </>
//   );
// }

// export default Home;