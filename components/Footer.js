export default function Footer() {
  return (
    <>
      <footer className="footer">
        <img src="/logo_footer.svg" alt="Zippia Logo" className="logo_footer footer-gp" />

        <div className="footer-gp">
          <h4 className="footer-title">ZIPPIA</h4>
          <p className="footer-p">About Us</p>
          <p className="footer-p">Employer Services</p>
          <p className="footer-p">Terms of Use</p>
          <p className="footer-p">Privacy Policy</p>
          <p className="footer-p">Contact Us</p>
        </div>

        <div className="footer-gp">
          <h4 className="footer-title">CAREERS & JOBS</h4>
          <p className="footer-p">Careers Advice</p>
          <p className="footer-p">Careers by Categories</p>
          <p className="footer-p">Jobs by Location</p>
          <p className="footer-p">College Grad Careers</p>
          <p className="footer-p">Resume Builder</p>
          <p className="footer-p">Job Search Q&A</p>
          <p className="footer-p">Up and Coming Jobs</p>
        </div>


        <div className="footer-gp">
          <span className="footer-p">Email: </span><span className="footer-title">support@zippia.com</span>
          <p className="footer-p">Copyright © 2022 Zippia, Inc.</p>
        </div>
      </footer>
      
      <style jsx global>{`
        body {
          margin: 0
        }

        .footer-title {
          color: rgb(255, 255, 255);
        }

        .footer-p {
          color: rgb(170, 170, 170);
          cursor: pointer;
        }

        @media (max-width: 800px) {
          .footer {
            align-items: center;
            background-color: rgb(40,40,40);
            display: flex;
            flex-direction: column;
            text-align: center;
            margin: 0;
            width: 100%;
          }

          .footer-gp {
            margin: 50px 0px 20px 0pc;
          }
        }

        @media (min-width: 800px) {
        .footer {
          align-items: flex-start;
          background-color: rgb(40,40,40);
          display: flex;
          justify-content: center;
          margin: 0;
          width: 100%;
        }

        footer h4 {
          margin-top: 0;
        }

        .footer-gp {
          margin: 50px 50px 20px 0;
        }
      }
    `}
  </style>
    </>
  )
}