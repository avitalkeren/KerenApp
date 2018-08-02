import React, { Component } from 'react';
import axios from 'axios'
import { Button } from 'react-bootstrap';
import { Thumbnail } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './MyBookmarks.css';

//main App 
export class Home extends Component {
  constructor(props) {
    super(props);


    this.handleChange = this.handleChange.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);

    this.state = {
      value: "",
    };
  }

  //catch enter key and submit 
  handleKeyUp(e){
    if  (e.key === 'Enter') this.handleClick();
  }

  handleClick(){
    console.log("handleClick: value = " + this.state.value)

    axios.get('https://api.github.com/search/repositories?q=' + this.state.value)
    .then(function(response){
      console.log(response);

      ReactDOM.render(
        <BookmarksList repositories={response.data.items} />,
        document.getElementById('gallery'))
    })
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Gitt Search</h1>
        </header>

        <div class="container-fluid">
          <label>Please enter repository to search: </label>

          <p className="App-intro">
              <input id="txtInputSearch" type="text" 
              value={this.state.value} 
              onChange={this.handleChange} 
              onKeyUp={this.handleKeyUp}/>
              <input id="btnSearch" type="button" class="btn btn-outline-primary" value="Search"
               onClick={() => this.handleClick()}/>
          </p>
        </div>
        <div id="gallery">
          
       </div>
      </div>
    );
  }
}
function BookmarksList(props) {
  const repositories = props.repositories;
  const listItems = repositories.map(repo =>
      
        <Item repo={repo}></Item>
        
      )
  return (
       <div>{listItems}</div>
      );
  }



class Item extends Component {
  handleClick(repo){
    console.log("saving: " + repo.id); 

    axios.post(`https://localhost:5001/api/Bookmarks`, repo)
    .then(res => {
      console.log(res);
      console.log(res.data);
    });
  }
  
  render() {
    let repo = this.props.repo;
    return(
      <div class="arrange-horizontally">
      <Thumbnail key={repo.id}>            
            <img src={repo.owner.avatar_url} 
                class="img-thumbnail" 
                alt={repo.owner.name} 
                width="100px" height="100px"/>
            <h4>{repo.name}</h4>
        <p><Button bsStyle="primary" onClick={() =>this.handleClick(repo)}>Bookmark</Button></p>
      </Thumbnail>
      </div>);
  }
}
