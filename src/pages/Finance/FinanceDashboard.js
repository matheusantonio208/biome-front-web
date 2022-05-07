import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import BreadCrumb from '../../Components/Common/BreadCrumb';
import Widgets from './Widgets';
import Widgets1 from './Widgets1';
import MyCurrencies from './MyCurrencies';
import MarketGraph from './MarketGraph';
import GoogleMaps from './GoogleMaps';
// import Calender from './Calendar';
import MyFinancePillars from './MyFinancePillars';
import RecentActivity from './RecentActivity';
import Calender from './Calendar';
const Finance = () => {
  document.title = 'Finance | BioME';
  return (
    <React.Fragment>
      <div className='page-content'>
        <Container fluid>
          <BreadCrumb title='Finance' pageTitle='Pages' />
          <Row>
            <Col xs={12}>
              <Row>
                <MyFinancePillars />
                <Col className='col-xxl-9 order-xxl-0 order-first'>
                  <div className='d-flex flex-column h-100'>
                    <Row className='h-100'>
                      <Widgets />
                    </Row>
                    <MarketGraph />
                  </div>
                </Col>
              </Row>
              <Row>
                <Widgets1 />
              </Row>
              <Row>
                <Col xs={8}>
                  <Calender />
                </Col>
                <Col xs={4}>
                  <RecentActivity />
                </Col>
              </Row>
              <Row>
                <Col xs={8}>
                  <MyCurrencies />
                </Col>
                <Col xs={4}>
                  <GoogleMaps />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Finance;
