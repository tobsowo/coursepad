/**
 * @jsx React.DOM
 */
var CalendarElementMixin = require('./CalendarElementMixin.react.js');

// Make a function that can only be run once
function makeRunOnce(f) {
    var run = false;
    return {
        reset: function() {
            run = false;
        },
        run: function() {
            if (!run) {
                run = true;
                f();
            }
        }
    };
}

var SingleMeeting = React.createClass({
    longMeetingThreshold: 1.2,
    /**
     * title: title of the course
     * location: location
     * time: time (string rep)
     * day: day of week (in 1-char string)
     * st_offset: start time (in offset)
     * length: length
     */

    mixins: [CalendarElementMixin],

    componentDidMount: function() {
        if (this._hasAlternative) {
            var self = this;

            $(this.refs['meeting'].getDOMNode()).draggable({
                revert: "invalid",
                containment: this._owner.getMeetingContainer()

            })
            .on('mousedown', function() {
                // Attach to body, because the mouse can be outside of the object when dropped
                // e.g. page scrolled
                $(document).one('mouseup', function() {
                    self.props.dragStopHandler();
                });
                self.props.dragStartHandler();
            });
        }
    },

    render: function() {
        this._hasAlternative = !!this.props['meeting'].getAlternateMeetings().length;

        var classNames = 'calele meeting calele-' + this.props['day'].toLowerCase();
        if (this._hasAlternative) {
            classNames += ' mutable';   
        }
        if (this.props['length'] > this.longMeetingThreshold) {
            classNames += ' meeting-long';
        }
        classNames += ' ' + this.props['color'];

        var style = this.getLayoutStyle();

        return <div style={style} className={classNames} ref="meeting" data-nbr={this.props['nbr']}>
            <p className='meeting-title'>{this.props['title']}</p>
            <p className='meeting-time'>{this.props['time']}</p>
            <p className='meeting-loc'>{this.props['location']}</p>
        </div>;
    }
});

module.exports = SingleMeeting;