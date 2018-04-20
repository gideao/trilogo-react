import React, { Component } from 'react';

class Show extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      id: null,
    };
  }
  componentDidMount() {
    const { postId } = this.props;
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            post: result.find((element) => { return element.id == postId}),
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
    const { error, isLoaded, post } = this.state;
    const notFound = Object.is(undefined, post) || Object.is(null, post);

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (isLoaded && notFound) {
      return <h2>Post not found!</h2>;
    } else if (isLoaded){
      return (
        <div className="post">
          <h2>{post.title}</h2>
          <div>{post.body}</div>
        </div>
      );
    } else {
      return(<div></div>);
    }
  }
}

export default Show;
