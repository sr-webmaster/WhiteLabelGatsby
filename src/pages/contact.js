import React from 'react'
import '../scss/_contact.scss'
//import '../scss/index/index.scss'
//import * as Index from '../pageParts/index'

export default () => (
  <div className="contact">
    <section>
      <div className="container">
        <div className="containerLeft">
          <h1>Get in touch.</h1>

          <form name="contact-form" method="post" data-netlify="true" data-netlify-honeypot="bot-field" action="/thankyou">
                <input type="hidden" name="form-name" value="contact" />
                <input name="name" required="true" placeholder="*Full Name" type="text" /><br />
                <input name="company" required="true" placeholder="*Company" type="text" /><br />
                <input name="website" placeholder="Website" type="text" /><br />
                <hr></hr>
                <div className="help"><h2>How can we help?</h2></div>
                <input id="checkbox" type="checkbox" name="help1" value="Become a vendor" />Become a vendor (sell to us)<br />
                <input id="checkbox" type="checkbox" name="help2" value="Become a client" />Become a client (buy from us)<br />
                <input id="checkbox" type="checkbox" name="help3" value="Press" />Press (write about us)<br />
                <input id="checkbox" type="checkbox" name="help4" value="Careers" />Careers (work with us)<br />
                <input id="checkbox" type="checkbox" name="help5" value="Other" />Other<br />
                <input name="other" placeholder="If you answered other above.." type="text" /><br />
                <hr></hr>
                <div className="interests"><h2>What types of products are you interested in?</h2></div>
                <input id="checkbox" type="checkbox" name="interests1" value="Full Package Production" />Full Package Production<br />
                <input id="checkbox" type="checkbox" name="interests2" value="Contract Embellishment" />Contract Embellishment<br />
                <input id="checkbox" type="checkbox" name="interests3" value="Warehousing & Fulfillment" />Warehousing & Fulfillment<br />
                <input id="checkbox" type="checkbox" name="interests4" value="Promotional Merchandise" />Promotional Merchandise<br />
                <input id="checkbox" type="checkbox" name="interests5" value="Other" />Other<br />
                <input name="other" placeholder="If you answered other above.." type="text" /><br />
                <hr></hr>
                <div className="emailinput"><input name="email" required="true" placeholder="*Email Address" type="email" /></div><br />
                <input name="phone" placeholder="Phone number" type="text" /><br />
                <textarea name="message" placeholder="*Tell us a little about how we can help" required="true" rows="5" /><br />
                <p><div data-netlify-recaptcha="true"></div>
                </p>
                <button>Send</button>
          </form>
        </div>
        </div>
    </section>
  </div>
)
