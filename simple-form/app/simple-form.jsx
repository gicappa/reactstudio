/** @jsx React.DOM */
var React = require('react');
var Field = require('./input.jsx');
var Submit = require('./submit.jsx');

module.exports = React.createClass({
  render: function () {
    return (<form>
      <Field id="firstname" label="Firstname" value="Gian Carlo"/>
      <Field id="lastname" label="Lastname" value="Pace"/>
      <Submit/>
    </form>);
  }
});
