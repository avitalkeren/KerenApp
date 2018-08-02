import React, { Component } from 'react';
import axios from 'axios'
import { Thumbnail } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import './MyBookmarks.css';


export class MyBookmarks extends Component {
  displayName = MyBookmarks.name

  constructor(props) {
    super(props);
    
    axios.get('https://localhost:5001/api/Bookmarks/')
    .then(function(response) {
      console.log(response);

     
      ReactDOM.render(
        <BookmarksList repositories={response.data} />,
        document.getElementById('list'))
      
    })
    .catch(error => {console.log(error.response)
    });
  }
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <h1 className="App-title">My Bookmarks</h1>
      </header>
          <div id="list">
          </div>
      </div>
    );
  }
}

function BookmarksList(props) {
  const repositories = props.repositories;

  const listItems = repositories.map(repo => <Item repo={JSON.parse(repo)}></Item>)
  return (<div>{listItems}</div>);
  }

class Item extends Component {
   
  render() {
    let repo = this.props.repo;

    console.log(repo.id);

    return(
      <div class="arrange-horizontally">
      <Thumbnail key={repo.id} >            
            <img src={repo.owner.avatar_url} 
                class="img-thumbnail" 
                alt={repo.owner.name} 
                width="100px" height="100px"/>
            <h4>{repo.name}</h4>
      </Thumbnail></div>);
  }
}