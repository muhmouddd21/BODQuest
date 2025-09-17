
import { Col, Container, Row,Spinner } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { SubmitHandler,useForm } from 'react-hook-form';
import { signUpSchema, signUpType } from '@validations/signUpSchema';
import { zodResolver } from "@hookform/resolvers/zod";
import Input from '@components/forms/Input/Input';
import useCheckEmailForAvailability from '@hooks/useCheckEmailForAvailability';
import { useAppDispatch, useAppSelector } from '@store/hooks';

import { useNavigate } from 'react-router-dom';
import ActAuthRegister from '@store/Auth/Actions/ActAuthRegister';
import { addToast } from '@store/Toast/ToastSlice';


export default function Register() {
  const dispatch = useAppDispatch();
  const {loading,error}=useAppSelector(state=> state.Authslice)
  const navigate = useNavigate();

      const {
        register,
        handleSubmit,
        formState: { errors },
        getFieldState,
        trigger,

      } = useForm<signUpType>({
        mode:"onBlur",
        resolver:zodResolver(signUpSchema)
      });

    
const {emailAvailabilityStatus,enteredEmail,checkEmailAvailability,resetEmailAvailability} =useCheckEmailForAvailability();
const submitForm:SubmitHandler<signUpType> =(data) =>{
    const { firstName, lastName, email, password } = data;
    dispatch(ActAuthRegister({firstName, lastName, email, password}))
    .unwrap()
    .then(()=>{
      dispatch(addToast({
        type: "success",
        title: "Account Created",
        message: "Your account has been created successfully."
      }));
      navigate("/login");
    })
  
}
const emailOnBlurHandler =async (e:React.FocusEvent<HTMLInputElement>)=>{
  await trigger('email');
  const {invalid,isDirty}=getFieldState('email');
  const value = e.target.value;
  if(!invalid && isDirty && value !== enteredEmail){
    checkEmailAvailability(value)
  }
  if(enteredEmail && isDirty && invalid){
    resetEmailAvailability();
  }
  
}


  return (
 <Container
    fluid
    className="d-flex justify-content-center align-items-center vh-100"
  >
    <Row className="w-100">
      <Col md={{ span: 4, offset: 4 }}>
        <div className="p-4 shadow-lg rounded bg-white">
          <Form onSubmit={handleSubmit(submitForm)}>
            <Input
              label="First Name"
              name="firstName"
              register={register}
              error={errors.firstName?.message}
            />

            <Input
              label="Last Name"
              name="lastName"
              register={register}
              error={errors.lastName?.message}
            />

            <Input
              label="Email Address"
              name="email"
              register={register}
              error={
                errors.email?.message
                  ? errors.email?.message
                  : emailAvailabilityStatus === "notAvailable"
                  ? "This email is already in use."
                  : emailAvailabilityStatus === "failed"
                  ? "Error from the server."
                  : ""
              }
              onBlur={emailOnBlurHandler}
              success={
                emailAvailabilityStatus === "available"
                  ? "This email is available for use."
                  : ""
              }
              formText={
                emailAvailabilityStatus === "checking"
                  ? "We're currently checking the availability of this email address. Please wait a moment."
                  : ""
              }
              disabled={emailAvailabilityStatus === "checking"}
            />

            <Input
              label="Password"
              name="password"
              type="password"
              register={register}
              error={errors.password?.message}
            />

            <Input
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              register={register}
              error={errors.confirmPassword?.message}
            />

            <Button
              variant="info"
              type="submit"
              className="text-light mt-2"
              style={{ width: "100%" }}
              disabled={emailAvailabilityStatus === "checking"}
            >
              {loading === "pending" ? (
                <>
                  <Spinner animation="border" size="sm" /> Loading...
                </>
              ) : (
                "Submit"
              )}
            </Button>

            {error && (
              <p style={{ color: "#DC3545", marginTop: "10px" }}>{error}</p>
            )}
          </Form>
        </div>
      </Col>
    </Row>
  </Container>

   
    
     

  )
}