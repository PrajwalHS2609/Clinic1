import React from 'react'
import "@/components/Styles/style.css"
import Link from 'next/link'

const DepartmentsHead = () => {
  return (
<div className="serviceHead-container">
      <img
        src="https://img.freepik.com/free-psd/entrance-emergency-room-hospital-generative-ai_587448-2057.jpg?t=st=1743419669~exp=1743423269~hmac=077bb12b756e94481d16c9dcf092c410a329199f832d3a2f06b41d9db9dd6a16&w=1380"
        alt=""
      />
      <div className="serviceHead-content">
        <div className="serviceHead-wrapper">
          {" "}
          <h2>Departments</h2>
          {/* <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
            similique repellendus maiores fuga et sint molestiae, maxime, nulla
            ad earum, modi ex labore magni quia consequuntur iste sequi
            excepturi pariatur.
          </p> */}
          <div className="serviceHead-breadCrumb">
           <h5> <Link href={"/"}>Home</Link> / Departments </h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DepartmentsHead
