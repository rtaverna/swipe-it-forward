import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { auth } from "../store";

/**
 * COMPONENT
 */
const AuthForm = props => {
  const { name, displayName, handleSubmit, error } = props;

  return (
    <div>
      <form className="authform" onSubmit={handleSubmit} name={name}>
        <div>
          <label htmlFor="email">
            <small>Email</small>
          </label>
          <input name="email" type="text" />
        </div>
        <div>
          <label htmlFor="password">
            <small>Password</small>
          </label>
          <input name="password" type="password" />
        </div>
        <div>
          <button type="submit">{displayName}</button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
      <div className="container">
        <div className="sticky">
          <div className="title">About</div>
          <div>
            Welcome to Swipe It Forward, the first free ride sharing service for
            New Yorkers. We function by connecting generous owners of unlimited
            metrocards with those who cannot afford the subway. Unlimited
            Metrocards can be (legally!) swiped as many times as you want, and
            there is NO RULE AGAINST sharing them. However, their $135/month
            pricetag can be quite prohibitive. The MTA has recently stepped up
            their fare evasion enforcement. This has been heavily criticized as
            being too forceful, as well as discriminatory. Making an account
            with us offers you the opportunity to either offer free rides to
            those in need, or request them yourself. Swipe it Forward!
          </div>
        </div>
        <div className="pics">
          <img src="https://cdn.vox-cdn.com/thumbor/UlNINbSDs2keGxrZPcUYw5yBD-8=/0x0:3100x2067/920x613/filters:focal(1955x161:2451x657):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/65646157/1179423166.jpg.0.jpg" />
          <img src="https://dazedimg-dazedgroup.netdna-ssl.com/696/azure/dazed-prod/1270/9/1279155.jpg" />
          <img src="https://www.aljazeera.com/mritems/imagecache/mbdxxlarge/mritems/Images/2019/12/6/8e7b90cba5ac459f92ad87b7ff08b783_18.jpg" />
        </div>
        <div className="sticky">
          <div className="title">Learn More</div>
          <div>
            If you want to know more about our cause and what else you can do to
            help, check out these resources below:
          </div>

          <div className="list">
            <div>
              <a href="https://www.thedailybeast.com/behind-the-subway-arrests-controversy-roiling-new-york-city">
                Fare Evasion Arrests up 50%
              </a>
            </div>
            <div>
              <a href="https://www.nyclu.org/en/know-your-rights/what-do-if-youre-stopped-police">
                Know Your Rights
              </a>
            </div>
            <div>
              <a href="https://www1.nyc.gov/site/fairfares/index.page">
                Half Price rides for Low Income New Yorkers
              </a>
            </div>
            <div>
              <a href="https://nyc.streetsblog.org/2019/11/14/mta-will-spend-249m-on-new-cops-to-save-200m-on-fare-evasion/">
                MTA Will Spend $249M On New Cops to Save $200M on Fare Evasion
              </a>
            </div>
            <div>
              <a href="https://www.wnyc.org/story/can-i-get-swipe-can-we-get-trouble/">
                FAQ: Legality
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = state => ({
  name: "login",
  displayName: "Login",
  error: state.user.error
});

const mapSignup = state => ({
  name: "signup",
  displayName: "Sign Up",
  error: state.user.error
});

const mapDispatch = dispatch => ({
  handleSubmit(evt) {
    evt.preventDefault();
    const formName = evt.target.name;
    const email = evt.target.email.value;
    const password = evt.target.password.value;
    dispatch(auth(email, password, formName));
  }
});

export const Login = connect(mapLogin, mapDispatch)(AuthForm);
export const Signup = connect(mapSignup, mapDispatch)(AuthForm);

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
};
