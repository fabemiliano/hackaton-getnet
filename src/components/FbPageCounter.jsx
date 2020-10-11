// import React from 'react';

// export default class FbPageCounter extends React.Component {
//   constructor(props){
//     super();

//     this.animateValue = this.animateValue.bind(this);

//     this.state = {
//       current: 1,
//       final: props.goal,
//     };
//   }



//   animateValue(end, duration) {
//     const {current} = this.state;
//     var range = end - current;
//     var stepTime = Math.abs(Math.floor(duration / range));
//     this.timer(end, timer, stepTime);
//   }

//   componentDidMount() {
//     const { final } = this.props;
//     this.animateValue(final, 5000);
//   }

//   render(){
//     const { current, final } = this.state;

//     return(
//       <div>
//         {current}
//       </div>
//     )
//   }
// }