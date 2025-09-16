import {  NavLink, useSearchParams } from 'react-router-dom';
import { Container, Card } from 'react-bootstrap';
import { CheckCircle, XCircle, ArrowLeft } from 'lucide-react';

import LottieHandler from '@components/feedback/LottieHandler/LottieHandler';
import useGetTodoById from '@hooks/useGetTodoById';


const TodoDetails = () => {
  const [searchParams] = useSearchParams();

  const id = searchParams.get("id") as string;
  const paramType = searchParams.get("type") as string;
  const paramKey = searchParams.get("key") as string;


  const { data: todo, isLoading, isError } = useGetTodoById(
    +id,
    paramType,
    paramKey
  );


  if (isLoading) return <LottieHandler type="loading" message="Loading Todo..." />;
  if (isError || !todo) return <LottieHandler type="error" message="Could not load todo." />;


  return (
    <Container className="my-5">
      <div className="d-flex align-items-center mb-4">
        <NavLink to="/todos" className="btn btn-outline-secondary">
        <ArrowLeft size={20} className="me-2" /> Back to List
        </NavLink>
      </div>

      <h1 className="mb-4 text-primary">{todo.title}</h1>
      
      <Card className="shadow-lg border-0">
        <Card.Header className="d-flex align-items-center bg-light">
          {todo.completed ? (
            <CheckCircle size={20} className="me-2 text-success" />
          ) : (
            <XCircle size={20} className="me-2 text-danger" />
          )}
          <span className="fw-bold">
            Status: {todo.completed ? 'Completed' : 'Pending'}
          </span>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <strong>User ID:</strong> {todo.userId}
          </Card.Text>
          <Card.Text>
            <strong>Todo ID:</strong> {todo.id}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default TodoDetails;