import React from 'react'
// import { BrowserRouter as Router , Switch, Route } from 'react-router-dom'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login, Register, Home, CreateBlog, DetailBlog } from '../../pages';
import Error404 from '../../pages/404';

const Rutenya = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register />} />
                <Route path="/create-blog" element={<CreateBlog />}>
                    <Route path=":id" element={<CreateBlog />} />
                </Route>
                
                <Route path="/detail-blog/:id" element={<DetailBlog />} />

                <Route path="*" element={<Error404 />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Rutenya
