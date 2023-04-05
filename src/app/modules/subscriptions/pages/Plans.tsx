/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import React, { FC, useEffect, useState } from 'react'
import { useIntl } from 'react-intl';
import Back from '../components/Back'
import Header from '../components/Header'
import axios from '../../../api/axios';
import { KTSVG } from '../components/KTSVG'
import { Plan } from '../types/plan'
import { useNavigate } from 'react-router-dom'
import pricingList from '../../../api/apis/pricing.json';
import { toAbsoluteUrl } from '../helpers/_utils';

const planPeriod = [
  {
    id: 'oneTime',
    title: 'one time',
  },
  {
    id: 'recurring',
    title: 'recurring',
  }
]

const Plans: FC = () => {
  const navigate = useNavigate();
  const [currentState, setCurrentState] = useState(planPeriod[0].id);
  const intl = useIntl();
  const [subscriptions, allSubscriptions] = useState<Plan[]>([]);
  const [tempSubscriptions, allTempSubscriptions] = useState<Plan[]>([]);

  const selectedTimePeriod = (id: string) => {
    let tempSubscriptions = (id === 'oneTime') ? subscriptions?.filter((sub: any) => sub.recurring == null) : subscriptions?.filter((sub: any) => sub.recurring != null);
    setCurrentState(id);
    allTempSubscriptions(tempSubscriptions);
  };

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 10);

    const fetchData = async () => {
      try {
        // const request = await axios.get('http://localhost:3000/pricingList');
        const request = pricingList;
        allSubscriptions(request as any);
        allTempSubscriptions((request as any)?.filter((sub: any) => sub.recurring == null));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [])

  return (
    <div className={clsx('app-default')}>
      {/* begin::Header*/}
      <Header />
      {/* begin::Header*/}

      <div className="container">
        <div className='manage-subscriptions mt-8'>
          <div className={clsx('app-toolbar flex-column')}>
            <div className="d-flex align-items-center py-lg-6">
              <Back />
              <h1 className={clsx('page-heading flex-grow-1 text-dark mb-2 heading theme-heading text-center')}>
                {intl.formatMessage({ 'id': 'SUBSCRIPTIONS.PLANS.TITLE' })}
              </h1>
            </div>

            <>
                {/* begin::Plan tabs*/}
                <div className="d-flex align-items-center justify-content-center py-lg-1">
                  <div className='nav-group nav-group-outline mx-auto' data-kt-buttons='true'>
                    {
                      planPeriod.map((period, index) => (
                        <a
                          href={void (0)}
                          className={
                            'text-capitalize btn btn-active btn-active-secondary btn-sm px-3 py-2 me-2 fw-normal ' +
                            (currentState === period.id && 'active')
                          }
                          key={`plan-period-${index}`}
                          onClick={() => {
                            selectedTimePeriod(period.id)
                          }}
                          data-kt-plan={period.title}
                        >
                          {period.title}
                        </a>
                      ))
                    }
                  </div>
                </div>
                {/* end::Plan tabs*/}

                {/* begin::Plan subscriptions*/}
                <div className='tab-content rounded h-100 py-6'>
                  <div className="row g-6 g-xl-4 justify-content-center">
                    {
                      tempSubscriptions.map((plan, index) => {
                        return (
                          <div key={`custom${index}`} className={'col-md-3'}>
                              <div
                                className={`plan-tile bg-light rounded-4 px-6 py-8 tab-pane`}
                                id={`kt_upgrade_plan_${index}`}
                                key={index}
                              >
                                <h2 className='fw-normal text-dark'>
                                  {plan.title}
                                  {/* 
                                      {plan.label && (
                                        <span className='badge badge-light-success ms-2 fs-8'>
                                          {plan.label}
                                        </span>
                                      )}   
                                  */}
                                </h2>

                                <div className='my-4 d-flex gap-2 align-items-end justify-content-start'>
                                  <h3 className='display-6 mb-0'>${plan.unit_amount.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}</h3>
                                  <span className='fs-8 text-gray-500'>/ {plan.recurring ? plan.recurring.interval : 'One time'}</span>
                                </div>

                                <div className='fw-normal fs-8'>{plan.description}</div>

                                <hr style={{borderTop: "dotted 3px", padding: "10px 0"}} />

                                <div className='pt-1 plan-features-expandable'>
                                  <div className="plan-features">
                                    {plan.feature_list.split('|').map((feature, i) => {
                                      return (
                                        <div
                                          className='mb-2'
                                          key={`${i}-${feature}`}
                                        >
                                          <span className='d-flex flex-grow-1 align-items-start'>
                                              <img
                                                  src={toAbsoluteUrl('/media/subscriptions/gen040.svg')}
                                                  className='h-15px me-2 mt-2'
                                                  alt='check icon'
                                                />
                                              <span className='fs-8 fw-normal'>
                                                {feature}
                                              </span>
                                          </span>
                                        </div>
                                      )
                                    })}
                                  </div>
                                </div>

                                <div className='plan-btn d-grid'>
                                  <button
                                    className='btn btn-theme btn-sm'
                                    type='button' onClick={() => {
                                      navigate('/onboarding');
                                    }}>
                                    {intl.formatMessage({ 'id': 'SUBSCRIPTIONS.PLANS.PURCHASE_PLAN_BTN' })}
                                  </button>
                                </div>
                                
                              </div>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
                {/* end::Plan subscriptions*/}

            </>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Plans