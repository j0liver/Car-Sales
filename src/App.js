import React from 'react';
import { useSelector } from 'react-redux'
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { connect } from 'react-redux'
const App = (props) => {
  const car = useSelector(state=> state.car)
  const additionalFeatures = useSelector(state=> state.additionalFeatures)
  const additionalPrice = useSelector(state=> state.additionalPrice)
  return (
    <div className="boxes">
      <div className="box">
        <Header car={car} />
        <AddedFeatures car={car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={additionalFeatures} />
        <Total car={car} additionalPrice={additionalPrice} />
      </div>
    </div>
  );
};

export default App;
// const mapStateToProps = state => {
//   return {
//     car: state.car,
//     additionalFeatures: state.additionalFeatures,
//     additionalPrice: state.additionalPrice
//   };
// };

// export default connect(
//   mapStateToProps,
//   {}
// )(App);
