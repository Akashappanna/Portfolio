import { Container, Row, Col } from 'react-bootstrap'
// import { MailchimpForm } from './MailchimpForm'
// import logo from '../assets/img/logo.svg'

export const Footer = () => {
  return (
    <footer className="footer" style={{ bottom: '0' }}>
      <Container>
        <Row
          className="align-items-center"
          style={{ justifyContent: 'center' }}
        >
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6} className="text-center text-sm-end">
            <p style={{ textAlign: 'center' }}>
              Copyright 2022. All Rights Reserved
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
