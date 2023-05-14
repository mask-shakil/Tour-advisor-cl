import React from "react";

const Footer = () => {
  return (
    <div className="mt-5">
      <footer class="bg-dark text-light">
        <div class="container mt-5">
          <div class="row ">
            <div class="col-md-4 mt-5">
              <h5>About Us</h5>
              <p>
                We are a company that provides high-quality products and
                services to our customers.
              </p>
            </div>
            <div class="col-md-4 mt-5">
              <h5>Contact Us</h5>
              <p>Email: info@example.com</p>
              <p>Phone: 123-456-7890</p>
              <p>Address: 123 Main St, Anytown USA</p>
            </div>
            <div class="col-md-4 mt-5">
              <h5>Follow Us</h5>
              <ul class="list-inline">
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fab fa-facebook fa-lg"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fab fa-twitter fa-lg"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fab fa-instagram fa-lg"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <div class="row">
            <div class="col-md-12">
              <p class="text-center">
                &copy; 2023 Example Company. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
