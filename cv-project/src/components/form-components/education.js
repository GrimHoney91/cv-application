import React, {Component} from "react";

class Education extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const { study, remove, edit } = this.props;
        const education = 'education';
        return (
            <div className="education-container">
                 <div className='form-row'>
                    <label>University/College
                    <input type='text' name='university' value={study.college} onChange={(e) => edit(e, study.id, education, 'college')}></input>
                    </label>
                </div>
                 <div className='form-row'>
                    <label>Major
                    <input type='text' name='major' value={study.major} onChange={(e) => edit(e, study.id, education, 'major')}></input>
                    </label>
                </div>
                <div className='form-row'>
                    <label>Start date
                    <input type='date' name='start-school' value={study.startDate} onChange={(e) => edit(e, study.id, education, 'startDate')}></input>
                    </label>
                </div>
                <div className='form-row'>
                    <label>End date
                    <input type='date' name='end-school' value={study.endDate} onChange={(e) => edit(e, study.id, education, 'endDate')}></input>
                    </label>
                </div>
                <div className='form-row'>
                    <button className="delete-btn" type="button" onClick={() => remove(education, study.id)}>Delete</button>
                </div>
            </div>
        );
    }
}

export default Education;