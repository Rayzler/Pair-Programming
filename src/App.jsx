import { Route, Switch } from "wouter";
import Login from "./Login.jsx";
import Home from "./Home.jsx";
import Register from "./Register.jsx";

const App = () => (
    <>
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/" component={Home} />
        </Switch>
    </>
);

export default App;
