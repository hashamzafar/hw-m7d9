import { Carousel, Col, Container, Row } from 'react-bootstrap'
import dishes from '../data/menu.json'
import { useState } from 'react'
import DishComments from './DishComments'
import upperName from '../helpers/lib'

// { title }
interface HomeProps {
    title : string;
    
}
// interface dishesState{
//     id:number
//     name:string
//     description: string
//     image:string

// }
interface selected{ 
    id?:number,
   name:string,
   image:string,
   label:string,
   category: string,
   price:string,
   description:string,
   comments: comment[]
 }
console.log(dishes)

interface comment {
    
        id:number,
        rating:number,
        comment:string,
        date:string
      
}
 
const Home = ({title}:HomeProps) => {
  const [selected, setSelected] = useState<selected| undefined>()
//   const [ishesState,setDishes]=useState([]
console.log(title)
  return (
    <Container>
      <Row className="justify-content-center mt-3">
        <Col xs={12} md={6}>
          <h1>Welcome to {upperName(title)}!</h1>
          <h3 className="text-center mb-4">We can only cook pasta...</h3>
          <Carousel>
             
            {dishes.map((dish, i) => ( 
           console.log(dish.image),
           console.log(i),
              <Carousel.Item
            key={dish.id}
                     onClick={() => {
                  setSelected(dish)
                }}  
              >  
                   
            
                <img className="d-block w-100" src={dish.image} alt={'slide number ' + (i + 1)} />
                <Carousel.Caption>
                    
                  <h3>{dish.name}</h3>
                  <p>{dish.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
        <DishComments selectedPasta={selected} />
        
      </Row>
    </Container>
  )
}

export default Home