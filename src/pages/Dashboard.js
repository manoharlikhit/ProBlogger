import Base from "../components/Base";
import React, { useState } from 'react';
import { Card, CardBody,CardLink, CardImg, CardTitle, CardText, Container, Row, Col,Pagination,PaginationLink,PaginationItem ,Button, ListGroup, ListGroupItem } from 'reactstrap';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { MdReadMore } from "react-icons/md";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar text-center">
      <Nav vertical>
        <NavItem className="mt-3">
          <NavLink href="/Dashboard">
            Dashboard
            </NavLink>
        </NavItem>
        <NavItem className="mt-3">
          <NavLink href="/user">Users</NavLink>
        </NavItem>
        <NavItem className="mt-3">
          <NavLink href="#">Products</NavLink>
        </NavItem>
        <NavItem className="mt-3">
          <NavLink href="#">Orders</NavLink>
        </NavItem>
        <NavItem className="mt-3">
          <NavLink href="#">Reports</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};

const Body = () => {
  const [filter, setFilter] = useState('all');
 
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(20);

  const handleFilter = (type) => {
    setFilter(type);
    setCurrentPage(1); // Reset the current page when the filter changes
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const posts = [
    {
      title: 'Introduction to React Hooks',
      content: 'Learn about the latest feature in React for stateful logic, React Hooks.',
      image: 'https://via.placeholder.com/300',
      category: 'technical'
    },
    {
      title: 'Top 10 JavaScript Frameworks in 2024',
      content: 'Explore the most popular JavaScript frameworks used by developers in 2024.',
      image: 'https://via.placeholder.com/300',
      category: 'technical'
    },
    {
      title: '10 Tips for Effective Remote Work',
      content: 'Discover 10 tips to enhance your productivity while working remotely.',
      image: 'https://via.placeholder.com/300',
      category: 'non-technical'
    },
    {
      title: 'The Future of Artificial Intelligence',
      content: 'Explore the potential impact of artificial intelligence on various industries.',
      image: 'https://via.placeholder.com/300',
      category: 'technical'
    },{
      title: 'Introduction to React Hooks',
      content: 'Learn about the latest feature in React for stateful logic, React Hooks.',
      image: 'https://via.placeholder.com/300',
      category: 'technical'
    },
    {
      title: 'Top 10 JavaScript Frameworks in 2024',
      content: 'Explore the most popular JavaScript frameworks used by developers in 2024.',
      image: 'https://via.placeholder.com/300',
      category: 'technical'
    },
    {
      title: '10 Tips for Effective Remote Work',
      content: 'Discover 10 tips to enhance your productivity while working remotely.',
      image: 'https://via.placeholder.com/300',
      category: 'non-technical'
    },
    {
      title: 'The Future of Artificial Intelligence',
      content: 'Explore the potential impact of artificial intelligence on various industries.',
      image: 'https://via.placeholder.com/300',
      category: 'technical'
    },{
      title: 'Introduction to React Hooks',
      content: 'Learn about the latest feature in React for stateful logic, React Hooks.',
      image: 'https://via.placeholder.com/300',
      category: 'technical'
    },
    {
      title: 'Top 10 JavaScript Frameworks in 2024',
      content: 'Explore the most popular JavaScript frameworks used by developers in 2024.',
      image: 'https://via.placeholder.com/300',
      category: 'technical'
    },
    {
      title: '10 Tips for Effective Remote Work',
      content: 'Discover 10 tips to enhance your productivity while working remotely.',
      image: 'https://via.placeholder.com/300',
      category: 'non-technical'
    },
    {
      title: 'The Future of Artificial Intelligence',
      content: 'Explore the potential impact of artificial intelligence on various industries.',
      image: 'https://via.placeholder.com/300',
      category: 'technical'
    },{
      title: 'Introduction to React Hooks',
      content: 'Learn about the latest feature in React for stateful logic, React Hooks.',
      image: 'https://via.placeholder.com/300',
      category: 'technical'
    },
    {
      title: 'Top 10 JavaScript Frameworks in 2024',
      content: 'Explore the most popular JavaScript frameworks used by developers in 2024.',
      image: 'https://via.placeholder.com/300',
      category: 'technical'
    },
    {
      title: '10 Tips for Effective Remote Work',
      content: 'Discover 10 tips to enhance your productivity while working remotely.',
      image: 'https://via.placeholder.com/300',
      category: 'non-technical'
    },
    {
      title: 'The Future of Artificial Intelligence',
      content: 'Explore the potential impact of artificial intelligence on various industries.',
      image: 'https://via.placeholder.com/300',
      category: 'technical'
    },{
      title: 'Introduction to React Hooks',
      content: 'Learn about the latest feature in React for stateful logic, React Hooks.',
      image: 'https://via.placeholder.com/300',
      category: 'technical'
    },
    {
      title: 'Top 10 JavaScript Frameworks in 2024',
      content: 'Explore the most popular JavaScript frameworks used by developers in 2024.',
      image: 'https://via.placeholder.com/300',
      category: 'technical'
    },
    {
      title: '10 Tips for Effective Remote Work',
      content: 'Discover 10 tips to enhance your productivity while working remotely.',
      image: 'https://via.placeholder.com/300',
      category: 'non-technical'
    },
    {
      title: 'The Future of Artificial Intelligence',
      content: 'Explore the potential impact of artificial intelligence on various industries.',
      image: 'https://via.placeholder.com/300',
      category: 'technical'
    },{
      title: 'Introduction to React Hooks',
      content: 'Learn about the latest feature in React for stateful logic, React Hooks.',
      image: 'https://via.placeholder.com/300',
      category: 'technical'
    },
    {
      title: 'Top 10 JavaScript Frameworks in 2024',
      content: 'Explore the most popular JavaScript frameworks used by developers in 2024.',
      image: 'https://via.placeholder.com/300',
      category: 'technical'
    },
    {
      title: '10 Tips for Effective Remote Work',
      content: 'Discover 10 tips to enhance your productivity while working remotely.',
      image: 'https://via.placeholder.com/300',
      category: 'non-technical'
    },
    {
      title: 'The Future of Artificial Intelligence',
      content: 'Explore the potential impact of artificial intelligence on various industries.',
      image: 'https://via.placeholder.com/300',
      category: 'technical'
    },{
      title: 'Introduction to React Hooks',
      content: 'Learn about the latest feature in React for stateful logic, React Hooks.',
      image: 'https://via.placeholder.com/300',
      category: 'technical'
    },
    {
      title: 'Top 10 JavaScript Frameworks in 2024',
      content: 'Explore the most popular JavaScript frameworks used by developers in 2024.',
      image: 'https://via.placeholder.com/300',
      category: 'technical'
    },
    {
      title: '10 Tips for Effective Remote Work',
      content: 'Discover 10 tips to enhance your productivity while working remotely.',
      image: 'https://via.placeholder.com/300',
      category: 'non-technical'
    },
    {
      title: 'The Future of Artificial Intelligence',
      content: 'Explore the potential impact of artificial intelligence on various industries.',
      image: 'https://via.placeholder.com/300',
      category: 'technical'
    },{
      title: 'Introduction to React Hooks',
      content: 'Learn about the latest feature in React for stateful logic, React Hooks.',
      image: 'https://via.placeholder.com/300',
      category: 'technical'
    },
    {
      title: 'Top 10 JavaScript Frameworks in 2024',
      content: 'Explore the most popular JavaScript frameworks used by developers in 2024.',
      image: 'https://via.placeholder.com/300',
      category: 'technical'
    },
    {
      title: '10 Tips for Effective Remote Work',
      content: 'Discover 10 tips to enhance your productivity while working remotely.',
      image: 'https://via.placeholder.com/300',
      category: 'non-technical'
    },
    {
      title: 'The Future of Artificial Intelligence',
      content: 'Explore the potential impact of artificial intelligence on various industries.',
      image: 'https://via.placeholder.com/300',
      category: 'technical'
    },{
      title: 'Introduction to React Hooks',
      content: 'Learn about the latest feature in React for stateful logic, React Hooks.',
      image: 'https://via.placeholder.com/300',
      category: 'technical'
    },
    {
      title: 'Top 10 JavaScript Frameworks in 2024',
      content: 'Explore the most popular JavaScript frameworks used by developers in 2024.',
      image: 'https://via.placeholder.com/300',
      category: 'technical'
    },
    {
      title: '10 Tips for Effective Remote Work',
      content: 'Discover 10 tips to enhance your productivity while working remotely.',
      image: 'https://via.placeholder.com/300',
      category: 'non-technical'
    },
    {
      title: 'The Future of Artificial Intelligence',
      content: 'Explore the potential impact of artificial intelligence on various industries.',
      image: 'https://via.placeholder.com/300',
      category: 'technical'
    },{
      title: 'Introduction to React Hooks',
      content: 'Learn about the latest feature in React for stateful logic, React Hooks.',
      image: 'https://via.placeholder.com/300',
      category: 'technical'
    },
    {
      title: 'Top 10 JavaScript Frameworks in 2024',
      content: 'Explore the most popular JavaScript frameworks used by developers in 2024.',
      image: 'https://via.placeholder.com/300',
      category: 'technical'
    },
    {
      title: '10 Tips for Effective Remote Work',
      content: 'Discover 10 tips to enhance your productivity while working remotely.',
      image: 'https://via.placeholder.com/300',
      category: 'non-technical'
    },
    {
      title: 'The Future of Artificial Intelligence',
      content: 'Explore the potential impact of artificial intelligence on various industries.',
      image: 'https://via.placeholder.com/300',
      category: 'technical'
    },{
      title: 'Introduction to React Hooks',
      content: 'Learn about the latest feature in React for stateful logic, React Hooks.',
      image: 'https://via.placeholder.com/300',
      category: 'technical'
    },
    {
      title: 'Top 10 JavaScript Frameworks in 2024',
      content: 'Explore the most popular JavaScript frameworks used by developers in 2024.',
      image: 'https://via.placeholder.com/300',
      category: 'technical'
    },
    {
      title: '10 Tips for Effective Remote Work',
      content: 'Discover 10 tips to enhance your productivity while working remotely.',
      image: 'https://via.placeholder.com/300',
      category: 'non-technical'
    },
    {
      title: 'The Future of Artificial Intelligence',
      content: 'Explore the potential impact of artificial intelligence on various industries.',
      image: 'https://via.placeholder.com/300',
      category: 'technical'
    },{
      title: 'Introduction to React Hooks',
      content: 'Learn about the latest feature in React for stateful logic, React Hooks.',
      image: 'https://via.placeholder.com/300',
      category: 'technical'
    },
    {
      title: 'Top 10 JavaScript Frameworks in 2024',
      content: 'Explore the most popular JavaScript frameworks used by developers in 2024.',
      image: 'https://via.placeholder.com/300',
      category: 'technical'
    },
    {
      title: '10 Tips for Effective Remote Work',
      content: 'Discover 10 tips to enhance your productivity while working remotely.',
      image: 'https://via.placeholder.com/300',
      category: 'non-technical'
    },
    {
      title: 'The Future of Artificial Intelligence',
      content: 'Explore the potential impact of artificial intelligence on various industries.',
      image: 'https://via.placeholder.com/300',
      category: 'technical'
    },{
      title: 'Introduction to React Hooks',
      content: 'Learn about the latest feature in React for stateful logic, React Hooks.',
      image: 'https://via.placeholder.com/300',
      category: 'technical'
    },
    {
      title: 'Top 10 JavaScript Frameworks in 2024',
      content: 'Explore the most popular JavaScript frameworks used by developers in 2024.',
      image: 'https://via.placeholder.com/300',
      category: 'technical'
    },
    {
      title: '10 Tips for Effective Remote Work',
      content: 'Discover 10 tips to enhance your productivity while working remotely.',
      image: 'https://via.placeholder.com/300',
      category: 'non-technical'
    },
    {
      title: 'The Future of Artificial Intelligence',
      content: 'Explore the potential impact of artificial intelligence on various industries.',
      image: 'https://via.placeholder.com/300',
      category: 'technical'
    },{
      title: 'Introduction to React Hooks',
      content: 'Learn about the latest feature in React for stateful logic, React Hooks.',
      image: 'https://via.placeholder.com/300',
      category: 'technical'
    },
    {
      title: 'Top 10 JavaScript Frameworks in 2024',
      content: 'Explore the most popular JavaScript frameworks used by developers in 2024.',
      image: 'https://via.placeholder.com/300',
      category: 'technical'
    },
    {
      title: '10 Tips for Effective Remote Work',
      content: 'Discover 10 tips to enhance your productivity while working remotely.',
      image: 'https://via.placeholder.com/300',
      category: 'non-technical'
    },
    {
      title: 'The Future of Artificial Intelligence',
      content: 'Explore the potential impact of artificial intelligence on various industries.',
      image: 'https://via.placeholder.com/300',
      category: 'technical'
    },{
      title: 'Introduction to React Hooks',
      content: 'Learn about the latest feature in React for stateful logic, React Hooks.',
      image: 'https://via.placeholder.com/300',
      category: 'technical'
    },
    {
      title: 'Top 10 JavaScript Frameworks in 2024',
      content: 'Explore the most popular JavaScript frameworks used by developers in 2024.',
      image: 'https://via.placeholder.com/300',
      category: 'technical'
    },
    {
      title: '10 Tips for Effective Remote Work',
      content: 'Discover 10 tips to enhance your productivity while working remotely.',
      image: 'https://via.placeholder.com/300',
      category: 'non-technical'
    },
    {
      title: 'The Future of Artificial Intelligence',
      content: 'Explore the potential impact of artificial intelligence on various industries.',
      image: 'https://via.placeholder.com/300',
      category: 'technical'
    },{
      title: 'Introduction to React Hooks',
      content: 'Learn about the latest feature in React for stateful logic, React Hooks.',
      image: 'https://via.placeholder.com/300',
      category: 'technical'
    },
    {
      title: 'Top 10 JavaScript Frameworks in 2024',
      content: 'Explore the most popular JavaScript frameworks used by developers in 2024.',
      image: 'https://via.placeholder.com/300',
      category: 'technical'
    },
    {
      title: '10 Tips for Effective Remote Work',
      content: 'Discover 10 tips to enhance your productivity while working remotely.',
      image: 'https://via.placeholder.com/300',
      category: 'non-technical'
    },
    {
      title: 'The Future of Artificial Intelligence',
      content: 'Explore the potential impact of artificial intelligence on various industries.',
      image: 'https://via.placeholder.com/300',
      category: 'technical'
    },{
      title: 'Introduction to React Hooks',
      content: 'Learn about the latest feature in React for stateful logic, React Hooks.',
      image: 'https://via.placeholder.com/300',
      category: 'technical'
    },
    {
      title: 'Top 10 JavaScript Frameworks in 2024',
      content: 'Explore the most popular JavaScript frameworks used by developers in 2024.',
      image: 'https://via.placeholder.com/300',
      category: 'technical'
    },
    {
      title: '10 Tips for Effective Remote Work',
      content: 'Discover 10 tips to enhance your productivity while working remotely.',
      image: 'https://via.placeholder.com/300',
      category: 'non-technical'
    },
    {
      title: 'The Future of Artificial Intelligence',
      content: 'Explore the potential impact of artificial intelligence on various industries.',
      image: 'https://via.placeholder.com/300',
      category: 'technical'
    }
  ];

  const filteredPosts = filter === 'all' ? posts : posts.filter(post => post.category === filter);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);


  return (
    <div className="main-content">
      <Container fluid>
        <Row>
          <Col sm={2} className="sidebar-col">
            <Sidebar />
          </Col>
          <Col sm={9}>
            <div className="text-right mb-3 mt-3">
              <Button color="primary" className="mr-3" onClick={() => handleFilter('technical')}>Technical</Button>&nbsp; &nbsp;
              <Button color="primary" className='mr-5' onClick={() => handleFilter('non-technical')}>Non-Technical</Button>
              <Link to='newPost'><Button color="primary" className='float-end'>create post</Button></Link>
            </div>
            {/* <Row>
              {filteredPosts.map((post, index) => (
                <Col key={index} md={4} className="mb-4">
                  <Card>
                    <CardImg top width="100%" src={post.image} alt={post.title} />
                    <CardBody>
                      <CardTitle>{post.title}</CardTitle>
                      <CardText>{post.content}</CardText>
                    </CardBody>
                  </Card>
                </Col>
              ))}
            </Row> */}

        <Row>
              {currentPosts.map((post, index) => (
                <Col key={index} md={4} className="mb-4">
                  {/* <Card>
                    <CardImg top width="100%" src={post.image} alt={post.title} />
                    <CardBody>
                      <CardTitle>{post.title}</CardTitle>
                      <CardText>{post.content}</CardText>
                    </CardBody>
                  </Card> */}
                  <Card  style={{width: '20rem',height:'100%'}}>
                    <CardBody>
                      <CardTitle tag="h5">
                      {post.title}
                      </CardTitle>
                      {/* <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                      >
                        Card subtitle
                      </CardSubtitle> */}
                    </CardBody>
                    <img
                      alt="Card cap"
                      src="https://picsum.photos/318/180"
                      width="100%"
                    />
                    <CardBody>
                      <CardText>
                      {post.content}
                      </CardText>
                      <CardLink href="/Login">
                      <Button color="primary" outline>
                        Read More
                      </Button>
                      </CardLink>
                    </CardBody>
                  </Card>
                </Col>
              ))}
            </Row>
            <div className="d-flex justify-content-center mt-4">
              <Pagination>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNumber => (
                  <PaginationItem key={pageNumber} active={pageNumber === currentPage}>
                    <PaginationLink onClick={() => handlePageChange(pageNumber)}>
                      {pageNumber}
                    </PaginationLink>
                  </PaginationItem>
                ))}
              </Pagination>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const Dashboard = () => {
  return (
    <Base>
      <Body />
    </Base>
  );
};

export default Dashboard;