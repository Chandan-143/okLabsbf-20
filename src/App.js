import React from 'react'
// import { BrowserRouter as GrandParent, Routes as Parent , Route as Child, BrowserRouter, } from 'react-router-dom'  // you can change the router name easly
import Home from './pageOfRouter/Home'
import Login from './pageOfRouter/Login'
import Register from './pageOfRouter/Register'
import NotFound from './pageOfRouter/NotFound'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout2 from './pageOfRouter/Layout2'

// import Layout from './components/layout/Layout';
// import Section from './components/layout/Section';

// import './Style.css';
// import Page1 from './pages/page1';
// import Page2 from './pages/page2';

export default function App() {
    return (
        <>

        { // this is some other code 
       /* <Layout>
            <Section>
                <Page1></Page1>
                <Page2></Page2>
            </Section>
        </Layout> */
        }
        {
            // some other code hear

            /*
            <GrandParent>
                <Parent>
                    <Child path="/" element={<Home/>}></Child>
                    <Child path="/login" element={<Login/>}></Child>
                    <Child path="/register" element={<Register/>}></Child>
                    <Child path="/*" element={<NotFound/>}></Child>
    
    
                </Parent>
            </GrandParent>
            */
        }

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout2 />}>
                
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="login" element={<Login/>}></Route>
                    <Route path="register" element={<Register/>}></Route>
                    <Route path="*" element={<NotFound/>}></Route>
                
                </Route>

            </Routes>
        </BrowserRouter>

          

</>
        

    )
}