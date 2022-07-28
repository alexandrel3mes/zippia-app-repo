export default function MainHeader() {
  return (
    <>
    <header className="header">
      <img onClick={() => window.location.reload(false)} className="header-logo" src="/logo_white.svg" alt="Zippia Logo" />
    </header>

  <style jsx global>{`
  body {
    margin: 0
  }
    .header {
      background-color: rgb(40,40,40);
      box-shadow: 0px 10px 20px 5px rgba(0,0,0,0.2);
      display: flex;
      justify-content: center;
      margin: 0;
      width: 100%;
    }

    .header-logo {
      margin: 30px 0 30px 0;
      cursor: pointer;
      width: 200px;
    }
    `}
  </style>
</>
  )
}