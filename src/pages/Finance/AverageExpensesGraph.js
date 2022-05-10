import React from 'react';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { BasicBarChart } from './FinanceCharts';

const MarketGraph = () => {
  return (
    <React.Fragment>
      <Row>
        <Col xl={12}>
          <Card>
            <CardHeader className='border-0 align-items-center d-flex'>
              <h4 className='card-title mb-0 flex-grow-1'>Média de Gastos</h4>
              <div className='d-flex gap-1'>
                <button type='button' className='btn btn-soft-secondary btn-sm'>
                  Corpo
                </button>
                <button type='button' className='btn btn-soft-secondary btn-sm'>
                  Mente
                </button>
                <button type='button' className='btn btn-soft-secondary btn-sm'>
                  Espírito
                </button>
                <button type='button' className='btn btn-soft-secondary btn-sm'>
                  Relacionamento
                </button>
                <button type='button' className='btn btn-soft-secondary btn-sm'>
                  Profissional
                </button>
                <button type='button' className='btn btn-soft-secondary btn-sm'>
                  Financeiro
                </button>
                <button type='button' className='btn btn-soft-secondary btn-sm'>
                  Lazer
                </button>
                <button type='button' className='btn btn-soft-primary btn-sm'>
                  Tudo
                </button>
              </div>
            </CardHeader>
            <CardBody className='p-0'>
              <div className='bg-soft-light border-top-dashed border border-start-0 border-end-0 border-bottom-dashed py-3 px-4'>
                <Row className='align-items-center'>
                  <Col xs={6}>
                    <div className='d-flex flex-wrap gap-4 align-items-center'>
                      <h5 className='fs-19 mb-0'>0.014756</h5>
                      <p className='fw-medium text-muted mb-0'>
                        $75.69{' '}
                        <span className='text-success fs-11 ms-1'>+1.99%</span>
                      </p>
                      <p className='fw-medium text-muted mb-0'>
                        High{' '}
                        <span className='text-dark fs-11 ms-1'>0.014578</span>
                      </p>
                      <p className='fw-medium text-muted mb-0'>
                        Low{' '}
                        <span className='text-dark fs-11 ms-1'>0.0175489</span>
                      </p>
                    </div>
                  </Col>
                  <Col xs={6}>
                    <div className='d-flex'>
                      <div className='d-flex justify-content-end text-end flex-wrap gap-4 ms-auto'>
                        <div className='pe-3'>
                          <h6 className='mb-2 text-truncate text-muted'>
                            Total Balance
                          </h6>
                          <h5 className='mb-0'>$72.8k</h5>
                        </div>
                        <div className='pe-3'>
                          <h6 className='mb-2 text-muted'>Profit</h6>
                          <h5 className='text-success mb-0'>+$49.7k</h5>
                        </div>
                        <div className='pe-3'>
                          <h6 className='mb-2 text-muted'>Loss</h6>
                          <h5 className='text-danger mb-0'>-$23.1k</h5>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </CardBody>
            <div className='card-body p-3 pb-3'>
              <div id='Market_chart' className='apex-charts' dir='ltr'>
                <BasicBarChart dataColors='["--vz-success-rgb, 0.75", "--vz-danger-rgb, 0.75"]' />
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default MarketGraph;
