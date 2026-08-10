function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <form method="post">
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div>
          <label htmlFor="subject">Subject</label>
          <select id="subject" name="subject">
            <option value="general">General Inquiry</option>
            <option value="collaboration">Collaboration</option>
            <option value="job">Job Opportunity</option>
          </select>
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            required
            minLength="10"
          ></textarea>
        </div>

        <div>
          <input type="checkbox" id="subscribe" name="subscribe" />
          <label htmlFor="subscribe">Subscribe to updates</label>
        </div>

        <fieldset>
          <legend>Preferred contact method</legend>

          <input
            type="radio"
            id="contact-email"
            name="contactMethod"
            value="email"
          />
          <label htmlFor="contact-email">Email</label>

          <input
            type="radio"
            id="contact-phone"
            name="contactMethod"
            value="phone"
          />
          <label htmlFor="contact-phone">Phone</label>
        </fieldset>

        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;