import React, { Component } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p className="info">{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p style={{whiteSpace: 'pre-line',color:'white'}} >{work.description}</p>
        </div>
      })
      var skills = this.props.data.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name} >
            <ProgressBar variant="danger" style={{height:"50%", backgroundColor:"white"}} animated now={skills.level} />
            <em>{skills.name}</em></li>
      })
    }

    return (
      <section id="resume" >
          <div className=" d-flex justify-content-md-center">
              <div className="col-xs-0 col-sm-3 col-lg-3">
                  <h1><span style={{right:'10px'}}>Education</span></h1>
              </div>
              <div className="col-xs-10 col-sm-7">
                  {education}
              </div>
          </div>
          <div className=" d-flex justify-content-md-center">
              <div className="col-xs-0 col-sm-3 col-lg-3">
                  <h1><span style={{right:'10px'}} className="text-left">Work</span></h1>
              </div>
              <div className="col-xs-10 col-sm-7">
                  {work}
              </div>
          </div>
          <div className=" d-flex justify-content-md-center">
              <div className="col-xs-0 col-sm-3 col-lg-3">
                  <h1><span style={{right:'10px'}} className="text-left">Skills</span></h1>
              </div>
              <div className="col-xs-10 col-sm-7">
                  <p>{skillmessage}
                  </p>

                  <div className="bars">
                      <ul className="skills">
                          {skills}
                      </ul>
                  </div>
              </div>
          </div>




   </section>
    );
  }
}

export default Resume;
