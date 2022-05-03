import React, {Component} from 'react';
import uniqid from 'uniqid';

class Pdf extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const { personal, workExperience, education } = this.props;
        return (
            <div className='pdf'>
                <h1>{personal.name.toUpperCase()}</h1>
                <h2>{personal.title.toUpperCase()}</h2>
                <ul>
                    <li>{personal.address}</li>
                    <li>{personal.phone}</li>
                    <li>{personal.mail}</li>
                </ul>
                <div className='section-div'>
                    <section>
                        <h3>SUMMARY STATEMENT</h3>
                        <p>{personal.description}</p>
                    </section>
                    <section>
                        <h3>WORK EXPERIENCE</h3>
                        <div className='job-container'>
                        {workExperience.map((job) => {
                            return  <div className='job' key={uniqid()}>
                                        <div>
                                            <h4>{job.position.toUpperCase()}</h4>
                                            <h4>{job.startDate + ' to ' + job.endDate}</h4>
                                        </div>
                                        <h4>{job.company}</h4>
                                        <p>{job.description}</p>
                                    </div>
                        })}
                        </div>
                    </section>
                    <section>
                        <h3>EDUCATION</h3>
                        <div className='education-container'>
                        {education.map((study) => {
                            return  <div className='study' key={uniqid()}>
                                        <div>
                                            <h4>{study.major}</h4>
                                            <h4>{study.startDate + ' to ' + study.endDate}</h4>
                                        </div>
                                        <h4>{study.college}</h4>
                                    </div>
                        })}
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default Pdf;