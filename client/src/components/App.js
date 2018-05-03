import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

// Browserrouter is "brain" of project. Looks at Url, changes the components accordingly.
// Route sets up a rule for specific routes.

const Header = () => <h2>Header</h2>
const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>
const Landing = () => <h2>Landing</h2>

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route path="/" component={Landing} />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;