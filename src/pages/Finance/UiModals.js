import React, { useState } from 'react';
import { Button, Card, CardBody, Col, Modal, ModalHeader } from 'reactstrap';
import PreviewCardHeader from '../../Components/Common/PreviewCardHeader';
import { AnimationModalExample } from './UiModalCode';

const UiModals = () => {
  const [modal_animationZoom, setmodal_animationZoom] = useState(false);
  function tog_animationZoom() {
    setmodal_animationZoom(!modal_animationZoom);
  }

  document.title = 'Modals | Velzon - React Admin & Dashboard Template';
  return (
    <React.Fragment>
      <Col lg={12}>
        <Card>
          <PreviewCardHeader title='Animation Modals' />
          <CardBody>
            <div className='live-preview'>
              <div>
                <div className='hstack gap-2 flex-wrap'>
                  <Button color='primary' onClick={() => tog_animationZoom()}>
                    Zoom In Modal
                  </Button>
                </div>
              </div>
            </div>
            <div className='d-none code-view'>
              <pre className='language-markup' style={{ height: '275px' }}>
                <code>
                  <AnimationModalExample />
                </code>
              </pre>
            </div>
          </CardBody>
        </Card>
      </Col>
      {/* ZoomIn Animation */}
      <Modal
        id='flipModal'
        isOpen={modal_animationZoom}
        toggle={() => {
          tog_animationZoom();
        }}
        modalClassName='zoomIn'
        centered
      >
        <ModalHeader>Modal Heading</ModalHeader>
        <div className='modal-body'>
          <h5 className='fs-16'>Overflowing text to show scroll behavior</h5>
          <p className='text-muted'>
            One morning, when Gregor Samsa woke from troubled dreams, he found
            himself transformed in his bed into a horrible vermin. He lay on his
            armour-like back, and if he lifted his head a little he could see
            his brown belly, slightly domed and divided by arches into stiff
            sections.
          </p>
          <p className='text-muted'>
            The bedding was hardly able to cover it and seemed ready to slide
            off any moment. His many legs, pitifully thin compared with the size
            of the rest of him, waved about helplessly as he looked. "What's
            happened to me?" he thought.
          </p>
        </div>
        <div className='modal-footer'>
          <Button
            color='light'
            onClick={() => {
              tog_animationZoom();
            }}
          >
            Close
          </Button>
          <Button color='primary'> Save changes </Button>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default UiModals;
