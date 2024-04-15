// import { useEffect, useState } from 'react'
// import Base from '../components/Base'
// import { Button, Card, CardBody, CardHeader, Col, Form,Container, FormFeedback, FormGroup, Row } from 'reactstrap'
// import { signUp } from '../services/user-service';
// import { toast } from 'react-toastify';

// const signup = () => {
//     const [data, setData] = useState({

//         name:'',
//         email: '',
//         password:'',
//     })

//     const [error, setError]=useState({
//         errors:{},
//         isError:false,
//     }) 


//     useEffect(()=>{console.log(data);},[data])
    
//     const handleChange=(event,property)=>{
//         //dynamic setting a value
//         setData({...data, [property]:event.target.value})
//     }
    
//     //reset the form
//     const resetData=()=>{
//         setData({
//             name:'',
//         email: '',
//         password:'',
//         })
//     }

//     //submit the form
//     const submitForm=(event)=> {
//         event.preventDefault()

//         // if(error.isError){
//         //     toast.error("Form data is invalid!! , correct all details and submit")
//         //     setError({...error,isError:false})
//         //     return;
//         // }

//         console.log(data);

//         //data validate

//         //call server api for sending data
//         signUp(data).then((resp)=>{
//             console.log(resp)
//             console.log("success log")
//             toast.success("user is registered successfully !! user id"+resp.id)
//             setData({
//                 name:'',
//         email: '',
//         password:'',

//             })
//         }).catch((error)=>{
//             console.log(error)
//             console.log('error log')
//             //handle error in proper way
//             setError({
//                 errors:error,
//                 isError:true
//             })

//         })
//     }

//     return(
//         <Base>
//         <Container>
//             <Row  className="mt-4">

//                 { json.sti}
//             <Col sm={{ size: 6, offset : 3}}>
//             <Card color='dark' inverse>
//             <CardHeader>
//                 <h3> Fill information to Register</h3>
//             </CardHeader>

//             <CardBody >
//                 <Form onSubmit={submitForm}></Form>


        
//         <form>
//             <FormGroup>
//                 <label for="name">Enter name</label>
//                 <input type='text' placeholder='Enter here' id='name' onChange={(e)=>handleChange(e,'name')} value={data.name} invalid={ error.errors?.response?.data?.name ? true:false }/>
//             </FormGroup>

//             <FormFeedback>
//                 { error.errors?.response?.data?.name }
//             </FormFeedback>


//             <FormGroup>
//             <label for="email">Enter email</label>
//                 <input type='email' placeholder='Enter here' id='email' onChange={(e)=>handleChange(e,'email')} value={data.email} invalid={ error.errors?.response?.data?.email ? true:false }/>

//             </FormGroup>

//             <FormFeedback>
//                 { error.errors?.response?.data?.email }
//             </FormFeedback>


//             <FormGroup>
//             <label for="password">Enter password</label>
//                 <input type='password' placeholder='Enter here' id='password' onChange={(e)=>handleChange(e,'password')} value={data.password} invalid={ error.errors?.response?.data?.password ? true:false }/>

//             </FormGroup>

//             <FormFeedback>
//                 { error.errors?.response?.data?.password }
//             </FormFeedback>

//             {/* <FormGroup>
//             <label for="about">Enter text</label>
//                 <input type='textarea' placeholder='enter here' id='about' style={{ height: "250px"}} onChange={(e)=>handleChange(e,'about')} />
//             </FormGroup> */}


//             <Container className='text-center'>
//                 <Button outline color='light'>Register</Button>
//                 <Button onClick={resetData} color='secondary' type='reset' className='ml-2'>Reset</Button>
//             </Container>
//         </form>
//         </CardBody>
//         </Card>
//         </Col>
//         </Row>
//         </Container>
//         </Base>
//     );
// };

// export default signup;




import { useEffect, useState } from 'react'
import Base from '../components/Base'
import { Button, Card, CardBody, CardHeader, Col, Form, Container, FormFeedback, FormGroup, Row } from 'reactstrap'
import { signUp } from '../services/user-service'
import { toast } from 'react-toastify'

const Signup = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const [error, setError] = useState({
    errors: {},
    isError: false,
  })

  useEffect(() => {
    console.log(data)
  }, [data])

  const handleChange = (event, property) => {
    // dynamic setting a value
    setData({ ...data, [property]: event.target.value })
  }

  // reset the form
  const resetData = () => {
    setData({
      name: '',
      email: '',
      password: '',
    })
  }

  // submit the form
  const submitForm = (event) => {
    event.preventDefault()

    // data validate

    // call server api for sending data
    signUp(data)
      .then((resp) => {
        console.log(resp)
        console.log('success log')
        toast.success('User is registered successfully!! User ID: ' + resp.id)
        setData({
          name: '',
          email: '',
          password: '',
        })
      })
      .catch((error) => {
        console.log(error)
        console.log('error log')
        // handle error in proper way
        setError({
          errors: error,
          isError: true,
        })

        // display error messages
        if (error.response && error.response.data) {
          const errors = error.response.data
          Object.keys(errors).forEach((key) => {
            setError({ ...error, errors: { [key]: errors[key] }, isError: true })
          })
        }
      })
  }

  return (
    <Base>
      <Container>
        <Row className="mt-4">
          <Col sm={{ size: 6, offset: 3 }}>
            <Card color="dark" inverse>
              <CardHeader>
                <h3>Fill information to Register</h3>
              </CardHeader>

              <CardBody>
                <Form onSubmit={submitForm}>
                  <FormGroup>
                    <label for="name">Enter name</label>
                    <input
                      type="text"
                      placeholder="Enter here"
                      id="name"
                      onChange={(e) => handleChange(e, 'name')}
                      value={data.name}
                      invalid={error.isError && error.errors.name ? true : false}
                    />
                    {error.isError && error.errors.name && (
                      <FormFeedback>{error.errors.name}</FormFeedback>
                    )}
                  </FormGroup>

                  <FormGroup>
                    <label for="email">Enter email</label>
                    <input
                      type="email"
                      placeholder="Enter here"
                      id="email"
                      onChange={(e) => handleChange(e, 'email')}
                      value={data.email}
                      invalid={error.isError && error.errors.email ? true : false}
                    />
                    {error.isError && error.errors.email && (
                      <FormFeedback>{error.errors.email}</FormFeedback>
                    )}
                  </FormGroup>

                  <FormGroup>
                    <label for="password">Enter password</label>
                    <input
                      type="password"
                      placeholder="Enter here"
                      id="password"
                      onChange={(e) => handleChange(e, 'password')}
                      value={data.password}
                      invalid={error.isError && error.errors.password ? true : false}
                    />
                    {error.isError && error.errors.password && (
                      <FormFeedback>{error.errors.password}</FormFeedback>
                    )}
                  </FormGroup>

                  <Container className="text-center">
                    <Button outline color="light">
                      Register
                    </Button>
                    <Button
                      onClick={resetData}
                      color="secondary"
                      type="reset"
                      className="ml-2"
                    >
                      Reset
                    </Button>
                  </Container>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Base>
  )
}

export default Signup