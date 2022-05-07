import React, { useState } from 'react';
import {
  Button,
  Card,
  CardBody,
  Col,
  Modal,
  ModalHeader,
  Input,
} from 'reactstrap';
import PreviewCardHeader from '../../Components/Common/PreviewCardHeader';

const UiModals = () => {
  const [modal_animationZoom, setmodal_animationZoom] = useState(false);
  function tog_animationZoom() {
    setmodal_animationZoom(!modal_animationZoom);
  }
  const [modal_grid, setmodal_grid] = useState(false);
  function tog_grid() {
    setmodal_grid(!modal_grid);
  }

  return (
    <React.Fragment>
      <Col lg={12}>
        <Card>
          <PreviewCardHeader title='Animation Modals' />
          <CardBody>
            <div className='hstack gap-2 flex-wrap'>
              <Button color='primary' onClick={() => tog_grid()}>
                Zoom In Modal
              </Button>
            </div>
          </CardBody>
        </Card>
      </Col>
      <Modal
        isOpen={modal_grid}
        toggle={() => {
          tog_grid();
        }}
      >
        <ModalHeader>
          Grid Modals
          <Button
            type='button'
            onClick={() => {
              setmodal_grid(false);
            }}
            className='btn-close'
            aria-label='Close'
          ></Button>
        </ModalHeader>
        <div className='modal-body'>
          <form action='#'>
            <div className='row g-3'>
              <Col xxl={6}>
                <div>
                  <label htmlFor='firstName' className='form-label'>
                    First Name
                  </label>
                  <Input
                    type='text'
                    className='form-control'
                    id='firstName'
                    placeholder='Enter firstname'
                  />
                </div>
              </Col>
              <Col xxl={6}>
                <div>
                  <label htmlFor='lastName' className='form-label'>
                    Last Name
                  </label>
                  <Input
                    type='text'
                    className='form-control'
                    id='lastName'
                    placeholder='Enter lastname'
                  />
                </div>
              </Col>
              <Col lg={12}>
                <label className='form-label'>Gender</label>
                <div>
                  <div className='form-check form-check-inline'>
                    <Input
                      className='form-check-input'
                      type='radio'
                      name='inlineRadioOptions'
                      id='inlineRadio1'
                      value='option1'
                    />
                    <label className='form-check-label' htmlFor='inlineRadio1'>
                      Male
                    </label>
                  </div>
                  <div className='form-check form-check-inline'>
                    <Input
                      className='form-check-input'
                      type='radio'
                      name='inlineRadioOptions'
                      id='inlineRadio2'
                      value='option2'
                    />
                    <label className='form-check-label' htmlFor='inlineRadio2'>
                      Female
                    </label>
                  </div>
                  <div className='form-check form-check-inline'>
                    <Input
                      className='form-check-input'
                      type='radio'
                      name='inlineRadioOptions'
                      id='inlineRadio3'
                      value='option3'
                    />
                    <label className='form-check-label' htmlFor='inlineRadio3'>
                      Others
                    </label>
                  </div>
                </div>
              </Col>
              <Col xxl={6}>
                <label htmlFor='emailInput' className='form-label'>
                  Email
                </label>
                <Input
                  type='email'
                  className='form-control'
                  id='emailInput'
                  placeholder='Enter your email'
                />
              </Col>
              <Col xxl={6}>
                <label htmlFor='passwordInput' className='form-label'>
                  Password
                </label>
                <Input
                  type='password'
                  className='form-control'
                  id='passwordInput'
                  value='451326546'
                  readOnly
                />
              </Col>
              <Col lg={12}>
                <div className='hstack gap-2 justify-content-end'>
                  <Button color='light' onClick={() => setmodal_grid(false)}>
                    Close
                  </Button>
                  <Button color='primary'>Submit</Button>
                </div>
              </Col>
            </div>
          </form>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default UiModals;
