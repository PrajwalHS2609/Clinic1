import React from 'react'
import "./Footer.css"
const FooterTiming = () => {
  return (
    <div className='footerTiming-container'>
        <table>
          <thead>
            <tr>
              <th>
                <h4>Open Hours</h4>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Monday</td>
              <td>9:00 AM - 10:00 PM</td>
            </tr>
            <tr>
              <td>Tuesday</td>
              <td>9:00 AM - 10:00 PM</td>
            </tr>
            <tr>
              <td>Wednesday</td>
              <td>9:00 AM - 10:00 PM</td>
            </tr>
            <tr>
              <td>Thursday</td>
              <td>9:00 AM - 10:00 PM</td>
            </tr>
            <tr>
              <td>Friday</td>
              <td>9:00 AM - 10:00 PM</td>
            </tr>
            <tr>
              <td>Saturday</td>
              <td>10:00 AM - 4:00 PM</td>
            </tr>
            <tr>
              <td>Sunday</td>
              <td>Closed</td>
            </tr>
          </tbody>
        </table>
    </div>
  )
}

export default FooterTiming
