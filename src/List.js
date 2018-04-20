import React, { Component } from 'react';

class List extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      posts: []
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            posts: result.slice(0, 10),
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        });
  }

  render() {
    const { error, isLoaded, posts } = this.state;
    return (
      <div className="list">
        <table className="table">
          <thead>
            <th scope="col">Código</th>
            <th scope="col">Titulo</th>
          </thead>
          {posts.map(post => (
            <tr key={post.id} item>
              <th scope="col">{post.id}</th>
              <th scope="col"><a href={`/Posts/Show/${post.id}`}>{post.title}</a></th>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

export default List;
