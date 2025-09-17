import { LottieHandler } from "@components/feedback";
import ActAuthLogout from "@store/Auth/Actions/ActAuthLogout";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { addToast } from "@store/Toast/ToastSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const dispatch = useAppDispatch();
  
  const navigate = useNavigate();
  
  const { loading } = useAppSelector(state => state.Authslice);
  

   useEffect(() => {

    dispatch(ActAuthLogout())
      .unwrap()
      .then(() => {
        dispatch(addToast({
          type: "info",
          title: "Logged Out",
          message: "You have been successfully logged out."
        }));

        navigate("/login", { replace: true });
      })
      .catch(() => {
        dispatch(addToast({
          type: "danger",
          title: "Error",
          message: "An error occurred during logout."
        }));
        navigate("/login", { replace: true });
      });
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