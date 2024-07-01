import React, { useState } from 'react'
import './Preferences.css'
import logos from "../src/assets/leftmadala.png"
import logos1 from '../src/assets/rightMandala.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Form,FormGroup,Label,Input,Col,Row,Dropdown,FormFeedback,FormText
} from 'reactstrap';
const Preferences = () => {

  const [formData, setFormData] = useState({
    Lookings: '',
    minH: '',
    maxH: '',
    minAge: '',
    maxAge: '',
    motherTongue: '',
    religion: '',
    caste: '',
    star: '',
    dosham: '',
    Education: '',
    Occupation: '',
    Employetype: '',
    annualIncome: '',
    City: '',
    state: '',
    country: '',
    marital: '',
    disability: '',
    drinkingHabits: '',
    smokingHabits: '',
    eatingHabits: ''
  })

  const lookingFor = ["Myself", "Mybrother", "Myfriend", "colleague", 'Realatives']
  const options = [];
  for (let feet = 3; feet <= 7; feet++) {
    for (let inches = 0; inches < 12; inches++) {
      options.push(`${feet}' ${inches}''`);
    }
  }
  const ageRange = Array.from({ length: 83 }, (_, i) => i + 18);
  const motherTongues = ["English", "Spanish", "French", "German", "Mandarin", "Hindi", "Arabic", "Portuguese", "Bengali", "Russian"]; // Example list of mother tongues
  const religions = ["Christianity", "Islam", "Hinduism", "Buddhism", "Judaism", "Sikhism", "Bahá'í Faith", "Jainism", "Zoroastrianism", "Other"]; // Example list of religions
  const starSigns = [
    'Ashwini', 'Bharani', 'Krittika', 'Rohini', 'Mrigashira', 'Ardra',
    'Punarvasu', 'Pushya', 'Ashlesha', 'Magha', 'Purva Phalguni', 'Uttara Phalguni',
    'Hasta', 'Chitra', 'Swati', 'Vishakha', 'Anuradha', 'Jyeshtha',
    'Mula', 'Purva Ashadha', 'Uttara Ashadha', 'Shravana', 'Dhanishta', 'Shatabhisha',
    'Purva Bhadrapada', 'Uttara Bhadrapada', 'Revati'
  ]
  const doshamOption = ['yes', 'No']
  const EducationOptions = [
    "High School Diploma",
    "Associate's Degree",
    "Bachelor's Degree",
    "Master's Degree",
    "Doctoral Degree",
    "Other"
  ];
  const occupationOptions = [
    "Accountant",
    "Engineer",
    "Doctor",
    "Teacher",
    "Lawyer",
    "Artist",
    "Entrepreneur",
    "Student",
    "Retired",
    "Other"
  ];
  const employmentTypeOptions = [
    "Full-time",
    "Part-time",
    "Freelance",
    "Contract",
    "Internship",
    "Temporary",
    "Other"
  ];
  const annualIncomeOptions = [
    "Less than $20,000",
    "$20,000 - $40,000",
    "$40,000 - $60,000",
    "$60,000 - $80,000",
    "$80,000 - $100,000",
    "Over $100,000",
    "Prefer not to disclose"
  ];
  const maritalStatus = ['single', 'married', 'Divorced', 'widowed']
  const disabilitiesOptions = [
    "Visual Impairment",
    "Hearing Impairment",
    "Mobility Impairment",
    "Cognitive/Intellectual Impairment",
    "Psychiatric/Mental Health Condition",
    "Chronic Illness",
    "Other"
  ];
  const drinkingHabitsOptions = [
    'Non-drinker',
    'Occasional drinker',
    'Regular drinker'
  ];
  const smokingHabitsOptions = [
    'Non-smoker',
    'Occasional smoker',
    'Regular smoker'
  ];
  const eatingHabitsOptions = [
    'Vegetarian',
    'Non-Vegetarian',
    'Eggetarian',
    'Vegan'
  ];
  const handleOnChange = async (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted with data: ', formData);
    alert("Preferences Save Sucessfully")
  };


  return (

    <div>
      <form onSubmit={handleSubmit}>

        <div style={{ display: 'flex', alignItems: 'center', width: 1400 }}>
          <div className="EditPreferences" style={{ marginLeft: 365, top: -1200, position: 'absolute', color: '#780024', fontSize: 36, fontFamily: 'Poppins', fontWeight: '400', lineHeight: 76, wordWrap: 'break-word' }}>Edit Preferences</div>

          <div style={{ display: 'flex', flexDirection: 'column', padding: '1vw', width: 102, height: 50, marginLeft: 365, top: 200, position: 'absolute', borderRadius: 3 }}>
            <div>
            <FormGroup column>
            <Label for="Preferences" className='preference'>
            ProfileCreatedFor
    </Label>
    <Input className='preferences'
      id="Lookings"
      name="Lookings"
      type="select"
      value={formData.Lookings}
      onChange={handleOnChange}  style={{ width: '20vw' }}
    >
     <option value="" disabled>Select</option>
                {lookingFor.map((Looking, index) => (
                  <option key={index} value={Looking}>{Looking}</option>))}
                  </Input>
    </FormGroup>
              {/* <label className='preference' htmlFor="Lookings" >ProfileCreatedFor</label>
              <select className='preferences' id='Lookings' name='Lookings' value={formData.Lookings}
                onChange={handleOnChange} style={{ width: '20vw' }}>
                <option value="" disabled>Select</option>
                {lookingFor.map((Looking, index) => (
                  <option key={index} value={Looking}>{Looking}</option>
                )
                )}
              </select> */}
            </div>

            <div style={{ display: 'flex', flexDirection: 'row', padding: '1vw', gap: '1rem' }}>
              <div>
                <label className='preference' htmlFor="MinAge" >MinAge</label><br />
                <select className='preferences' id='minAge' name='minAge' value={formData.minAge}
                  onChange={handleOnChange} style={{ width: '10vw' }}>
                  <option value="" disabled>MinAge</option>
                  {ageRange.map((minAges, index) => (
                    <option key={index} value={minAges}>{minAges}</option>
                  )
                  )}
                </select><br />
              </div>
              <div>
                <label className='preference' htmlFor="MaxAge" >MaxAge</label>
                <select className='preferences' id='maxAge' name='maxAge' value={formData.maxAge}
                  onChange={handleOnChange} style={{ width: '10vw' }}>
                  <option value="" disabled>max Age</option>
                  {ageRange.map((maxAges, index) => (
                    <option key={index} value={maxAges}>{maxAges}</option>
                  )
                  )}
                </select>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', padding: '1vw', gap: '1rem' }}>
              <div >
                <label className='preference' htmlFor="Minh" >MinHeight</label>
                <select className='preferences' id='minH' name='minH' value={formData.minH}
                  onChange={handleOnChange} style={{ width: '10vw' }}>
                  <option value="" disabled>Min Height</option>
                  {options.map((minHeight, index) => (
                    <option key={index} value={minHeight}>{minHeight}</option>
                  )
                  )}
                </select>
              </div>
              <div>
                <label className='preference' htmlFor="MaxH" >MaxHeight</label>
                <select className='preferences' id='maxH' name='maxH' value={formData.maxH}
                  onChange={handleOnChange} style={{ width: '10vw' }}>
                  <option value="" disabled>Max Height</option>
                  {options.map((maxHeight, index) => (
                    <option key={index} value={maxHeight}>{maxHeight}</option>
                  )
                  )}
                </select>
              </div>
            </div>
            <label className='preference' htmlFor='motherT' >MotherTongue</label>
            <select className='preferences' id='motherTongue' name='motherTongue' value={formData.motherTongue}
              onChange={handleOnChange} style={{ width: '20vw' }}>
              <option value="" disabled>Mother Tongue</option>
              {motherTongues.map((mother, index) => (
                <option key={index} value={mother}>{mother}</option>
              )
              )}
            </select>
            <div style={{ display: 'flex', flexDirection: 'row', padding: '1vw', gap: '1rem' }}>
              <div>
                <label className='preference' htmlFor='religion'>Religion</label>
                <select className='preferences'
                  id="religion"
                  name="religion"
                  value={formData.religion}
                  onChange={handleOnChange} style={{ width: '10vw' }}>


                  <option value="" disabled>SelectReligion</option>
                  {religions.map((religio, index) => (
                    <option key={index} value={religio}>{religio}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className='preference' htmlFor='motherT'>Caste</label>
                <input className='preferences' type='text' placeholder='Entercaste' id='caste' name='caste' value={formData.caste} onChange={handleOnChange} style={{ width: '10vw' }}></input>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', padding: '1vw', gap: '1rem' }}>
              <div>
                <label className='preference' htmlFor='star'>Star</label>
                <select className='preferences' id='star' name='star' value={formData.star} onChange={handleOnChange} style={{ width: '10vw' }}>
                  <option value="" disabled>Star</option>
                  {starSigns.map((Sign, index) => (
                    <option key={index} value={Sign}>{Sign}</option>

                  )
                  )}

                </select></div>
              <div>
                <label className='preference' htmlFor='dosham'>Dosham</label>
                <select className='preferences' id='dosham' name='dosham' value={formData.dosham} onChange={handleOnChange} style={{ width: '10vw' }}>
                  <option value="" disabled>Dosham</option>
                  {doshamOption.map((doshams, index) => (
                    <option key={index} value={doshams}>{doshams}</option>

                  )
                  )}

                </select>
              </div>
            </div>
            <div>
              <label className='preference' htmlFor='education' >Education</label>
              <select className='preferences' id='Education' name='Education' value={formData.Education} onChange={handleOnChange} style={{ width: '20vw' }}>
                <option value="" disabled>Education</option>
                {EducationOptions.map((Educations, index) => (
                  <option key={index} value={Educations}>{Educations}</option>

                )
                )}

              </select><br />
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', padding: '1vw', gap: '1rem' }} >
              <div>
                <label className='preference' htmlFor='occupation'>Occupation</label>
                <select className='preferences' id='Occupation' name='Occupation' value={formData.Occupation} onChange={handleOnChange} style={{ width: '10vw' }}>
                  <option value="" disabled>Occupation</option>
                  {occupationOptions.map((Occupations, index) => (
                    <option key={index} value={Occupations}>{Occupations}</option>

                  )
                  )}

                </select>
              </div>
              <div>
                <label className='preference' htmlFor="Employee" >EmploymentType</label>
                <select className='preferences' id='Employetype' name='Employetype' value={formData.Employetype} onChange={handleOnChange} style={{ width: '10vw' }}>
                  <option value="" disabled>Employetype</option>
                  {employmentTypeOptions.map((Employetypes, index) => (
                    <option key={index} value={Employetypes}>{Employetypes}</option>

                  )
                  )}

                </select><br />
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', padding: '1vw', gap: '1rem' }}>
              <div>
                <label className='preference' htmlFor="Income" >AnnualIncome</label>
                <select className='preferences' id='annualIncome' name='annualIncome' value={formData.annualIncome} onChange={handleOnChange} style={{ width: '10vw' }}>
                  <option value="" disabled>annualIncome</option>
                  {annualIncomeOptions.map((annualIncome, index) => (
                    <option key={index} value={annualIncome}>{annualIncome}</option>

                  )
                  )}

                </select>
              </div>
              <div>
                <label className='preference' htmlFor="city" >City</label>
                <input className='preferences' type='text' placeholder='City' id='' name='City' value={formData.City} onChange={handleOnChange} style={{ width: '10vw' }}></input>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', padding: '1vw', gap: '1rem' }}>
              <div>
                <label className='preference' htmlFor="state" >State</label>
                <input className='preferences' type='text' placeholder='state' id='' name='state' value={formData.state} onChange={handleOnChange} style={{ width: '10vw' }} ></input></div>
              <div>
                <label className='preference' htmlFor="country">Country</label>
                <input className='preferences' type='text' placeholder='country' id='' name='country' value={formData.country} onChange={handleOnChange} style={{ width: '10vw' }} ></input>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'row', padding: '1vw', gap: '1rem' }}>
              <div>
                <label className='preference' htmlFor="marital" >Marital</label>
                <select className='preferences'
                  id="marital"
                  name='marital'
                  value={formData.marital}
                  onChange={handleOnChange} style={{ width: '10vw' }}>


                  <option value="" disabled>Marital Status</option>

                  {maritalStatus.map((Marital, index) => (
                    <option key={index} value={Marital}>{Marital}</option>
                  ))}
                </select>
              </div>
              <div>
                
                <label className='preference' htmlFor="disability" >Disability</label>
                <select className='preferences' id='disability' name='disability' value={formData.disability} onChange={handleOnChange} style={{ width: '10vw' }}>
                  <option value=" " disabled>Select disability</option>
                  {disabilitiesOptions.map((disability, index) => (
                    <option key={index} value={disability}>{disability}</option>
                  ))}
                </select>
              </div>
            </div><br />
            <div >
              <label className='preference' htmlFor="drinking" >DrinkingHabits</label>
              <select className='preferences' id="drinkingHabits" name='drinkingHabits' value={formData.drinkingHabits} onChange={handleOnChange} style={{ width: '20vw' }}>
                <option value="" disabled>Select drinking habits</option>
                {drinkingHabitsOptions.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>
            </div><br />
            <div >
              <label className='preference' htmlFor="smoking" >SmokingHabits</label>
              <select className='preferences' id="smokingHabits" name="smokingHabits" value={formData.smokingHabits} onChange={handleOnChange} style={{ width: '20vw' }}>
                <option value="" disabled>Select smoking habits</option>
                {smokingHabitsOptions.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select><br />
            </div><br />
            <div style={{ gap: '2rem' }}>
              <label className='preference' htmlFor="eating" >EatingHabits</label>
              <select className='preferences' id="eatingHabits" name='eatingHabits' value={formData.eatingHabits} onChange={handleOnChange} style={{ width: '20vw' }}>
                <option value="" disabled>Select eating habits</option>
                {eatingHabitsOptions.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select><br />
            </div>
            <div className="Rectangle4469" /><br />
            <div className="Save"  ><button className='preferences' type='submit' style={{ color: 'white', fontSize: 24, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word', background: '#780024', borderRadius: 9, gap: '2rem' }}>Save  </button>

            </div>

          </div>


          <div className="Rectangle4112" style={{ width: 1481.74, height: 71, left: -20.87, top: 0, position: 'fixed', background: '#780024' }} />
          <img className="Logo011" style={{ width: 249, height: 38.12, left: 110, top: 20.19, position: 'fixed' }} src="https://via.placeholder.com/249x38" />
          <div className="Rectangle4115" style={{ width: 329, height: 500, left: 20, top: 80, position: 'absolute', background: '#780024', borderRadius: 9.70, zIndex: "-1" }} />
          <div className="Ellipse31" style={{ width: 194, height: 187, left: 76, top: 109, position: 'absolute', background: '#D9D9D9', borderRadius: 9999, zIndex: "-1" }} />
          <div style={{ width: 130.50, height: 59.22, left: 91.93, top: -380, position: 'absolute', textAlign: 'center', color: '#E0AA3E', fontSize: 23, fontFamily: 'Poppins', fontWeight: '600', lineHeight: 62.40, wordWrap: 'break-word', zIndex: "-1" }}>Matches</div>
          <div className="EditPreferences" style={{ width: 242.35, height: 59.22, left: 36, top: -340.44, position: 'absolute', textAlign: 'center', color: '#E0AA3E', fontSize: 23, fontFamily: 'Poppins', fontWeight: '600', lineHeight: 62.40, wordWrap: 'break-word', zIndex: "-1" }}>Edit Preferences</div>
          <div className="EditProfile" style={{ width: 156.82, height: 59.22, left: 78.77, top: -300.22, position: 'absolute', textAlign: 'center', color: '#E0AA3E', fontSize: 23, fontFamily: 'Poppins', fontWeight: '600', lineHeight: 62.40, wordWrap: 'break-word', zIndex: "-1" }}>Edit Profile</div>
          <div className="Shortlisted" style={{ width: 163.40, height: 58.12, left: 75.48, top: -260.65, position: 'absolute', textAlign: 'center', color: '#E0AA3E', fontSize: 23, fontFamily: 'Poppins', fontWeight: '600', lineHeight: 62.40, wordWrap: 'break-word', zIndex: "-1" }}>Shortlisted</div>
          <div className="IgnoredUsers" style={{ width: 207.26, height: 59.22, left: 53, top: -220.77, position: 'absolute', textAlign: 'center', color: '#E0AA3E', fontSize: 23, fontFamily: 'Poppins', fontWeight: '600', lineHeight: 62.40, wordWrap: 'break-word', zIndex: "-1" }}>Ignored Users</div>
          <div className="Settings" style={{ width: 123.92, height: 59.22, left: 92, top: -180.99, position: 'absolute', textAlign: 'center', color: '#E0AA3E', fontSize: 23, fontFamily: 'Poppins', fontWeight: '600', lineHeight: 62.40, wordWrap: 'break-word', zIndex: "-1" }}>Settings</div>
          <div className="Line51" style={{ width: 280, height: 0, left: 40, top: 400, position: 'absolute', border: '0.71px #7C7C7C solid', zIndex: "-1" }}></div>
          <div className="Line51" style={{ width: 280, height: 0, left: 40, top: 355, position: 'absolute', border: '0.71px #7C7C7C solid', zIndex: "-1" }}></div>
          <div className="Line50" style={{ width: 280, height: 0, left: 40, top: 440, position: 'absolute', border: '0.71px #7C7C7C solid', zIndex: "-1" }}></div>
          <div className="Line50" style={{ width: 280, height: 0, left: 40, top: 480, position: 'absolute', border: '0.71px #7C7C7C solid', zIndex: "-1" }}></div>
          <div className="Line50" style={{ width: 280, height: 0, left: 40, top: 520, position: 'absolute', border: '0.71px #7C7C7C solid', zIndex: "-1" }}></div>     </div>
        <div>
          <img className="logos" style={{ width: 120.86, height: 273.77, left: -0.42, top: 1000, position: 'absolute', transformOrigin: '0 0', zIndex: -1 }} src={logos} />

        </div>
        <div>
          <img className="Pcmjuw273Photoroom5" style={{ width: 120.91, height: 225.98, transformOrigin: '0 0', marginLeft: '140%', marginTop: '3vw' }} src={logos1} />
        </div>
        {/* <div style={{ marginTop: '240vh', position: 'absolute', zIndex: "-1" }}>
        <div className="Group191" style={{ width: 1731, height: 795, left: -152, top: 1402, zIndex: "-1" }}>
          <div className="Rectangle4109" style={{ width: 1440, height: 408, left: 152, top: 145, zIndex: "-1", backgroundColor: '#780024' }} >
            <div className='img'>

            </div>
          </div>
          <img className="4" style={{ width: 495, height: 596, left: 275, top: 152, zIndex: '-1', opacity: 1 }} src={background} />
        </div>
      </div> */}

        {/* <div style={{ marginTop: '240vh', position: 'absolute', zIndex: "-1", width: "100%", height: "450px" }}>

          <div className='BottomHead'>
            <p className='para'><span className='color' style={{ color: '#E0AA3E', fontFamily: 'poppins', fontSize: '28px', lineHeight: '-2vw' }}>S</span>electing a life partner is like adding a <br style={{ marginTop: "5vh" }} />preciousmelody to the song of your life,<br />forever altering its tune. The sweetest<br />symphony is found in choosing the perfect<br />harmony. How delightful it would be to have <br />a trusted companion to join in this<br /> heartwarming duet of choice.</p>
            <div className="Line44" style={{ width: 233, height: 0, marginLeft: '40vw', marginTop: 237, position: 'absolute', transform: 'rotate(90deg)', transformOrigin: '0 0', border: '1px #D9D9D9 solid' }}></div>
            <h1 className='color' style={{left:'45vw',top:"10px",position: 'absolute', color: '#E0AA3E', fontSize: 22, fontFamily: 'Poppins', fontWeight: '700', lineHeight: 29, wordWrap: 'break-word'}}>Contact Us</h1>

            <div className="ContactUs" style={{display:'flex',alignItems:'center',justifyContent:'center',marginRight:'30%',marginBottom:'20px', color: '#E0AA3E', fontSize: 28, fontFamily: 'Poppins', fontWeight: '900', lineHeight: 29, wordWrap: 'break-word'}}>
              <h1 className='color'>Contact us</h1> </div>
                <p className='para'>mobile:123456789</p>
                <p className='para'>Email:xyz@gmail.com</p>   
          </div>
        </div> */}



        {/* background img */}



        <div style={{ marginTop: '240vh', position: 'relative', width: "100%", height: "450px", display: "flex", justifyContent: "space-evenly" }}>
          <div className='BottomHead'>
            <p className='para'><span className='color' style={{ color: '#E0AA3E', fontFamily: 'poppins', fontSize: '28px', lineHeight: '-2vw' }}>S</span>electing a life partner is like adding a <br style={{ marginTop: "5vh" }} />preciousmelody to the song of your life,<br />forever altering its tune. The sweetest<br />symphony is found in choosing the perfect<br />harmony. How delightful it would be to have <br />a trusted companion to join in this<br /> heartwarming duet of choice.</p>
            <div className="Line44" style={{ width: 233, height: 0, marginLeft: '40vw', marginTop: 237, position: 'absolute', transform: 'rotate(90deg)', transformOrigin: '0 0', border: '1px #D9D9D9 solid' }}></div>
            <div>
              <h1 className='color' style={{ marginTop: "250px", marginLeft: "45vw" }}>Contact us</h1>
              <p className='bottomP'>mobile:123456789</p>
              <p className='bottomP'>Email:xyz@gmail.com</p>
            </div>
            {/* <hr  style={{display:"flex" }}/> */}
            <div className="Line44" style={{ width: 233, height: 0, marginLeft: '65vw', top: 230, position: 'absolute', transform: 'rotate(90deg)', transformOrigin: '0 0', border: '1px #D9D9D9 solid' }}></div>
          <div>
            <h1 className='color'  style={{top: "230px", marginLeft: "70vw", position: 'absolute' }}>Privacy&You</h1>
          </div>
            <div>
            {/* <h1 className='color' style={{ marginTop: "250px", marginLeft: "45vw" }}>Contact us</h1>
              <p className='bottomP'>mobile:123456789</p>
              <p className='bottomP'>Email:xyz@gmail.com</p> */}
            </div>
          </div>
        </div>


      </form>
    </div>

  )
}

export default Preferences