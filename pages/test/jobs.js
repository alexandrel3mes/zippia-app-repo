import { GetServerSideProps } from 'next';
import { useState } from 'react';
import ReactModal from 'react-modal';
import Head from 'next/head'
import Footer from '../../components/Footer'
import MainHeader from '../../components/MainHeader'
import JobCard from '../../components/JobCard'


export default function Home( jobs ) {
  const [companyName, setCompanyName] = useState('');
  const [companies, setCompanies] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [recentBtnActive, setRecentBtnActive] = useState('unactive');
  const [companyBtnActive, setCompanyBtnActive] = useState('unactive');
  const [allJobs, setAll] = useState(jobs);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
  }

  function closeModal() {
    setIsOpen(false);
  }

  const closeAndSet = (event) => {
    const compName = event.target.innerText;
    const newComp = jobs.jobs.filter((job) => job.companyName === compName);
    setCompanies(newComp)
    setCompanyName(newComp[0].companyName)
    setCompanyBtnActive('active')
    closeModal();
  }

  const mostRecent = () => {
    const thatContainHours = jobs.jobs.filter((job) => job.postedDate.includes('h'))
    const thatContainDays = jobs.jobs.filter((job) => job.postedDate.includes('d'))
    const filtered = thatContainDays.filter((job) => {
      return job.postedDate === '1d ago' ||
      job.postedDate === '2d ago' ||
      job.postedDate === '3d ago' ||
      job.postedDate === '4d ago' ||
      job.postedDate === '5d ago' ||
      job.postedDate === '6d ago' ||
      job.postedDate === '7d ago'
    })
    const newCompanies = [...thatContainHours, ...filtered]
    setCompanies(newCompanies);
    setRecentBtnActive('active');
    setCompanyName('');
    setCompanyBtnActive('unactive');
  }

  const resetFilters = () => {
    setCompanies([])
    setCompanyName('')
    setCompanyBtnActive('unactive')
    setRecentBtnActive('unactive')
  }

  const customStyles = {
    content: {
      display: 'flex',
      top: '50%',
      left: '50%',
      right: '30%',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
    },
  };

  return (
    <div className="container">
      <Head>
        <title>Zippia</title>
        <link rel="icon" href="/zippia.ico" />
      </Head>

      <MainHeader />

      <main>

        <section className='filter-btns'>
        <ReactModal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        >
          <span className='closebtn' onClick={closeModal}>X</span>
          <div className='companies'>
          {
            jobs.jobs.map((job) => 
            <button className='unactive company' onClick={closeAndSet} key={job.jobId}>{job.companyName}</button>
            )
          }
          </div>
        </ReactModal>
        <button
          onClick={openModal}
          className={companyBtnActive}
        >
          {
            companyName === '' ? 'All companies' : companyName
          }
        </button>
        <button className={recentBtnActive} onClick={mostRecent}>Only the most recent</button>
        <button className='unactive' onClick={resetFilters}>Reset Filters</button>
        </section>

        <section>
        {
          companies.length === 0 ?
          jobs.jobs.map((job) => 
            <JobCard key={job.jobId} job={job} />
        )
          : companies.map((company) =>
            <JobCard key={company.jobId} job={company} />)
        }
        </section>
      </main>

      <Footer />


      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        @media (max-width: 400px) {
          .filter-btns {
            align-items: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-bottom: 10vw;
            width: 100%;
          }

          .filter-btns button {
            margin: 0 5vw 5vw 5vw;
            width: 100%
          }

          .unactive {
            color: rgb(88, 142, 241);
            background: none;
            border: 1px solid rgb(88, 142, 241);
            border-radius: 5px;
            padding: 15px;
            transition: 200ms;
          }
  
          .active {
            color: white;
            background: rgb(88, 142, 241);
            border: 1px solid rgb(88, 142, 241);
            border-radius: 5px;
            padding: 15px;
            transition: 200ms;
          }

          .closebtn {
            margin: 0px 30px 0 0 ;
          }

          .companies {
            display: flex;
          }

          .company {
            margin-right: 10px;
          }
        } 

        @media (min-width: 400px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }

          .filter-btns {
            display: flex;
            justify-content: center;
            width: 100%;
          }

          .filter-btns button {
            margin: 0 5vw 5vw 5vw;
          }

          .unactive {
            color: rgb(88, 142, 241);
            background: none;
            border: 1px solid rgb(88, 142, 241);
            border-radius: 5px;
            padding: 15px;
            transition: 200ms;
          }
  
          .active {
            color: white;
            background: rgb(88, 142, 241);
            border: 1px solid rgb(88, 142, 241);
            border-radius: 5px;
            padding: 15px;
            transition: 200ms;
          }

          .closebtn {
            margin: 0px 30px 0 0 ;
          }

          .companies {
            display: flex;
          }

          .company {
            margin-right: 10px;
          }

        }

        @media (min-width: 800px) {
          .filter-btns {
            display: flex;
            justify-content: center;
            width: 100%;
          }

          .filter-btns button {
            margin: 0 30px 40px 0;
          }

          .unactive {
            color: rgb(88, 142, 241);
            background: none;
            border: 1px solid rgb(88, 142, 241);
            border-radius: 5px;
            padding: 15px;
            transition: 200ms;
          }
  
          .active {
            color: white;
            background: rgb(88, 142, 241);
            border: 1px solid rgb(88, 142, 241);
            border-radius: 5px;
            padding: 15px;
            transition: 200ms;
          }

          .closebtn {
            margin: 0px 30px 0 0 ;
          }

          .companies {
            display: flex;
          }

          .company {
            margin-right: 10px;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
    
  )
}

export const getServerSideProps = async () => {
  const requestOptions = {
    method: 'POST',
    body: JSON.stringify({
      companySkills: true,
      dismissedListingHashes: [],
      fetchJobDesc: true,
      jobTitle: "Business Analyst",
      locations: [],
      numJobs: 10,
      previousListingHashes: []
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }),
  };

  const response = await fetch('https://www.zippia.com/api/jobs/', requestOptions);
  const data = await response.json();

  return {
    props: {
      jobs: data.jobs
    }
  }
}
