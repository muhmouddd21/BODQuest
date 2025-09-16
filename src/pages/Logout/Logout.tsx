import { LottieHandler } from "@components/feedback";
import ActAuthLogout from "@store/Auth/Actions/ActAuthLogout";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const dispatch = useAppDispatch();
  
  const navigate = useNavigate();
  
  const { loading } = useAppSelector(state => state.Authslice);
  

  useEffect(() => {

    dispatch(ActAuthLogout());

    const timer = setTimeout(() => {
      navigate("/login",{ replace: true });
    }, 2000); 
    
    return () => clearTimeout(timer);
    
  }, [dispatch, navigate]);

  return (
    <>
      {loading === "pending" && (
        <LottieHandler type="loading" message="Logging out..." />
      )}
    </>
  );
};

export default Logout;