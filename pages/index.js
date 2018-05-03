import React, { Component } from 'react';
import { Layout } from '../components';

function Index() {
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <p className="header">Convert your speech to score right now</p>
        </div>
        <div className="row">
          <p className="desc">Select a language and click "Start Now" to begin recording</p>
        </div>
        <div className="row">
          <div className="col-sm">
            <div className="input-box">
              <select className="form-control form-control-lg">
                <option>English (United States)</option>
                <option>ไทย (ประเทศไทย)</option>
              </select>
              <button type="button" className="btn btn-primary"><i className="fa fa-microphone" aria-hidden="true" /> START NOW</button>
            </div>
          </div>
          <div className="col-sm">
            <div className="output-box">
              <div className="alert alert-primary" role="alert">
                This is a primary alert—check it out!
              </div>
              <div className="alert alert-secondary" role="alert">
                This is a secondary alert—check it out!
              </div>
              <div className="alert alert-success" role="alert">
                This is a success alert—check it out!
              </div>
              <div className="alert alert-danger" role="alert">
                This is a danger alert—check it out!
              </div>
              <div className="alert alert-warning" role="alert">
                This is a warning alert—check it out!
              </div>
              <div className="alert alert-info" role="alert">
                This is a info alert—check it out!
              </div>
              <div className="alert alert-light" role="alert">
                This is a light alert—check it out!
              </div>
              <div className="alert alert-dark" role="alert">
                This is a dark alert—check it out!
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .header {
          margin-left:auto;
          margin-right:auto;
          text-align: center;
          font-size:1.3rem;
          font-weight:bold;
          color:#606f75;
        }
        .desc{
          margin-left:auto;
          margin-right:auto;
          color:#606f75;
        }
        .input-box{
          width:80%;
          padding:40px;
          background-color:#fff;
          margin:30px auto;
          text-align: center;
          .form-control{
            margin-bottom:30px;
          }
        }
        .btn-primary{
          background-color:#528fe7;
          padding: 0.7em 1em;
          font-weight: bold;
        }
        .fa-microphone{
          font-size: 1.2rem;
          margin-right: 8px;
        }
        .output-box{
          margin:30px auto;
        }
        @media (max-width: 992px) { 
          .page-container {
            padding: 50px 50px 100px 50px;
            width: 100%;
          }
        }
        @media (max-width: 576px) { 
          .page-container {
            padding: 10px 10px 50px 10px;
            width: 100%;
          }
        }
      `}
      </style>
    </Layout>
  );
}

export default Index;
