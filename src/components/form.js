import React, {Component} from 'react';
import Education from './form-components/education';
import PersonalDetails from './form-components/personal';
import WorkExperience from './form-components/work';

class Form extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { personal, editPersonalDetails, workExperience, addJob, education, addStudy, remove, edit } = this.props;
        return (
            <form className='form'>
                <section>
                    <h2>Personal Details</h2>
                    <PersonalDetails personal={personal} edit={editPersonalDetails}/>
                </section>
                <section>
                    <h2>Work Experience</h2>
                    {workExperience.map((job) => {
                        return <WorkExperience key={job.id} job={job} remove={remove} edit={edit}/>
                    })}
                    <div className='form-row'>
                        <button className='add-btn' type='button' onClick={addJob}>Add</button>
                    </div>
                </section>
                <section>
                    <h2>Education</h2>
                    {education.map((study) => {
                        return <Education key={study.id} study={study} remove={remove} edit={edit}/>
                    })}
                    <div className='form-row'>
                        <button className='add-btn' type='button' onClick={addStudy}>Add</button>
                    </div>
                </section>
            </form>
        );
    }
}

export default Form;