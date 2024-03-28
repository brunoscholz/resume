import React, { Fragment, useEffect, useState } from 'react'
import { Card, NormalText } from '../theme/theme'

// import { AiOutlineArrowDown } from 'react-icons/ai'

const ExperienceBlock = ({ data }) => {
  const [xpData, setXpData] = useState([])

  useEffect(() => {
    const _data = []
    data.map(item => {
      let count = item.path.length
      for (let index = count - 1; index >= 0; index--) {
        let status = item.path[index]

        let date = ''
        if (status === 'Left') date = item.end
        if (status === 'Hired' || status === 'Founded') date = item.begin

        _data.push({
          status: status,
          as: status === 'Work' || status === 'Working' ? item.title : '',
          at: item.company,
          skills: status === 'Work' || status === 'Working' ? item.skills.join(', ') : '',
          txn: date,
          description: item.description
        })
      }
      return item
    })

    setXpData(_data)
  }, [data])

  // const toggleExpander = (e) => {
  //   if (e.target.type === 'checkbox') return;

  //   if (!this.state.expanded) {
  //     this.setState(
  //       { expanded: true },
  //       () => {
  //         if (this.refs.expanderBody) {
  //           slideDown(this.refs.expanderBody);
  //         }
  //       }
  //     );
  //   } else {
  //     slideUp(this.refs.expanderBody, {
  //       onComplete: () => { this.setState({ expanded: false }); }
  //     });
  //   }
  // }

  const renderDetails = (row, _class) => {
    if (row.status === 'Work' || row.status === 'Working') {
      return (
        <tr className={_class}>
          <td colSpan='5'>
            <ul className='simple-list'>
              {row.description.map((li, i) => {
                return (
                  <li key={i}>
                    <NormalText className='ps-4' dangerouslySetInnerHTML={{ __html: li }}></NormalText>
                  </li>
                )
              })}
            </ul>
          </td>
        </tr>
      )
    }

    return null
  }

  /*
  const renderDetailButton = (status) => {
    if (status === 'Work' || status === 'Working') {
      return (
        <button className='btn btn-link' onClick={expandHandler}>
          <AiOutlineArrowDown color='#fc00b1' size={30} />
        </button>
      )
    }

    return null
  }

  const expandHandler = e => {
    const hiddenElement = e.currentTarget.parentNode.parentNode.nextSibling
    hiddenElement.className.indexOf('collapse show') > -1
      ? hiddenElement.classList.remove('show')
      : hiddenElement.classList.add('show')
  }
  */

  const formatLine = (row, idx) => {
    const mapClass = {
      Working: 'punk-history-row-sold active',
      Work: 'punk-history-row-sold',
      Hired: 'punk-history-row-claim',
      Founded: 'punk-history-row-claim',
      Left: 'punk-history-row-offer'
    }
    return (
      <Fragment key={`xp-row-${idx}`}>
        <tr className={mapClass[row.status]}>
          <td>{row.status}</td>
          <td>{row.as}</td>
          <td>{row.at}</td>
          <td>{row.skills}</td>
          <td>
            <em>{row.txn}</em>
          </td>
        </tr>
        {renderDetails(row, `${mapClass[row.status]} details`)}
      </Fragment>
    )
  }

  return (
    <Card>
      <h3>
        Market Status <i className='fa fa-spinner fa-pulse fa-fw'></i>
      </h3>
      <div className='table-responsive'>
        <table className='table'>
          <tbody>
            <tr>
              <th>Status</th>
              <th>As</th>
              <th>At</th>
              <th>Skills</th>
              <th>Txn</th>
            </tr>
            {xpData.map((row, idx) => {
              return formatLine(row, idx)
            })}
          </tbody>
        </table>
      </div>
    </Card>
  )
}

export default ExperienceBlock
