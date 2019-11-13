import React from 'react';
import { connect, useDispatch } from 'react-redux'
import { removeFeature } from '../components/actions/index'
const AddedFeature = props => {
  const dispatch = useDispatch()
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={()=>dispatch(removeFeature(props.feature))}>X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature
// export default connect(
//   null,
//   {removeFeature}
// )(AddedFeature);

// onClick={()=>props.removeFeature(props.feature)}