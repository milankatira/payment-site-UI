import React from "react";

const Header = () => {
  return (
    <>
      <header>
        <section className="container main-hero-container">
          <div className="row">
            <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start ">
              <h1 className="display-2">
                India's Most-loved <br /> Payments App
              </h1>
              <p className="main-hero-para">
                Recharge & pay bills, book flights & movie tickets, open a savings account, invest in stocks & mutual funds, and do a lot more.
              </p>
              <h3>Get early access for you</h3>
              <div className="input-group mt-3">
                <input
                  type="text"
                  className="rounded-pill w-50  w-lg-75 me-3 p-2 form-control-text"
                  placeholder="Enter Your Email"
                />
                <div className="input-group-button">Get it now</div>
              </div>
            </div>
            {/*  --------------- main header right side--------------  */}
            <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images">
              <img
                src="https://images.unsplash.com/photo-1556742077-0a6b6a4a4ac4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGF5bWVudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                alt="heroimg"
                className="img-fluid"
              />
              <img
                src="https://images.unsplash.com/photo-1587906697341-bfbde76785c7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGF5bWVudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                alt="heroimg4"
                className="img-fluid main-hero-img2"
              />
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
