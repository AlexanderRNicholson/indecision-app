// import './utils.js'
// import subtract, { square, add } from  './utils.js'

// import './person.js'
// import isSenior, { isAdult, canDrink } from './person.js'

// // console.log('app.js is running');
// // console.log(square(4));
// // console.log(add(100, 23));
// // console.log(subtract(100, 81));

// console.log(isAdult(70));
// console.log(canDrink(70));
// console.log(isSenior(70));

import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));



// class Header extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         );
//     }
// }



// class Action extends React.Component {
    
//     render () {
        
//     }
// }



// class Options extends React.Component {
    
//     render () {
//         return (
//             <div>
//                 <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//                 {
//                     this.props.options.map((option) => <Option key={option} optionText={option} />)
//                 }
//             </div>
//         );
//     }
// }





// class Option extends React.Component {
//     render () {
//         return (
//             <div>
//                 {this.props.optionText}
//             </div>
//         )
//     }
// }


// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
            
//         </div>
//     )
// };
