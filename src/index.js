import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Header from './container/header';
import Dash from './companents/dash';
import Dash1 from './companents/dash1';
import Dash2 from './companents/dash2';
import Dashbord from './companents/dashbord';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dash/>}>
          <Route path="blogs" element={<Dash1/>} />
          <Route path="contact" element={<Dash2/>} />
          <Route path="contactqa" element={<Dashbord/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 <Header/>
 <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
