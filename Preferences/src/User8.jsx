import React, { useState} from 'react'
import {CiSquareMinus,CiHeart } from "react-icons/ci";
import {Card,CardText,Row,Col,CardBody } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserIn from './UserIn';
import './User8.css'
import { FaArrowLeft,FaHeart, FaMinusSquare } from 'react-icons/fa'
const User8 = () => {
  const [imageSrc, setImageSrc] = useState('Image1.jpeg');
 
  const images = ['Image2.jpeg', 'Image3.jpeg', 'Image4.jpeg', 'Image5.jpeg'];
  const [isHeartClicked, setIsHeartClicked] = useState(false);
  const [isMinusClicked, setIsMinusClicked] = useState(false);
  const handleCardClick = (image) => {
    setImageSrc(image);
    console.log('onclick called');
  };
  const handleHeartClick = () => {
    setIsHeartClicked(!isHeartClicked);
  };
  const handleMinusClick = () => {
    setIsMinusClicked(!isMinusClicked);   
  }; 
  return ( 
    <div style={{width:'100%'}}>
       <div >    
      <button style={{ display: 'flex', alignItems: 'center', padding: '5px 10px', marginLeft: '80vw', marginTop: '2vw'  }} className='back-button'>
        <FaArrowLeft style={{ marginRight: 5 }} />
        Back
      </button>
      <FaArrowLeft style={{ marginRight: 5}} className='icon' />
        <Row  style={{width:'100%'}}>
          
          <Col md="4"  style={{ display: 'flex' ,justifyContent:'flex-start', paddingRight: 0,}}>
           <div>
            <Card style={{width: 300,height: 330,backgroundImage: `url(${imageSrc})`,backgroundSize: 'cover',borderRadius: 8,marginLeft:'28px' }}>       
<div style={{display:'flex',alignItems:'center',justifyContent:'space-between' ,padding:'15px'}}>
 

{isMinusClicked ? (
                    <FaMinusSquare
                      style={{ fontSize: '30px', color: '#FFFFFF', cursor: 'pointer' }}
                      onClick={handleMinusClick}
                    />
                  ) : (
                    <CiSquareMinus
                      style={{ fontSize: '30px', color: '#FFFFFF', cursor: 'pointer' }}
                      onClick={handleMinusClick}
                    />
                  )}
 {isHeartClicked ? (
                    <FaHeart
                      style={{ fontSize: '30px', color: '#FFFFFF', cursor: 'pointer' }}
                      onClick={handleHeartClick}
                    />
                  ) : (
                    <CiHeart
                      style={{ fontSize: '30px', color: '#FFFFFF', cursor: 'pointer' }}
                      onClick={handleHeartClick}
                    />
                  )}
  </div>
  </Card> 
</div> </Col>         
          <Col md="4" style={{display:'flex',paddingLeft: 0,marginLeft:'50px'}}>          
          <CardBody>
              <CardText style={{ fontFamily:'Poppins'}}><span className="key" >Date Of Birth:</span>xyz</CardText>
              <CardText style={{ fontFamily:'Poppins'}}><span className="key">Time Of Birth:</span>xyz</CardText>
              <CardText style={{ fontFamily:'Poppins'}}><span className="key">Religion:</span>xyz</CardText>
              <CardText style={{ fontFamily:'Poppins'}}><span className="key">Mother Tongue :</span>xyz</CardText>
              <CardText style={{ fontFamily:'Poppins'}}><span className="key">Language Proficiency:</span>xyz</CardText>
              <CardText style={{ fontFamily:'Poppins'}}><span className="key">Instagram id:</span>xyz</CardText>
              <CardText style={{ fontFamily:'Poppins'}}><span className="key">LinkedIn id:</span>xyz</CardText>
              <CardText style={{ fontFamily:'Poppins'}}><span className="key">Address :</span>xyz</CardText>
              <CardText style={{ fontFamily:'Poppins'}}><span className="key">Citizenship:</span>xyz</CardText>
            
            </CardBody>
          </Col>
        </Row>
      </div>
      <Row className='row' style={{width:'100%'}}>
        <Col className='col' style={{
          display:"flex",
        marginTop:"10px",
        marginLeft:"20px",
        marginRight:"20px"
        }}>
          {images.map((image, index) => (
            <div key={index} style={{
              borderRadius:"10px",
              overflowX:"hidden",
              margin:"6px",
             

            }} className={`image image${index + 1}`} onClick={() => handleCardClick(image)}>
              <img src={image} style={{ width:' 156.64px', height: '156.64px' }} alt="Clickable card" />
            </div>
          ))}
        </Col>
        <UserIn/>
      </Row>
    </div>
   
  )
}


export default User8


