import React, { Component } from 'react'
import { FaEnvelope, FaPhone } from 'react-icons/fa'

import './Contact.css'

import Footer from '../Footer'
import Navigation from '../Navigation'

const hide = (classes, show) => classes + (show ? '' : ' hidden')
const initialState = {
  failure: false,
  duplicate: false,
  success: false,
  sending: false,
  lastPayload: {},
}

class Contact extends Component {
  constructor() {
    super()
    this.state = initialState
    this.onSubmit = this.onSubmit.bind(this)
    this.getPayload = this.getPayload.bind(this)
    this.onSubmitDuplicate = this.onSubmitDuplicate.bind(this)
    this.setSending = this.setSending.bind(this)
    this.sendPayload = this.sendPayload.bind(this)
    this.onSubmitSuccess = this.onSubmitSuccess.bind(this)
    this.onSubmitFail = this.onSubmitFail.bind(this)
  }
  onSubmit() {
    let payload = this.getPayload()
    if (JSON.stringify(payload) === JSON.stringify(this.state.lastPayload)) {
      this.onSubmitDuplicate()
      return
    }
    if (JSON.stringify(payload) === JSON.stringify({ email: '', tel: '', subject: '', body: '' })) {
      return
    }
    this.setSending()
    this.sendPayload(payload)
  }
  getPayload() {
    return {
      email: this.inputEmail.value,
      tel: this.inputTel.value,
      subject: this.inputSubject.value,
      body: this.textareaBody.value,
    }
  }
  onSubmitDuplicate() {
    this.setState(state => ({
      ...state,
      duplicate: true,
    }))
  }
  setSending() {
    this.setState(state => ({
      ...initialState,
      sending: true,
    }))
  }
  sendPayload(payload) {
    let { REACT_APP_BACKEND_URL: url } = process.env
    fetch(url, { method: 'POST', body: payload })
      .then(this.onSubmitSuccess, this.onSubmitFail)
  }
  onSubmitSuccess() {
    this.setState(() => ({
      ...initialState,
      success: true,
      lastPayload: this.getPayload(),
    }))
  }
  onSubmitFail() {
    this.setState(() => ({
      ...initialState,
      failure: true,
    }))
  }
  render() {
    const { failure, duplicate, success, sending } = this.state
    return (
      <div className='atlasbg fullheight'>
        <Navigation />
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-sm-12 col-md-6 col-md-offset-3 form-container clearfix'>
              <h1>Contact Us</h1>
              <br />
              <div className={hide('alert alert-danger', failure)}>
                There was an error sending your inquiry. You can try again
                later or send an email directly to&nbsp;
                <a href='mailto:jtyler_@outlook.com'>jtyler_@outlook.com</a>.
              </div>
              <div className={hide('alert alert-warning', duplicate)}>
                You already sent that message. It won't be sent again, but feel
                free to send a new message if you'd like.
              </div>
              <div className={hide('alert alert-success', success)}>
                Your inquiry was sent! We'll get back to you as soon as possible.
              </div>
              <div className='input-group'>
                <span className='input-group-addon' id='email-addon'><FaEnvelope /> Email</span>
                <input
                  type='email'
                  className='form-control'
                  id='inputEmail'
                  aria-describedby='email-addon'
                  ref={e => this.inputEmail = e}
                />
              </div>
              <div className='input-group'>
                <span className='input-group-addon' id='tel-addon'><FaPhone /> Phone</span>
                <input
                  type='tel'
                  className='form-control'
                  id='inputTel'
                  aria-describedby='tel-addon'
                  ref={e => this.inputTel = e}
                />
              </div>
              <div className='input-group'>
                <span className='input-group-addon' id='subject-addon'>Subject</span>
                <input
                  type='text'
                  className='form-control'
                  id='inputSubject'
                  aria-describedby='subject-addon'
                  ref={e => this.inputSubject = e}
                />
              </div>
              <div className='input-group'>
                <textarea
                  className='form-control'
                  id='textareaBody'
                  rows='5'
                  ref={e => this.textareaBody = e}
                />
              </div>
              <button onClick={this.onSubmit} className='btn pull-right'>
                {sending ? 'Sending...' : 'Send'}
              </button>
            </div>
          </div>
        </div>
        <Footer className='bottom' />
      </div>
    )
  }
}

export default Contact
