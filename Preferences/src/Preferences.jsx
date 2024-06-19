import React, { useState } from 'react'
import './Preferences.css'
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
  };


  return (

    <div>


      <div style={{ display: 'flex' }}>
        <div className="EditPreferences" style={{ left: 365, top: -1200, position: 'absolute', color: '#780024', fontSize: 36, fontFamily: 'Poppins', fontWeight: '400', lineHeight: 76, wordWrap: 'break-word' }}>Edit Preferences</div>

        <div style={{ display: 'flex', flexDirection: 'column', padding: '1vw', width: 102, height: 50, left: 365, top: 200, position: 'absolute', borderRadius: 3 }}>
          <div>
            <label htmlFor="Lookings" style={{ width: '50vw', padding: '0.5vw', fontSize: 20, fontFamily: 'Poppins', color: '#780024' }}>LookingFor</label>
            <select id='Lookings' name='Lookings' value={formData.Lookings}
              onChange={handleOnChange} style={{ width: '25vw', padding: '0.5vw', fontSize: 20, fontFamily: 'Poppins' }} >
              <option value="" disabled>Select</option>
              {lookingFor.map((Looking, index) => (
                <option key={index} value={Looking}>{Looking}</option>
              )
              )}
            </select>
          </div>

          <div style={{ display: 'flex', flexDirection: 'row', padding: '1vw', gap: '1rem' }}>
            <div>
              <label htmlFor="MinAge" style={{ width: '20vw', padding: '0.5vw', fontSize: 20, fontFamily: 'Poppins', color: '#780024', left: -250 }}>MinAge</label><br />
              <select id='minAge' name='minAge' value={formData.minAge}
                onChange={handleOnChange} style={{ width: '12vw', padding: '0.5vw', fontSize: 20, fontFamily: 'Poppins', left: 365 }}>
                <option value="" disabled>MinAge</option>
                {ageRange.map((minAges, index) => (
                  <option key={index} value={minAges}>{minAges}</option>
                )
                )}
              </select><br />
            </div>
            <div>
              <label htmlFor="MaxAge" style={{ width: '12vw', padding: '0.5vw', fontSize: 20, fontFamily: 'Poppins', color: '#780024', left: 365 }}>MaxAge</label>
              <select id='maxAge' name='maxAge' value={formData.maxAge}
                onChange={handleOnChange} style={{ width: '12vw', padding: '0.5vw', fontSize: 20, fontFamily: 'Poppins', left: 365 }}>
                <option value="" disabled>maxAge</option>
                {ageRange.map((maxAges, index) => (
                  <option key={index} value={maxAges}>{maxAges}</option>
                )
                )}
              </select>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', padding: '1vw', gap: '1rem' }}>
            <div >
              <label htmlFor="Minh" style={{ width: '20vw', padding: '0.5vw', fontSize: 20, fontFamily: 'Poppins', color: '#780024' }}>MinHeight</label>
              <select id='minH' name='minH' value={formData.minH}
                onChange={handleOnChange} style={{ width: '12vw', padding: '0.5vw', fontSize: 20, fontFamily: 'Poppins' }}>
                <option value="" disabled>MinHeight</option>
                {options.map((minHeight, index) => (
                  <option key={index} value={minHeight}>{minHeight}</option>
                )
                )}
              </select>
            </div>
            <div>
              <label htmlFor="MaxH" style={{ width: '20vw', padding: '0.5vw', fontSize: 20, fontFamily: 'Poppins', color: '#780024', left: 365 }}>MaxHeight</label>
              <select id='maxH' name='maxH' value={formData.maxH}
                onChange={handleOnChange} style={{ width: '12vw', padding: '0.5vw', fontSize: 20, fontFamily: 'Poppins', left: 365 }}>
                <option value="" disabled>MaxHeight</option>
                {options.map((maxHeight, index) => (
                  <option key={index} value={maxHeight}>{maxHeight}</option>
                )
                )}
              </select>
            </div>
          </div>
          <label htmlFor='motherT' style={{ width: '20vw', padding: '0.5vw', fontSize: 20, fontFamily: 'Poppins', color: '#780024', left: 365 }}>MotherTongue</label>
          <select id='motherTongue' name='motherTongue' value={formData.motherTongue}
            onChange={handleOnChange} style={{ width: '25vw', padding: '0.5vw', fontSize: 20, fontFamily: 'Poppins', left: 365 }}>
            <option value="" disabled>Mother Tongue</option>
            {motherTongues.map((mother, index) => (
              <option key={index} value={mother}>{mother}</option>
            )
            )}
          </select><br />
          <div style={{ display: 'flex', flexDirection: 'row', padding: '1vw', gap: '1rem' }}>
            <div>
              <label htmlFor='religion' style={{ width: '20vw', padding: '0.5vw', fontSize: 20, fontFamily: 'Poppins', color: '#780024', left: 365 }}>Religion</label>
              <select
                id="religion"
                name="religion"
                value={formData.religion}
                onChange={handleOnChange}
                style={{ width: '12vw', padding: '0.5vw', fontSize: 20, fontFamily: 'Poppins', left: 365 }}
              >
                <option value="" disabled>Select Religion</option>
                {religions.map((religio, index) => (
                  <option key={index} value={religio}>{religio}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor='motherT' style={{ width: '20vw', padding: '0.5vw', fontSize: 20, fontFamily: 'Poppins', color: '#780024', left: 365 }}>Caste</label>
              <input type='text' placeholder='Entercaste' id='caste' name='caste' value={formData.caste} onChange={handleOnChange} style={{ width: '12vw', padding: '0.5vw', fontSize: 20, fontFamily: 'Poppins', left: 365 }}></input>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', padding: '1vw', gap: '1rem' }}>
            <div>
              <label htmlFor='star' style={{ width: '20vw', padding: '0.5vw', fontSize: 20, fontFamily: 'Poppins', color: '#780024', left: 365 }}>Star</label>
              <select id='star' name='star' value={formData.star} onChange={handleOnChange} style={{ width: '12vw', padding: '0.5vw', fontSize: 20, fontFamily: 'Poppins', left: 365 }}>
                <option value="" disabled>Star</option>
                {starSigns.map((Sign, index)=> (
                  <option key={index} value={Sign}>{Sign}</option>

                )
                )}

              </select></div>
            <div>
              <label htmlFor='dosham' style={{ width: '20vw', padding: '0.5vw', fontSize: 20, fontFamily: 'Poppins', color: '#780024', left: 365 }}>Dosham</label>
              <select id='dosham' name='dosham' value={formData.dosham} onChange={handleOnChange} style={{ width: '12vw', padding: '0.5vw', fontSize: 20, fontFamily: 'Poppins', left: 365 }}>
                <option value="" disabled>Dosham</option>
                {doshamOption.map((doshams, index) => (
                  <option key={index} value={doshams}>{doshams}</option>

                )
                )}

              </select>
            </div>
          </div>
          <div>
            <label htmlFor='education' style={{ width: '20vw', padding: '0.5vw', fontSize: 20, fontFamily: 'Poppins', color: '#780024', left: 365 }}>Education</label>
            <select id='Education' name='Education' value={formData.Education} onChange={handleOnChange} style={{ width: '30vw', gap: '1rem', padding: '0.5vw', fontSize: 20, fontFamily: 'Poppins', left: 365 }}>
              <option value="" disabled>Education</option>
              {EducationOptions.map((Educations, index) => (
                <option key={index} value={Educations}>{Educations}</option>

              )
              )}

            </select><br />
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', padding: '1vw', gap: '1rem' }} >
            <div>
              <label htmlFor='occupation' style={{ width: '20vw', padding: '0.5vw', fontSize: 20, fontFamily: 'Poppins', color: '#780024', left: 365, padding: '0.5vw', fontSize: 20, fontFamily: 'Poppins', left: 365 }}>Occupation</label>
              <select id='Occupation' name='Occupation' value={formData.Occupation} onChange={handleOnChange} style={{ width: '12vw', padding: '0.5vw', fontSize: 20, fontFamily: 'Poppins', left: 365 }}>
                <option value="" disabled>Occupation</option>
                {occupationOptions.map((Occupations, index) => (
                  <option key={index} value={Occupations}>{Occupations}</option>

                )
                )}

              </select>
            </div>
            <div>
              <label htmlFor="Employee" style={{ width: '20vw', padding: '0.5vw', fontSize: 20, fontFamily: 'Poppins', color: '#780024', left: 365, padding: '0.5vw', fontSize: 20, fontFamily: 'Poppins', left: 365 }}>EmploymentType</label>
              <select id='Employetype' name='Employetype' value={formData.Employetype} onChange={handleOnChange} style={{ width: '12vw', padding: '0.5vw', fontSize: 20, fontFamily: 'Poppins', left: 365 }}>
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
              <label htmlFor="Income" style={{ width: '20vw', padding: '0.5vw', fontSize: 20, fontFamily: 'Poppins', color: '#780024', left: 365, padding: '0.5vw', fontSize: 20, fontFamily: 'Poppins', left: 365 }}>AnnualIncome</label>
              <select id='annualIncome' name='annualIncome' value={formData.annualIncome} onChange={handleOnChange} style={{ width: '12vw', padding: '0.5vw', fontSize: 20, fontFamily: 'Poppins', left: 365 }}>
                <option value="" disabled>annualIncome</option>
                {annualIncomeOptions.map((annualIncome, index) => (
                  <option key={index} value={annualIncome}>{annualIncome}</option>

                )
                )}

              </select>
            </div>
            <div>
              <label htmlFor="city" style={{ width: '20vw', padding: '0.5vw', fontSize: 20, fontFamily: 'Poppins', color: '#780024', left: 365, padding: '0.5vw', fontSize: 20, fontFamily: 'Poppins', left: 365 }}>City</label>
              <input type='text' placeholder='City' id='' name='City' value={formData.City} onChange={handleOnChange} style={{ width: '12vw', padding: '0.5vw', fontSize: 20, fontFamily: 'Poppins', left: 365 }}></input>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', padding: '1vw', gap: '1rem' }}>
            <div>
              <label htmlFor="state" style={{ width: '20vw', padding: '0.5vw', fontSize: 20, fontFamily: 'Poppins', color: '#780024', left: 365, padding: '0.5vw', fontSize: 20, fontFamily: 'Poppins', left: 365 }}>State</label>
              <input type='text' placeholder='state' id='' name='state' value={formData.state} onChange={handleOnChange} style={{ width: '12vw', padding: '0.5vw', fontSize: 20, fontFamily: 'Poppins', left: 365 }}></input></div>
            <div>
              <label htmlFor="country" style={{ width: '20vw', padding: '0.5vw', fontSize: 20, fontFamily: 'Poppins', color: '#780024', left: 365, padding: '0.5vw', fontSize: 20, fontFamily: 'Poppins', left: 365 }}>Country</label>
              <input type='text' placeholder='country' id='' name='country' value={formData.country} onChange={handleOnChange} style={{ width: '12vw', padding: '0.5vw', fontSize: 20, fontFamily: 'Poppins', left: 365 }}></input>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'row', padding: '1vw', gap: '1rem' }}>
            <div>
              <label htmlFor="marital" style={{ width: '20vw', padding: '0.5vw', fontSize: 20, fontFamily: 'Poppins', color: '#780024', left: 365, padding: '0.5vw', fontSize: 20, fontFamily: 'Poppins', left: 365 }}>Marital</label>
              <select style={{ width: '12vw', padding: '0.5vw', fontSize: 20, fontFamily: 'Poppins', left: 365 }}
                id="marital"
                name='marital'
                value={formData.marital}
                onChange={handleOnChange}>


                <option value="" disabled>Marital Status</option>

                {maritalStatus.map((Marital, index) => (
                  <option key={index} value={Marital}>{Marital}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="disability" style={{ width: '20vw', padding: '0.5vw', fontSize: 20, fontFamily: 'Poppins', color: '#780024', left: 365, padding: '0.5vw', fontSize: 20, fontFamily: 'Poppins', left: 365 }}>Disability</label>
              <select id='disability' name='disability' value={formData.disability} onChange={handleOnChange} style={{ width: '12vw', padding: '0.5vw', fontSize: 20, fontFamily: 'Poppins', left: 365 }}>
                <option value="" disabled>Select disability</option>
                {disabilitiesOptions.map((disability, index) => (
                  <option key={index} value={disability}>{disability}</option>
                ))}
              </select>
            </div>
          </div>
          <div >
            <label htmlFor="drinking" style={{ width: '20vw', padding: '0.5vw', fontSize: 20, fontFamily: 'Poppins', color: '#780024', left: 365, padding: '0.5vw', fontSize: 20, fontFamily: 'Poppins', left: 365 }}>DrinkingHabits</label>
            <select id="drinkingHabits" name='drinkingHabits' value={formData.drinkingHabits} onChange={handleOnChange} style={{ width: '24vw', padding: '0.5vw', fontSize: 20, fontFamily: 'Poppins', left: 365 }}>
              <option value="" disabled>Select drinking habits</option>
              {drinkingHabitsOptions.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
          </div>
          <div >
            <label htmlFor="smoking" style={{ width: '20vw', padding: '0.5vw', fontSize: 20, fontFamily: 'Poppins', color: '#780024', left: 365, padding: '0.5vw', fontSize: 20, fontFamily: 'Poppins', left: 365, gap: '1rem' }}>SmokingHabits</label>
            <select id="smokingHabits" name="smokingHabits" value={formData.smokingHabits} onChange={handleOnChange} style={{ width: '24vw', padding: '0.5vw', fontSize: 20, fontFamily: 'Poppins', left: 365, gap: '1rem' }}>
              <option value="" disabled>Select smoking habits</option>
              {smokingHabitsOptions.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select><br />
          </div>
          <div style={{ gap: '1rem' }}>
            <label htmlFor="eating" style={{ width: '20vw', padding: '0.5vw', fontSize: 20, fontFamily: 'Poppins', color: '#780024', left: 365, padding: '0.5vw', fontSize: 20, fontFamily: 'Poppins', left: 365 }}>EatingHabits</label>
            <select id="eatingHabits" name='eatingHabits' value={formData.eatingHabits} onChange={handleOnChange} style={{ width: '24vw', padding: '0.5vw', fontSize: 20, fontFamily: 'Poppins', left: 365 }}>
              <option value="" disabled>Select eating habits</option>
              {eatingHabitsOptions.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
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
        <div className="Line50" style={{ width: 280, height: 0, left: 40, top: 520, position: 'absolute', border: '0.71px #7C7C7C solid', zIndex: "-1" }}></div>






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

      <div className='BottomHead' style={{ marginTop: '240vh', position: 'absolute', zIndex: "-1", width: "100%", height: "450px" }}>

      </div>
    </div>
  )
}

export default Preferences 