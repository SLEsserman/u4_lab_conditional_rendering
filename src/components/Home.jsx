import Landing from './Landing'
import Form from './Form'
import Thanks from './Thanks'
import Error from './Error'

const Home = (props) => {

  const renderPage = () => {
    switch (props.currentPage) {
      case 0: 
        return <Landing 
        incrementPage={props.incrementPage}/>
      case 1:
        return <Form 
        name={props.name} 
        age={props.age}
        email={props.email}
        handleChange={props.handleChange}
        incrementPage={props.incrementPage} />
      case 2: 
        if (props.age >= 18) {
          return <Thanks resetState={props.resetState}/>
        } else {
          return <Error incrementPage={props.incrementPage}/>
        }
        default: 
          return <Landing incrementPage={props.incrementPage}/>
    }
  }

  return (
    <div className="home">
      {renderPage()}
    </div>
  )
}

export default Home
