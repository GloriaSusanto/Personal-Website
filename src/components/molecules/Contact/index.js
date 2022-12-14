import React from 'react'

export const Contact = () => {
  return (
    <section id="contact" className="s-contact target-section">
  <div className="row s-contact__header">
    <div className="column large-12">
      <h3 className="section-header-allcaps">Say Hello</h3>
    </div>
  </div>
  <div className="row s-contact__content">
    <div className="column large-4 medium-12">
      <div className="row contact-infos">
        <div className="column large-12 medium-6 tab-12">
          <div className="contact-block">
            <h5 className="contact-block__header">
              Email
            </h5>
            <p className="contact-block__content">
              <a className="mailtoui" href="mailto:sugarcomb08@gmail.com">sugarcomb08@gmail.com</a>
            </p>
          </div> 
        </div>
        <div className="column large-12 medium-6 tab-12">
          <div className="contact-block">
            <h5 className="contact-block__header">
              Phone
            </h5>
            <p className="contact-block__content">
              <a href="tel:+628991699438">+628991699438</a>
            </p>
          </div> 
        </div>
        <div className="column large-12">
          <a href="mailto:sugarcomb08@gmail.com" className="mailtoui btn btn--primary h-full-width">Let's Talk</a>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}
