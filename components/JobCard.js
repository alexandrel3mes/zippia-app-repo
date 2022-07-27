import { useState } from "react";

export default function JobCard( props ) {
  const { jobTitle, companyName, jobDescription, postedDate, location, estimatedSalary, companyLogo, companyInitial, jobLevels, OBJurl } = props.job;
  const onlyTheCode = jobDescription.slice(1, -1);
  console.log(props.job);

  const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;

  const [visibility, setVisibility]= useState('hide')

  const showOrHideDescription = () => {
    visibility === 'hide' ? setVisibility('job-desc') : setVisibility('hide')
  }
  return (
    <>
      <div className="job-card">
        { !companyLogo ? <p className="comp-init">{companyInitial}</p> : <img src={companyLogo} className="comp-icon" />}
        
        <h3>{jobTitle}</h3>
        <p>{companyName}</p>
        <p>{location}</p>
        <div>
          {jobLevels.map((level) => (
            <p>{level}</p>
          ))}
        </div>
        <p>{estimatedSalary}</p>
        <p>{postedDate}</p>
        <a href={OBJurl} target="_blank">Apply Now!</a>
        <div
          className={`${visibility}`}
          dangerouslySetInnerHTML={
            {__html:onlyTheCode}
          }
        >
        </div>
      <p onClick={showOrHideDescription} className="show-btn">
        {
          visibility === 'hide' ? 'Show Job Description' : 'Hide Job Description'
        }
      </p>
      </div>
      
      <style jsx global>{`
        body {
          margin: 0
        }

        ul {
          list-style-type: none;
        }

        .job-card {
          border-radius: 10px;
        }

        @media (max-width: 800px) {
          .job-card {
            align-items: center;
            box-shadow: 0px 10px 20px 5px rgba(0,0,0,0.1);
            display: flex;
            flex-direction: column;
            text-align: left;
            margin: 0 0 50px 0;
            width: 90vw;
          }

          .hide {
            display: none;
            visibility: hidden;
            opacity: 0;
            transition: visibility 0s, opacity 0.5s linear;
          }

          .job-desc {
            display: flex;
            flex-direction: column;
            text-align: center;
            visibility: visible;
            opacity: 1;
          }
        }

        @media (min-width: 800px) {
          .job-card {
            align-items: center;
            box-shadow: 0px 10px 20px 5px rgba(0,0,0,0.1);
            display: flex;
            flex-direction: column;
            text-align: left;
            margin: 0 0 50px 0;
            width: 30vw;
          }

          .hide {
            display: none;
          }

          .job-desc {
            display: flex;
            flex-direction: column;
            text-align: left;
          }
      }
    `}
  </style>
    </>
  )
}