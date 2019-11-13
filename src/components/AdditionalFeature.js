import React from 'react';
import { useDispatch } from 'react-redux'
import { connect } from 'react-redux'
import { addItem } from '../components/actions/index'
import AdditionalFeatures from './AdditionalFeatures';

const AdditionalFeature = props => {
  const dispatch = useDispatch()
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={()=>dispatch(addItem(props.feature))}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};
export default AdditionalFeature

// export default connect(
//   null,
//   { addItem }
// )(AdditionalFeature);
