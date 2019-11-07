import React from 'react'
import {
    useParams
} from 'react-router-dom'

import Dogs from './Dogs'
import Cats from './Cats'

export default   function Topic () {
    const { topicId } = useParams()
    
    const info = {
        "dogs": <Dogs name={topicId}/>,
        "cats": <Cats name={topicId}/>
    }

    return (
        <div>
            <p>
                {info[topicId]}
            </p>
        </div>
    )
  }
