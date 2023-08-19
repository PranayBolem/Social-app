import Home from "./pages/home/Home";
// import Profile from "./pages/home/profile/Profile";
import { ClerkProvider, SignedIn, SignedOut, SignIn, UserButton } from "@clerk/clerk-react";
import "./app.css"

if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

function App() {
  
  return (
    <>
    <ClerkProvider publishableKey={clerkPubKey}>
      <SignedIn>
        <UserButton/>
        <Home />
      </SignedIn>
      <SignedOut>
        <h1 className="Auth">Have to signback in bro!</h1>
        <SignIn className="Authbox"/>
      </SignedOut>
    </ClerkProvider>
    </>
  )
}

export default App;
