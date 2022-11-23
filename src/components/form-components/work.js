import React, {Component} from 'react';

class WorkExperience extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const { job, remove, edit } = this.props;
        const work = 'workExperience';
        return (
            <div className='work-container'>
                <div className='form-row'>
                    <label>Company
                    <input type='text' name='company' value={job.company} onChange={(e) => edit(e, job.id, work, 'company')}></input>
                    </label>
                </div>
                <div className='form-row'>
                    <label>Position
                    <input type='text' name='position' value={job.position} onChange={(e) => edit(e, job.id, work, 'position')}></input>
                    </label>
                </div>
                <div className='form-row'>
                    <label>Start date
                    <input type='date' name='start-date' value={job.startDate} onChange={(e) => edit(e, job.id, work, 'startDate')}></input>
                    </label>
                </div>
                <div className='form-row'>
                    <label>End date
                    <input type='date' name='end-date' value={job.endDate} onChange={(e) => edit(e, job.id, work, 'endDate')}></input>
                    </label>
                </div>
                <div className='form-row'>
                    <label>Work description
                    <textarea name='work-description' placeholder='Describe the work you did...' value={job.description} onChange={(e) => edit(e, job.id, work, 'description')}></textarea>
                    </label>
                </div>
                <div className='form-row'>
                   <button className='delete-btn' type='button' onClick={() => remove(work, job.id)}>Delete</button>
                </div>
            </div>
        );
    }
}

export default WorkExperience;