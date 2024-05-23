import React from 'react'
import ReportTable1 from './ReportTable1'

export const ReportContainer = () => {
  return (
    <div>
          <div className="toptext">
          <p
            style={{
              fontSize: "2vw",
              lineHeight: "1vw",
              fontFamily: "poppins",
              fontWeight: "500",
              padding: "1vw 2vw",
              color: "rgba(0, 0, 0, 1)",
            }}
          >
            User Reports
          </p>
        </div>

        <div>
            <ReportTable1 />
        </div>
    </div>
  )
}
