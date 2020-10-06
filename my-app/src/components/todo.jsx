import React from "react";
  
class Todo extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    	newItem: '',
    	todoItems: []
    };
  }

  addItem = () => {
  	const { todoItems, newItem } = this.state;
    todoItems.push({
      itemId: todoItems.length+1, 
      displayText: newItem, 
      status: false
    });
    this.setState({ todoItems, newItem: '' });
  }

  removeItem  = (id) => {
  	const {todoItems} = this.state;
    todoItems.splice(id, 1);
    this.setState({
    	todoItems
    });
  }

  markTodoDone = (id) => {
  	const {todoItems} = this.state;
  	todoItems[id].status = !todoItems[id].status
    this.setState({ todoItems });  
  }

  replaceText = (id) => {
  	const {todoItems} = this.state;
  	const ele = {...todoItems[id]};

	const text = (ele.displayText || '').split('');

	for (var i = 0; i < text.length; i++) {
	    if (text[i] === text[i+1]) {
	        delete text[i];
	        delete text[i+1];
	    }
	} 

	ele.displayText = text.join(''); 
	todoItems[id] = ele;
	
    this.setState({ todoItems });  
  }

  render() {
  	const { todoItems } = this.state;
    return (
      <div>

      	<ul>
  		{(todoItems || []).map((item, index) => {
  			const strike = item.status ? {'textDecoration': 'line-through'} : {};
  			return (
	      		<li key={item.itemId}>
					<div style={strike}>
					  	<span onClick={() => this.markTodoDone(index)}> {item.displayText} </span>
					  	<button className="close" onClick={() => this.removeItem(index) }>&times;</button>
					  	<button onClick={() => { this.replaceText(index) }}> Replace </button>
					</div>
				</li>
  			)
  		})}
      	</ul>

      	<input type="text" className="form-control" placeholder="Add new item..." value={this.state.newItem} onChange={(e) => { this.setState({ newItem: e.target.value }) }} />
        <button type="submit" className="btn btn-default" onClick={this.addItem}>Add</button> 
      </div>
    );
  }
}

export default Todo;
