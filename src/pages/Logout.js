import React , { useEffect } from 'react'
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { removeEmail } from "../redux/emailSlice";

function Logout() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

  const handleLogout = async () => {
    // e.preventDefault();
    dispatch(removeEmail());
    localStorage.clear()
    navigate("/");
    
  };

  useEffect(() => {
    handleLogout();
});

  return (
    <div>

    </div>
  )
}

export default Logout