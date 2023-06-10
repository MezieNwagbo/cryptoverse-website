import React from "react";

import { Space, Typography } from "antd";

import {
  Navbar,
  Exchanges,
  Homepage,
  News,
  CryptoDetails,
  Cryptocurrencies,
} from "./Components";

import { Link, Route, Routes } from "react-router-dom";

import "./App.css";
import Layout from "antd/es/layout/layout";
const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>

      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/exchanges" element={<Exchanges />} />
              <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
              <Route path="/crypto/:coinId" element={<CryptoDetails />} />
              <Route path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>

        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            Cryptoverse <br />
            All rights reserved
          </Typography.Title>
          <Space className="footer-links">
            <Link to="/">Home</Link>
            <a href="https://www.chimezienwagbo.com" target="_blank">
              About Developer
            </a>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
