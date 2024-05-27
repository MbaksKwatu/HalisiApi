import React, {Fragment} from 'react'
import Jobdetail from '@/components/sli/jobs/Jobdetails'

const Jobdetailpage = ({params}) => {
  return (
    <Fragment>
        <Jobdetail params={params}/>
    </Fragment>
  )
}

export default Jobdetailpage