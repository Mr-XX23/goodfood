import React from "react";

function Footer() {
  return (
    <>
      <footer className="w-100 py-4 flex-shrink-0">
        <div className="container py-4">
          <div className="row gy-4 gx-5">
            <div className="col-lg-4 col-md-6">
              <h5 className="h1 text-white">GOODFOOD.</h5>
              <p className="small text-muted">
                Order food online from hundreds of popular restaurants in
                Kathmandu, Lalitpur, Bhaktapur and Pokhara through our website,
                mobile app or over the phone.
              </p>
              <p className="small text-muted mb-0">
                &copy; Copyrights. GOOD FOOD All rights reserved. @2021
              </p>
              <ul className="list-inline mt-4">
                <li className="list-inline-item">
                  <a href="/" target="_blank" title="twitter">
                    <i className="logo_design fab fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="/" target="_blank" title="facebook">
                    <i className="logo_design fab fa-facebook"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="/" target="_blank" title="instagram">
                    <i className="logo_design fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6">
              <h5 className="text-white mb-3">Our Company</h5>
              <ul className="list-unstyled text-muted">
                <li>
                  <a href="/">GOOD FOOD</a>
                </li>
                <li>
                  <a href="/">About us</a>
                </li>
                <li>
                  <a href="/">Terms & Conditons</a>
                </li>
                <li>
                  <a href="/">FAQ</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6">
              <h5 className="text-white mb-3">Services</h5>
              <ul className="list-unstyled text-muted">
                <li>
                  <a href="/">Find a Restaurants</a>
                </li>
                <li>
                  <a href="/">Order</a>
                </li>
                <li>
                  <a href="/">Offers</a>
                </li>
                <li>
                  <a href="/">Blog</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6">
              <h5 className="text-white mb-3">Newsletter</h5>
              <p className="small text-muted">
                Subscribe for Newletter for instant new updates, new offers and
                Discouts.Most Subcribled Newletter in Nepal
              </p>
              <form action="/">
                <div className="input-group mb-3">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                  />
                  <button
                    className="btn btn-primary"
                    id="button-addon2"
                    type="button"
                  >
                    <i className="fas fa-paper-plane"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
