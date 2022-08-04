import React from 'react';
import Search from './search';

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      data: []
    };

    this.update();
  }

  async update(){
    const who = await( await fetch(`/api/who`)).json();
    this.setState({data: who});
  }

  render(){
    return <div>
      Development
      {this.state.data.map(
        (item, id) => 
        <div key={id}>{item.Id} {item.Type} {item.Name}</div>
      )}
      <Search />
      </div>;
  }
}

export default App;
