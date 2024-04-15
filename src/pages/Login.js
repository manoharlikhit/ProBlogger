import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Label, Row, Input, UncontrolledAlert} from "reactstrap";
import Base from "../components/Base";
import { loginUser } from "../services/user-service";
import { doLogin } from "../auth";
import {toast } from 'react-toastify';
import { useState } from "react";

const Login = () => {

    const[loginDetail,setLoginDetail]=useState({
        username:'',
        password:''
        });

    const handleChange=(event,field)=>{
        let actualValue=event.target.value
        setLoginDetail({
            ...loginDetail,[field]:actualValue
        });

    };
        

        const handleReset=()=>{
            setLoginDetail({
                username:"",
                password:"",
            });
        };

        const handleFormSubmit=(event)=>{
            event.preventDefault();
            console.log(loginDetail);

            //validation
            if(
                loginDetail.username.trim()=='' || 
                loginDetail.password.trim()=='')
                {
                toast.error("Username or password is required !!");
                return;
            }

            //submit the data to server to generate token
            loginUser(loginDetail).then((data)=>{
                
                console.log(data)

                //save the data to localstorage
                doLogin(data,()=>{
                    console.log("login details is saved to localstorage")

                    //redirect to user dashboard page
                })
                toast.success('login success')
            }).catch(error=>{
                console.log(error)
                if(error.response.status==400 || error.response.status==404){
                    toast.error(error.response.data.message)
                }else{
                toast.error("something went wrong on server!!")}
            })

        };
    

    // return(
    //     <Base>
    //     <Container>
    //         <Row className="mt-4">
    //             <Col sm={{
    //                 size:6,
    //                 offset: 3,
    //             }}>
    //                 <Card color="dark" inverse>
    //                     <CardHeader>
    //                         <h3>Login Here!!</h3>
    //                     </CardHeader>

    //                     <CardBody>
    //                         <Form onSubmit={handleFormSubmit}>
    //                             <FormGroup>
    //                                 <Label for="email">Enter Email</Label>
    //                                 <Input type="text"  id="email" value={loginDetail.username} onChange={(e)=> handleChange(e,'username')} />
    //                             </FormGroup>

    //                             <FormGroup>
    //                                 <Label for="password">Enter password</Label>
    //                                 <Input type="password"  id="password" value={loginDetail.password} onChange={(e)=> handleChange(e,'password')} />
    //                             </FormGroup>

    //                             <Container className="text-center">
    //                                 <Button color="light" outline>Login</Button>
    //                                 <Button onClick={ handleReset } className="ms-2">Reset</Button>
    //                             </Container>
    //                         </Form>
    //                     </CardBody>


    //                 </Card>
    //             </Col>
    //         </Row>
    //     </Container>
        
    //     </Base>
    // )
   
  return (
    <Base>
    <Container className="justify-content-center mt-5">

      <Row className="justify-content-center">

        <Col  xs="12" sm="6" md="4">

          <Card className="text-center">

            <CardBody>

              <h1>Welcome Back!</h1>

              <Form>
    <FormGroup floating>
      <Input
        id="exampleEmail"
        name="email"
        placeholder="Email"
        type="email"
      />
      <Label for="exampleEmail">
        Email
      </Label>
    </FormGroup>
    {' '}
    <FormGroup floating>
      <Input
        id="examplePassword"
        name="password"
        placeholder="Password"
        type="password"
      />
      <Label for="examplePassword">
        Password
      </Label>
    </FormGroup>
    {' '}
    <Button>
      Submit
    </Button>
  </Form>

            </CardBody>

          </Card>

        </Col>

      </Row>

    </Container>
    </Base>

  );

}

export default Login;