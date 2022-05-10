import Select from 'react-select';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Col, Modal, ModalHeader, Input } from 'reactstrap';

import coins from '../../common/data/coins';

const FinanceModal = (props) => {
  const dispatch = useDispatch();

  const [coin, setCoin] = useState(null);

  const handleCreateWallet = (res) => {
    const wallet = {
      name: res.name,
      description: res.description,
      coin: res.coin,
      value: res.value,
    };
    dispatch(wallet, props.history);
  };

  const handleCloseModal = () => {
    alert('Modal Fechado');
  };

  function handleSelectCoin(coin) {
    setCoin(coin);
  }
  return (
    <React.Fragment>
      <Modal isOpen={props.isOpen} toggle={props.toggle}>
        <ModalHeader>Adicionar Carteira</ModalHeader>

        <div className='modal-body'>
          <form action='#'>
            <div className='row g-3'>
              <Col xxl={6}>
                <div>
                  <label htmlFor='wallet' className='form-label'>
                    Carteira
                  </label>
                  <Input
                    type='text'
                    className='form-control'
                    id='name'
                    placeholder='Insira o nome da carteira'
                  />
                </div>
              </Col>
              <Col xxl={6}>
                <div>
                  <label htmlFor='description' className='form-label'>
                    Descrição
                  </label>
                  <Input
                    type='textarea'
                    className='form-control'
                    id='description'
                    placeholder='Insira a descrição sobre a carteira'
                  />
                </div>
              </Col>
              <Col md={6}>
                <label className='form-label'>Moeda Principal</label>
                <Select
                  isClearable={true}
                  value={coin}
                  onChange={() => {
                    handleSelectCoin();
                  }}
                  options={coins.map((coin) => {
                    const coinInfo = {
                      value: coin.iso,
                      label: coin.iso,
                    };
                    return coinInfo;
                  })}
                />
              </Col>
              <Col md={6}>
                <div>
                  <label htmlFor='value' className='form-label'>
                    Valor
                  </label>
                  <Input
                    type='number'
                    className='form-control'
                    id='value'
                    placeholder='R$00,00'
                  />
                </div>
              </Col>
              <Col lg={12}>
                <div className='hstack gap-2 justify-content-end'>
                  <Button color='light' onClick={() => handleCloseModal()}>
                    Fechar
                  </Button>
                  <Button color='primary' onClick={() => handleCreateWallet()}>
                    Criar
                  </Button>
                </div>
              </Col>
            </div>
          </form>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default FinanceModal;
