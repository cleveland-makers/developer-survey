var React         = require('react')
var AccountFields = require('./AccountFields')
var SurveyFields  = require('./SurveyFields')
var Confirmation  = require('./Confirmation')
var Success       = require('./Success')

var Registration = React.createClass({
	getInitialState: function() {
		return {
			step: 1
		}
	},

	render: function() {

        var fieldValues = {
            name     : null,
            email    : null,
            password : null,
            age      : null,
            colors   : []
        }

		switch (this.state.step) {
			case 1:
				return <AccountFields />
			case 2:
				return <SurveyFields />
			case 3:
				return <Confirmation />
			case 4:
				return <Success />
		}
	}
}

module.exports = Registration;
