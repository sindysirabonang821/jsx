class Square extends React.Component {
    render() {
      return (
        <button className="square" onClick={function() { console.log('clic'); }}>
          {this.props.value}
        </button>
      );
    }
  }