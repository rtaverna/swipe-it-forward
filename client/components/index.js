/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export { default as Navbar } from "./navbar";
export { default as Swipe } from "./swipe";
export { default as StationMenu } from "./station-menu";
export { default as Ride } from "./ride";
export { default as UserHome } from "./user-home";
export { default as Home } from "./home";
export { default as PastRide } from "./past-ride";
export { default as About} from "./about"


export { default as Logins } from "./login-form";
export { Login, Signup } from "./auth-form";
