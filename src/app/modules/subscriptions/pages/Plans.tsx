/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import React, { FC, useEffect, useState } from 'react'
import { useIntl } from 'react-intl'
import Back from '../components/Back'
import Header from '../components/Header'
import axios from '../../../api/axios';
import { KTSVG } from '../components/KTSVG'
import { Plan } from '../types/plan'

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
  const [currentState, setCurrentState] = useState(planPeriod[0].id);
  const intl = useIntl();
  const [subscriptions, allSubscriptions] = useState<Plan[]>([]);
  const [tempSubscriptions, allTempSubscriptions] = useState<Plan[]>([]);

  const selectedTimePeriod = (id:string) => {
    let tempSubscriptions = (id === 'oneTime') ? subscriptions?.filter((sub:any) => sub.recurring == null) : subscriptions?.filter((sub:any) => sub.recurring != null);
    setCurrentState(id);
    allTempSubscriptions(tempSubscriptions);
  };

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 10);

    const fetchData = async () => {
      try {
        const request = await axios.get('http://localhost:3000/pricingList');
        allSubscriptions(request.data);
        allTempSubscriptions(request.data?.filter((sub:any) => sub.recurring == null));
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

      <div className="app-container">
        <div className='manage-subscriptions mt-8'>
          <div className={clsx('app-toolbar flex-column')}>
            <div className="d-flex align-items-center py-lg-6">
              <Back />
              <h1 className={clsx('page-heading text-center flex-grow-1 text-dark fw-bold')}>
                {intl.formatMessage({'id': 'SUBSCRIPTIONS.PLANS.TITLE'})}
              </h1>
            </div>

            <div className="card">
              <div className="card-body">
                {/* begin::Plan tabs*/}
                <div className="d-flex align-items-center justify-content-center py-lg-6">
                  <div className='nav-group nav-group-outline mx-auto' data-kt-buttons='true'>
                    {
                      planPeriod.map((period, index) => (
                        <a
                          href={void(0)}
                          className={
                            'text-capitalize btn btn-color-gray-400 btn-active btn-active-secondary px-6 py-3 me-2 ' +
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
                  <div className="row g-6 g-xl-8 align-items-start justify-content-center">
                    {
                      tempSubscriptions.map((plan, index) => {
                          return (
                            <div key={`custom${index}`} className='col-lg-4'>
                                <div className='bg-light card-body plan-tile hover-scale'>
                                  <div
                                    className={`text-center tab-pane fade` + (plan)}
                                    id={`kt_upgrade_plan_${index}`}
                                    key={index}
                                  >
                                    <div className='pb-5'>
                                      <h2 className='fw-bolder text-dark'>
                                        {plan.title}
                                        {/* {plan.label && (
                                          <span className='badge badge-light-success ms-2 fs-7'>
                                            {plan.label}
                                          </span>
                                        )}   */}
                                      </h2>

                                      <div className='text-gray-400 fw-normal'>{plan.description}</div>
                                    </div>

                                    <div className='pt-1'>
                                      {plan.feature_list.split('|').map((feature, i) => {
                                        return (
                                          <div
                                            className={
                                              `d-flex align-items-center` +
                                              (i !== plan.feature_list.split('|')!.length - 1 && ' mb-7')
                                            }
                                            key={`${i}-${feature}`}
                                          >
                                            {/* {feature.supported && (
                                              <>
                                                <span className='fw-bold fs-5 text-gray-700 flex-grow-1'>
                                                  {feature.title}
                                                </span>

                                                <KTSVG
                                                  path='/media/subscriptions/gen043.svg'
                                                  className='svg-icon-1 svg-icon-success'
                                                />
                                              </>
                                            )}
                                            {!feature.supported && (
                                              <>
                                                <span className='fw-bold fs-5 text-gray-400 flex-grow-1'>
                                                  {feature.title}
                                                </span>
                                                <KTSVG
                                                  path='/media/subscriptions/gen040.svg'
                                                  className='svg-icon-1'
                                                />
                                              </>
                                            )} */}
                                              <span className='fw-normal text-gray-700 flex-grow-1'>
                                                {feature}
                                              </span>
                                          </div>
                                        )
                                      })}

                                      <div className='fw-bold fs-5 text-gray-400 my-8 d-flex gap-2 align-items-center justify-content-center'>
                                        <span>$</span>
                                        <span className='fs-1 text-gray-800'>{plan.unit_amount}</span>
                                        <span>/ {plan.recurring ? plan.recurring.interval : 'One time'}</span>
                                      </div>

                                      <div className='d-grid'>
                                        <button
                                          className='btn btn-theme btn-sm'
                                          type='button' onClick={() => {
                                            console.log(plan.title)
                                          }}>
                                          {intl.formatMessage({'id': 'SUBSCRIPTIONS.PLANS.PURCHASE_PLAN_BTN'})}
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                            </div>
                          )
                      })
                    }
                  </div>
                </div>
                {/* end::Plan subscriptions*/}

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Plans