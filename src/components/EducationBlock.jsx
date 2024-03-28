import React, { Fragment, useEffect, useState } from 'react'
import { Card } from '../theme/theme'

// import { AiOutlineArrowDown } from 'react-icons/ai'

const EducationBlock = ({ data }) => {
  const [eduData, setEduData] = useState([])

  useEffect(() => {
    const _data = []
    data.map(item => {
      let status = item.status.replace('(', '').replace(')', '')
      _data.push({
        status: status,
        university: item.university.split(',')[0],
        major: item.major,
        skills: item.skills.join(', '),
        date: item.date
      })
      return item
    })
    setEduData(_data)
  }, [data])

  const formatLine = (row, idx) => {
    const mapClass = {
      incomplete: 'punk-history-row-sold',
      certification: 'punk-history-row-claim'
    }
    return (
      <Fragment key={`edu-row-${idx}`}>
        <tr className={mapClass[row.status]}>
          <td>{row.university}</td>
          <td>{row.major}</td>
          <td>{row.skills}</td>
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
