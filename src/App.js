import React, {Component} from 'react';
import Form from './components/form';
import Pdf from './components/pdf';
import uniqid from 'uniqid';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      personal: {
        name: '',
        title: '',
        phone: '',
        mail: '',
        address: '',
        description: '',
      },
      workExperience: [],
      job: {
        company: '',
        position: '',
        startDate: '',
        endDate: '',
        description: '',
        id: uniqid(),
      },
      education: [],
      study: {
        college: '',
        major: '',
        startDate: '',
        endDate: '',
        id: uniqid(),
      },
    };

    this.addJob = this.addJob.bind(this);
    this.addStudy = this.addStudy.bind(this);
    this.remove = this.remove.bind(this);
    this.edit = this.edit.bind(this);
    this.clearAll = this.clearAll.bind(this);
    this.editPersonalDetails = this.editPersonalDetails.bind(this);
  }

  addJob() {
    this.setState({
      workExperience: [...this.state.workExperience, this.state.job],
      job: {
        company: '',
        position: '',
        startDate: '',
        endDate: '',
        description: '',
        id: uniqid(),
      },
    });
  }

  remove(prop, id) {
    this.setState({
      [prop]: this.state[prop].filter(obj => obj.id !== id),
    });
  }

  edit(e, id, parent, prop) {
    this.setState({
      [parent]: this.state[parent].map((obj) => {
        if (obj.id === id) {
          obj[prop] = e.target.value;
        }
        return obj;
      }),
    });
  }

  addStudy() {
    this.setState({
      education: [...this.state.education, this.state.study],
      study: {
        college: '',
        major: '',
        startDate: '',
        endDate: '',
        id: uniqid(),
      },
    });
  }

  editPersonalDetails(e, prop) {
    this.setState({
      personal: {...this.state.personal, [prop]: e.target.value},
    });
  }
  
  clearAll() {
    this.setState({
      personal: {
        name: '',
        title: '',
        phone: '',
        mail: '',
        address: '',
        description: '',
      },
      workExperience: [],
      education: [],
    });
  }

  render() {
    const { personal, workExperience, education } = this.state;
    return (
      <div className='app'>
        <div className='form-container'>
          <Form personal={personal} editPersonalDetails={this.editPersonalDetails} workExperience={workExperience} addJob={this.addJob} education={education} addStudy={this.addStudy} remove={this.remove} edit={this.edit}/>
          <button className='clear' type='button' onClick={this.clearAll}>Clear All</button>
        </div>
        <div className='pdf-container'>
          <Pdf personal={personal} workExperience={workExperience} education={education}/>
          <button className='generate' type='button' onClick={() => window.print()}>Generate PDF</button>
        </div>
      </div>
    );
  }
}

export default App;
