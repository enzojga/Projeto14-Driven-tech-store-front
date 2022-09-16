import MainPage from "./MainPage"
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./sign-in/SignIn.js";
import SignUp from "./sign-up/SignUp.js";
import UserContext from "../contexts/userContext";

export default function App(){


    const [users, setUsers] = useState([]);
    
    return (
        <UserContext.Provider value={{users, setUsers}}>
        <BrowserRouter>
		
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/sign-up/" element={<SignUp/>}/>
                <Route path="/sign-in/" element={<SignIn />}/>
			</Routes>
		</BrowserRouter>
        </UserContext.Provider>
    )
}
      
    