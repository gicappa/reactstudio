/** @jsx React.DOM */
var React = require('react');

module.exports = React.createClass({
  getInitialState: function () {
    return {value: this.props.value};
  },
  handleChange: function (event) {
    this.setState({value: event.target.value});
  },
  render: function () {
    return (
      <div>
        <label for={this.props.id}>{this.props.label}</label>
        <input id={this.props.id} value={this.state.value} type="text" onChange={this.handleChange}/>
      </div>
    );
  }
});
