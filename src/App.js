import { BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

// setup route components
const Home = lazy(() => import('./routes/Home'));
const Contact = lazy(() => import('./routes/Contact'));
const Resume = lazy(() => import('./routes/Resume'));

// setup navigation
const nav = [
  { label: 'Work', path: '/' },
  { label: 'Contact', path: '/contact' },
  { label: 'CV', path: '/resume' },
];

// do the boogie!
function App() {
  return (
    <Router>
      <div className="px-16 py-24 flex flex-col">
        <div className="w-full max-w-7xl mx-auto">

          {/* header */}
          <div className="flex justify-start items-center mb-32">

            <div class="w-12 h-12 rounded-full bg-indigo-100 bg-cover bg-center mr-4"
            style={{ backgroundImage: `url(${require('./assets/avatar-1.jpg')})` }}></div>

            <h1 className="leading-none font-sans text-4xl font-bold mr-auto">G'day</h1>

            { nav.map(function(navItem) {
                return (
                  <NavLink
                    exact
                    to={navItem.path}
                    activeClassName="border-indigo-500 text-gray-900"
                    className="text-xl border-b-2 border-transparent text-gray-400 pb-2 ml-6 capitalize font-sans">
                    {navItem.label}
                  </NavLink>
                )
              }
            )}
          </div>

          {/* routes */}
          <Suspense fallback={<div>one moment please..</div>}>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/resume" component={Resume}/>
              <Route path="/contact" component={Contact}/>
              <Route>
                <h1 className="text-3xl font-sans font-bold mb-3">
                  <span role="img" aria-label="emoji">🕵🏼</span> HEYO! FOURZER04!%2&^@
                </h1>
                <p className="text-lg">You found something that didn't exist! What a delightful paradox.</p>
              </Route>
            </Switch>
          </Suspense>

        </div>
      </div>
    </Router>
  );
}

export default App;
