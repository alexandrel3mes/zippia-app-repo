import { useState } from "react";

export default function JobCard( props ) {
  const { jobTitle, companyName, jobDescription, postedDate, location, estimatedSalary, companyLogo, companyInitial, jobLevels, OBJurl } = props.job;
  const onlyTheCode = jobDescription.slice(1, -1); /* get only the html from the api */

  const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`; /* generate random color for the companies that dont have a logo */

  const [visibility, setVisibility]= useState('hide')

  const showOrHideDescription = () => {
    visibility === 'hide' ? setVisibility('job-desc') : setVisibility('hide')
  }

  return (
    <>
      <div className="job-card">
        <div>
          <div className="title">
            { !companyLogo ? <p className="comp-init aside-icon">{companyInitial}</p> : <img src={companyLogo} className="comp-icon aside-icon" />} 
            <h3>{jobTitle}</h3>
          </div>
          <p>{companyName}</p>
          <p className="p-small">{location}</p>
          <div className="level-div">
              {jobLevels.map((level) => (
                <p className="level">{level}</p>
              ))}
          </div>
          <p className="p-small">{estimatedSalary}</p>
          <p className="p-small">{postedDate}</p>
          <a className="apply-btn" href={OBJurl} target="_blank">Apply Now!</a>
          <div
            className={`${visibility} `}
            dangerouslySetInnerHTML={
              {__html:onlyTheCode}
            }
          >
          </div>
      <p onClick={showOrHideDescription} className="show-btn">
        {
          visibility === 'hide' ? 'Show Job Description ⬇️' : 'Hide Job Description ⬆️'
        }
      </p>
      </div>
      </div>
      
      <style jsx global>{`
        body {
          margin: 0
        }

        .job-card {
        }

        h3 {
          font-size: large;
          font-weight: 500;
        }

        ul {
          list-style-type: none;
      }

        .p-small {
          font-size: medium;
          font-weight: 300;
          padding-bottom: 20px;
        }

        .show-btn {
          padding-top: 20px;
        }

        .level {
          background: rgba(240,248,255,0.6);
          font-size: medium;
          font-weight: 300;
          padding: 10px;
          width: 50%;
        }

        .apply-btn {
          text-decoration: none;
          color: white;
          background: rgb(88, 142, 241);
          border-radius: 5px;
          padding: 10px;
          margin-top: 20px;
        }

          .job-card {
            align-items: center;
            box-shadow: 0px 10px 20px 5px rgba(0,0,0,0.1);
            border-radius: 20px;
            display: flex;
            flex-direction: column;
            text-align: left;
            padding: 20px;
            margin: 0 0 50px 0;
            width: 50vw;
          }

          .title {
            align-items: center;
            display: flex;
          }


          .comp-icon {
            align-self: top;
            heigth: 50px;
            width: 100px
          }

          .comp-init {
            align-self: top;
            background-color: ${randomColor};
            color: white;
            font-size: x-large;
            font-weight: 600;
            heigth: 50px;
            padding: 25px 0 25px 0;
            text-align: center;
            width: 100px
          }

          .hide {
            display: none;
          }

          .job-desc {
            align-items: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: justified;
            padding-top: 30px;
          }

          @media (min-width: 800px) {
            .job-card {
              width: 45vw;
            }
          }

          @media (max-width: 800px) {
            .job-card {
              align-items: center;
              justify-content: center;
              text-align: center;
              width: 90vw;
            }

            .level {
              align-self: center;
              margin: 0px;
            }

            .level-div {
              display: flex;
              justify-content: center;
              align-items: center;
            }
          }
    `}
  </style>
    </>
  )
}