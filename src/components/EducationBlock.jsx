import React, { Fragment, useEffect, useState } from 'react'
import { Card } from '../theme/theme'

// import { AiOutlineArrowDown } from 'react-icons/ai'

const EducationBlock = ({ data }) => {
  const [eduData, setEduData] = useState([])

  useEffect(() => {
    setEduData(data)
  }, [data])

  const formatLine = (row, idx) => {
    const mapClass = {
      incomplete: 'punk-history-row-sold',
      certificate: 'punk-history-row-claim'
    }
    return (
      <Fragment key={`edu-row-${idx}`}>
        <tr className={mapClass[row.status.replace('(', '').replace(')')]}>
          <td>{row.university}</td>
          <td>{row.major}</td>
          <td>{row.skills.join(', ')}</td>
          <td>{row.status}</td>
          <td>
            <em>{row.date}</em>
          </td>
        </tr>
      </Fragment>
    )
  }

  return (
    <Card>
      <h3>Education History</h3>
      <div className='table-responsive'>
        <table className='table'>
          <tbody>
            <tr>
              <th>University</th>
              <th>Course</th>
              <th>Skills</th>
              <th>status</th>
              <th>Txn</th>
            </tr>
            {eduData.map((row, idx) => {
              return formatLine(row, idx)
            })}
          </tbody>
        </table>
      </div>
    </Card>
  )
}

export default EducationBlock
