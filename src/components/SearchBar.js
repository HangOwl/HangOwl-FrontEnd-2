// import React from 'react';
// import { Search, Grid, Header, Segment } from 'semantic-ui-react';

// class SearchBar extends React.Component {
//     state = {term: ''};

//     onInputChange = (event) => {
//         this.setState({ term: event.target.value});
//     };

//     onFormSubmit = (event) => {
//         event.preventDefault();

//         this.props.onFormSubmit(this.state.term);
//     };



//     render() {
//         return (
//             <Search>
//                 <form onSubmit={this.onFormSubmit} className="ui form">
//                     <div className="field">
//                         <label>Video Search</label>
//                         <input 
//                             type="text" 
//                             value={this.state.term} 
//                             onChange={this.onInputChange}
//                         />
//                     </div>
//                 </form>
//             </Search>
//         );
//     }
// }

// export default SearchBar;

import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'

export default class MenuExampleSecondary extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
        <Input icon='search' placeholder='Search...' />
    )
  }
}

// import React from 'react';

// class SearchBar extends React.Component {
//   state = { term: '' };

//   onFormSubmit = event => {
//     event.preventDefault();

//     this.props.onSubmit(this.state.term);
//   };

//   render() {
//     return (
//       <div className="ui segment">
//         <form onSubmit={this.onFormSubmit} className="ui form">
//           <div className="field">
//             <label>Image Search</label>
//             <input
//               type="text"
//               value={this.state.term}
//               onChange={e => this.setState({ term: e.target.value })}
//             />
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

// export default SearchBar;

