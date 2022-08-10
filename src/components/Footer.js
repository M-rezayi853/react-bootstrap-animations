import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import TrackVisibility from 'react-on-screen'

import { MailchimpForm } from './MailchimpForm'
import logo from '../assets/img/logo.svg'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'

export const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row className='align-items-center'>
          <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={
                  isVisible ? 'animate__animated animate__fadeInDown' : ''
                }
              >
                <MailchimpForm />
              </div>
            )}
          </TrackVisibility>

          <Col size={12} sm={6}>
            <img src={logo} alt='logo' />
          </Col>

          <Col ize={12} sm={6} className='text-center text-sm-end'>
            <div className='social-icon'>
              <a href='/'>
                <img src={navIcon1} alt='navIcon1' />
              </a>
              <a href='/'>
                <img src={navIcon2} alt='navIcon2' />
              </a>
              <a href='/'>
                <img src={navIcon3} alt='navIcon3' />
              </a>
            </div>

            <p>CopyRight &copy; 2022, All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
