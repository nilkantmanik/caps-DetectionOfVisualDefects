import React from 'react'
import Navbar from "../components/Navbar";
import './tipspage.css'
import back_image from '../images/back_img.jpg'

function Tipspage() {
  return (
    <div>
    <Navbar />
    <div
        className="background-image"
        style={{
          backgroundImage: `url(${back_image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: 'calc(100vh - -400px)', // Adjusted for typical Navbar height
        }}>
    <div className='mainbox'>
    <p>1. Regular Eye Exams: Schedule regular comprehensive eye exams to monitor your eye health and detect any issues early.</p>
      <p>2. Use Protective Eyewear: When engaging in activities that pose a risk to your eyes, wear protective eyewear to prevent injuries.</p>
      <p>3. Rest Your Eyes: Take regular breaks when working on a computer or engaging in activities that strain your eyes. Follow the 20-20-20 rule: every 20 minutes, look at something 20 feet away for 20 seconds.</p>
      <p>4. Maintain a Balanced Diet: Consume foods rich in vitamins and nutrients such as omega-3 fatty acids, lutein, zinc, and vitamins C and E to support eye health.</p>
      <p>5. Manage Chronic Conditions: Keep conditions such as diabetes in check, as they can affect your eye health and lead to complications.</p>
      <p>6. Protect Your Eyes from the Sun: Wear sunglasses that block out 99 to 100 percent of both UVA and UVB radiation to protect your eyes from the harmful effects of the sun.</p>
      <p>7. Avoid Smoking: Smoking is linked to an increased risk of developing age-related macular degeneration, cataracts, and other eye conditions. Quitting smoking can help preserve your eye health.</p>
      <p>8. Maintain Hygiene: Practice good hygiene to prevent eye infections. Wash your hands before touching your eyes and avoid sharing items that come into contact with your eyes.</p>
      <p>9. Adjust Lighting: Ensure that the lighting in your workspace is suitable for the task at hand. Avoid glare and adjust the lighting to reduce eye strain.</p>
      <p>10. Limit Screen Time: Minimize the time spent staring at screens, and make sure to blink frequently to prevent dry eyes.</p>
      </div>
    </div>
    </div>
  )
}

export default Tipspage