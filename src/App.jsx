import Home from "./pages/home/Home";
import Profile from "./pages/home/profile/Profile";
import { ClerkProvider, SignedIn, SignedOut, SignIn } from "@clerk/clerk-react";
import "./app.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

function App() {
  
  return (
    <>
      <ClerkProvider publishableKey={clerkPubKey}>
        <SignedIn>
        <Router>
        <Routes>
          
            <Route exact path="/" element={<Home />} />
            <Route path="/profile" element={<Profile/>} />

        </Routes>
        </Router>
        </SignedIn>

        <SignedOut>
          <h1 className="Auth">Have to signback in!</h1>
          <SignIn className="Authbox"/>
        </SignedOut>
      </ClerkProvider> 
    </>
  )
}

export default App;
