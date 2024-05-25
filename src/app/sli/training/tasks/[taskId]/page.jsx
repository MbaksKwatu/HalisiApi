import React, {Fragment} from 'react'
import Taskdetail from '@/components/sli-training/jobs/Taskdetail'

const TaskDetailpage = ({params}) => {
  return (
    <Fragment>
        <Taskdetail  params={params}/>
    </Fragment>
  )
}

export default TaskDetailpage