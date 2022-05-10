import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Select from 'react-select';
import { Button, Col, Modal, ModalHeader, Input, Label } from 'reactstrap';
import FeatherIcon from 'feather-icons-react';
import FinanceModal from '../Finance/FinanceModal';

const ActionsButtons = () => {
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

  // open offcanvas
  const [modal_grid, setmodal_grid] = useState(false);
  function tog_grid() {
    setmodal_grid(!modal_grid);
  }
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
          <FinanceModal
            isOpen={modal_grid}
            toggle={() => {
              tog_grid();
            }}
          />
        </div>
      </div>
    </React.Fragment>
  );
};
export default ActionsButtons;
