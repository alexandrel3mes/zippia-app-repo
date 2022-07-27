import { useState } from "react";

export default function JobCard( props ) {
  const { jobTitle, companyName, jobDescription} = props.job;
  const onlyTheCode = jobDescription.slice(1, -1);
  console.log(props.job);

  const [visibility, setVisibility]= useState('hide')

  const showOrHideDescription = () => {
    visibility === 'hide' ? setVisibility('job-desc') : setVisibility('hide')
  }
  return (
    <>
      <div className="job-card">
        <h3>{jobTitle}</h3>
        <p>{companyName}</p>
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

        @media (max-width: 800px) {
          .job-card {
            align-items: center;
            box-shadow: 0px 10px 20px 5px rgba(0,0,0,0.2);
            display: flex;
            flex-direction: column;
            text-align: left;
            margin: 0 0 50px 0;
            width: 90vw;
          }

          .hide {
            display: none;
          }

          .job-desc {
            display: flex;
            flex-direction: column;
            text-align: center;
          }
        }

        @media (min-width: 800px) {
          .job-card {
            align-items: center;
            box-shadow: 0px 10px 20px 5px rgba(0,0,0,0.2);
            display: flex;
            flex-direction: column;
            text-align: left;
            margin: 0 0 50px 0;
            width: 90vw;
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