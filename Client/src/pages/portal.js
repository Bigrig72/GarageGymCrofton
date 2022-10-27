import React from "react";
import useAppContext from "../app-context";
import NavBar from "../pages/small-screen-nav";

function Portal(){
const {loggedIn} = useAppContext();

return (
    <>
    <NavBar></NavBar>
    <div style={{background: "black", color: "purple", height: "100vh"}}>
    <h1>Coming Soon!</h1>
    {/* {(!loggedIn ? <div>   Please login to view your portal.</div> : <div> Users Portal, show package, renew options, metrics on progress, their current program</div>)} */}
    </div>
   </>


)
}

export default Portal;