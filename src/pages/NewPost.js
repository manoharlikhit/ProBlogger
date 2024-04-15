import React from 'react'
import { useState } from 'react';
import Base from '../components/Base';
import {FormGroup, Label,Input, Form, FormText ,Container,Button} from  'reactstrap';
import { useNavigate } from 'react-router-dom';


export default function NewPost(props) {
   
    const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();
      // Perform any form submission logic here
      navigate('/dashboard');
    };
    
    const [category,setCategory] = useState("Technical");
    const handleFilter = (category) => {
        setCategory(category);
      };
  return (
    
    <Base>
<Container className='mt-5'>

<Form onSubmit={handleSubmit}>
    <h2 className="text-center">Create New Post</h2>
  
 
  
  <FormGroup>
    <Label for="exampleUrl">
    <h4>Title</h4>
    </Label>
    <Input
      id="title"
      name="title"
      type="text"
      />
  </FormGroup>


  <FormGroup>
    <Label for="exampleText">
      <h4>start writing</h4>
    </Label>
    <Input
      id="exampleText"
      name="text"
      type="textarea"
      />
  </FormGroup>
  
  
  <FormGroup>
    <Label for="exampleSelect">
      Select a page
    </Label>
    <Input
      id="exampleSelect"
      name="select"
      type="select"
      >
      <option>
        Page 1
      </option>
      <option>
        Page 2
      </option>
      <option>
       Page 3
      </option>
      <option>
      Page         4
      </option>
      <option>
     Page   5
      </option>
    </Input>
  </FormGroup>
  
  <FormGroup>
    <Label for="exampleFile">
      File
    </Label>
    <Input
      id="exampleFile"
      name="file"
      type="file"
      />
    <FormText>
      Attach your file here!!
    </FormText>
  </FormGroup>
  
  <FormGroup check>

  <Label check>
    <Input type="radio" name="filter" value="technical" onChange={() => handleFilter('technical')} />
    Technical
  </Label>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <Label check>
    <Input type="radio" name="filter" value="non-technical" onChange={() => handleFilter('non-technical')} />
    Non Technical
  </Label>

</FormGroup>

<Button color="primary" type="submit">Submit</Button>
  
</Form>
      </Container>
    </Base>
  )
}
