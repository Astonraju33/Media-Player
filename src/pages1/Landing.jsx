import React from 'react'
import { useNavigate } from 'react-router-dom'
import Card from 'react-bootstrap/Card';

function Landing() {

  const navigate = useNavigate()
  const handleNavigate = ()=>{
    //navigate to home page
    navigate('/home')
  } 

  return (
    <>
    <div className='container mt-5'>
    <div className='header row align-items-center m-5'>
      <div className='col-lg-5'>
        <h3 style={{height:'50px'}}>Welcome to <span className='text-warning'>Media Player</span></h3>
        <p style={{textAlign:'justify'}}>Media player app. will allow you to add and remove their uploaded videos , also helps to arrange them in different categories by providing drag and drop functionalities</p>
        <button onClick={handleNavigate} style={{backgroundColor:'orangered'  , padding:'10px' , color:'white', borderRadius:'5px'}} >Get started</button>
      </div>
      <div className='col-lg-1'></div>
      <div className='col-lg-6'>
        <img style={{width:'90%', height:'80%'}} src="https://assets.newatlas.com/dims4/default/d2d4f7e/2147483647/strip/true/crop/800x800+0+0/resize/800x800!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2F45%2Fe5%2F2e081c9a4e66b35bd1959af8d3e8%2Fbh-accretiondisk-360-800px.gif" alt="Landing Image" />
      </div>
    </div>
    <div className='features'>
      <h3 style={{height:'50px'}} className='text-center'>Features</h3>
      <div className='row'>
        <div className='col-lg-4' >
        <Card >
      <Card.Img style={{height:'215px'}} variant="top" src="https://media.giphy.com/media/7JppsuorGiMYOXtLGQ/giphy.gif" />
      <Card.Body style={{backgroundColor:'#444'}}>
        <Card.Title style={{height:'30px'}}>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
        <div className='col-lg-4'>
        <Card >
      <Card.Img variant="top" src="https://25.media.tumblr.com/tumblr_m67ck87YEa1r9jgwoo1_500.gif" />
      <Card.Body style={{backgroundColor:'#444'}}>
        <Card.Title style={{height:'30px'}}>Categorize Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card> 
        </div>
        <div className='col-lg-4'>
        <Card >
      <Card.Img style={{height:'215px'}}  variant="top" src="https://i.pinimg.com/originals/69/8b/bd/698bbd8595d3ab2ea6fb1c7b77150584.gif" />
      <Card.Body style={{backgroundColor:'#444'}}>
        <Card.Title style={{height:'30px'}}>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
      </div>
    </div>
    <div className='video row border p-5 rounded mb-5 align-items-center mt-5'>
        <div className="col-lg-5">
            <h3 style={{height:'55px'}}>Simple,Fast and Powerful</h3>
            <p style={{textAlign:'justify'}}> <span className='fs-4'> Play Everything :</span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, ducimus esse! Architecto consequatur natus fugiat debitis ducimus!
             Suscipit, maxime deleniti omnis quam commodi iusto nam fugit quod pariatur dolor nemo.  </p>
            <p style={{textAlign:'justify'}}> <span className='fs-4'>Categorize Videos :</span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, ducimus esse! Architecto consequatur natus fugiat debitis ducimus!
             Suscipit, maxime deleniti omnis quam commodi iusto nam fugit quod pariatur dolor nemo.  </p>
            <p style={{textAlign:'justify'}}> <span className='fs-4'>Watch History :</span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, ducimus esse! Architecto consequatur natus fugiat debitis ducimus!
             Suscipit, maxime deleniti omnis quam commodi iusto nam fugit quod pariatur dolor nemo.  </p>
        </div>
        <div className="col"></div>
        <div className="col-lg-6">
        <iframe width="914" height="514" src="https://www.youtube.com/embed/IqwIOlhfCak" title="LEO - Badass
         Lyric | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    </div>
    <hr />
    </>
  )
}

export default Landing