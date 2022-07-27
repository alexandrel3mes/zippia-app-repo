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
  }

  const resetFilters = () => {
    setCompanies([])
    setCompanyName('')
  }

  return (
    <div className="container">
      <Head>
        <title>Zippia</title>
        <link rel="icon" href="/zippia.ico" />
      </Head>

      <MainHeader />

      <main>

        <section>
        <ReactModal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        >
          <span onClick={closeModal}>X</span>

          {
            jobs.jobs.map((job) => 
            <button onClick={closeAndSet} key={job.jobId}>{job.companyName}</button>
          )
          }
        </ReactModal>
        <button
          onClick={openModal}
        >
          {
            companyName === '' ? 'All companies' : companyName
          }
        </button>
        <button onClick={mostRecent}>Only the most recent</button>
        <button onClick={resetFilters}>Reset Filters</button>
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

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
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
