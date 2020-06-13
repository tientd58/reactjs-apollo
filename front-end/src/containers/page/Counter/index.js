import React from 'react'
import {Link} from "react-router-dom";
import { useQuery, useMutation } from '@apollo/react-hooks';

import './styles.scss'
import { GET_COUNTER } from 'graphql/Counter/queries';
import { UPDATE_COUNTER } from 'graphql/Counter/mutations';

const Counter = () => {
  const { data } = useQuery(GET_COUNTER);
  const [increment] = useMutation(UPDATE_COUNTER, { variables: { offset: 1 } })
  const [decrement] = useMutation(UPDATE_COUNTER, { variables: { offset: -1 } })

  return (
    <div>
      <h1>Couter: {data.counter}</h1>
      <div className="controllers">
        <button type="button" className="btn btn-primary" onClick={increment}>Add</button>
        <button type="button" className="btn btn-secondary" onClick={decrement}>Remove</button>
        <Link to='/admin'>
          <button type="button" className="btn btn-primary">Admin</button>
        </Link>
      </div>
    </div>
  )
};

export default  Counter;