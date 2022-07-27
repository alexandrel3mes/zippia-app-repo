export default function MainHeader() {
  return (
    <>
    <header className="header">
      <img className="header-logo" src="/zippia-logo.png" alt="Zippia Logo" />
    </header>

  <style jsx global>{`
  body {
    margin: 0
  }
    .header {
      box-shadow: 0px 10px 20px 5px rgba(0,0,0,0.2);
      display: flex;
      justify-content: center;
      margin: 0;
      width: 100%;
    }

    .header-logo {
      width: 20vh;
    }
    `}
  </style>
</>
  )
}