import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Col, Modal, ModalHeader, Input } from 'reactstrap';
import FeatherIcon from 'feather-icons-react';

const RightSidebar = () => {
  const dispatch = useDispatch();
  const {
    layoutType,
    leftSidebarType,
    layoutModeType,
    layoutWidthType,
    layoutPositionType,
    topbarThemeType,
    leftsidbarSizeType,
    leftSidebarViewType,
    // resetValue
  } = useSelector((state) => ({
    layoutType: state.Layout.layoutType,
    leftSidebarType: state.Layout.leftSidebarType,
    layoutModeType: state.Layout.layoutModeType,
    layoutWidthType: state.Layout.layoutWidthType,
    layoutPositionType: state.Layout.layoutPositionType,
    topbarThemeType: state.Layout.topbarThemeType,
    leftsidbarSizeType: state.Layout.leftsidbarSizeType,
    leftSidebarViewType: state.Layout.leftSidebarViewType,
    // resetValue: state.Layout,
  }));

  const [modal_animationZoom, setmodal_animationZoom] = useState(false);
  function tog_animationZoom() {
    setmodal_animationZoom(!modal_animationZoom);
  }
  const [modal_grid, setmodal_grid] = useState(false);
  function tog_grid() {
    setmodal_grid(!modal_grid);
  }

  // open offcanvas
  const [open, setOpen] = useState(true);
  const toggleModal = () => {
    setOpen(!open);
  };

  window.onscroll = function () {
    scrollFunction();
  };

  const scrollFunction = () => {
    const element = document.getElementById('back-to-top');
    if (element) {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        element.style.display = 'block';
      } else {
        element.style.display = 'none';
      }
    }
  };

  const toTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <React.Fragment>
      <button
        onClick={() => toTop()}
        className='btn btn-danger btn-icon'
        id='back-to-top'
      >
        <i className='ri-arrow-up-line'></i>
      </button>
      <div>
        <div className='customizer-setting d-none d-md-block'>
          <div
            onClick={tog_grid}
            className='btn-primary btn-rounded shadow-lg btn btn-icon btn-lg p-2'
          >
            <FeatherIcon icon='plus' />
          </div>
        </div>
      </div>
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

export default RightSidebar;
