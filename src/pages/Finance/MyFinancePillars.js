import React from 'react';
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from 'reactstrap';

//import Images
import btc from '../../assets/images/svg/crypto-icons/btc.svg';

import { SimpleRadar } from './FinanceCharts';

const MyFinancePillars = () => {
  return (
    <React.Fragment>
      <div className='col-xxl-3'>
        <div className='card card-height-100'>
          <div className='card-header border-0 align-items-center d-flex'>
            <h4 className='card-title mb-0 flex-grow-1'>Pilares</h4>
            <div>
              <UncontrolledDropdown direction='start'>
                <DropdownToggle
                  tag='button'
                  className='btn btn-soft-primary btn-sm'
                >
                  <span className='text-uppercase'>
                    Mês
                    <i className='mdi mdi-chevron-down align-middle ms-1'></i>
                  </span>
                </DropdownToggle>
                <DropdownMenu className='dropdown-menu dropdown-menu-end'>
                  <DropdownItem>Mês</DropdownItem>
                  <DropdownItem>Semestre</DropdownItem>
                  <DropdownItem>Ano</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
          </div>
          <div className='card-body'>
            <div id='portfolio_donut_charts' className='apex-charts' dir='ltr'>
              <SimpleRadar dataColors='["--vz-primary", "--vz-info", "--vz-warning", "--vz-success"]' />
            </div>

            <ul className='list-group list-group-flush border-dashed mb-0 mt-3 pt-2'>
              <li className='list-group-item px-0'>
                <div className='d-flex'>
                  <div className='flex-shrink-0 avatar-xs'>
                    <span className='avatar-title bg-light p-1 rounded-circle'>
                      <img src={btc} className='img-fluid' alt='' />
                    </span>
                  </div>
                  <div className='flex-grow-1 ms-2'>
                    <h6 className='mb-1'>Corpo</h6>
                    <p className='fs-12 mb-0 text-muted'>
                      <i className='mdi mdi-circle fs-10 align-middle text-primary me-1'></i>
                      Mês
                    </p>
                  </div>
                  <div className='flex-shrink-0 text-end'>
                    <h6 className='mb-1'>$19,405.12</h6>
                    <p className='text-success fs-12 mb-0'>$19,405.12</p>
                  </div>
                </div>
              </li>
              <li className='list-group-item px-0'>
                <div className='d-flex'>
                  <div className='flex-shrink-0 avatar-xs'>
                    <span className='avatar-title bg-light p-1 rounded-circle'>
                      <img src={btc} className='img-fluid' alt='' />
                    </span>
                  </div>
                  <div className='flex-grow-1 ms-2'>
                    <h6 className='mb-1'>Corpo</h6>
                    <p className='fs-12 mb-0 text-muted'>
                      <i className='mdi mdi-circle fs-10 align-middle text-primary me-1'></i>
                      Mês
                    </p>
                  </div>
                  <div className='flex-shrink-0 text-end'>
                    <h6 className='mb-1'>$19,405.12</h6>
                    <p className='text-success fs-12 mb-0'>$19,405.12</p>
                  </div>
                </div>
              </li>
              <li className='list-group-item px-0'>
                <div className='d-flex'>
                  <div className='flex-shrink-0 avatar-xs'>
                    <span className='avatar-title bg-light p-1 rounded-circle'>
                      <img src={btc} className='img-fluid' alt='' />
                    </span>
                  </div>
                  <div className='flex-grow-1 ms-2'>
                    <h6 className='mb-1'>Corpo</h6>
                    <p className='fs-12 mb-0 text-muted'>
                      <i className='mdi mdi-circle fs-10 align-middle text-primary me-1'></i>
                      Mês
                    </p>
                  </div>
                  <div className='flex-shrink-0 text-end'>
                    <h6 className='mb-1'>$19,405.12</h6>
                    <p className='text-success fs-12 mb-0'>$19,405.12</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MyFinancePillars;
