import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div>
      <Navbar/>
      <div
      style={{
        backgroundImage: 'url(\'src/assets/images/bg.webp\')',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '92vh', // Adjust height as needed
      }}
    ></div>
    </div>
  )
}

export default App
