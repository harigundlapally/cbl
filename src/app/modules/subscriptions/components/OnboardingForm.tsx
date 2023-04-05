/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import { useFormik } from 'formik'
import React, { FC, useState } from 'react'
import { useIntl } from 'react-intl'
import * as Yup from 'yup'

const onboardingFormSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Minimum 3 symbols')
        .max(25, 'Maximum 25 symbols')
        .required('Name is required'),
    email: Yup.string()
        .email('Wrong email format')
        .min(3, 'Minimum 3 symbols')
        .max(50, 'Maximum 50 symbols')
        .required('Email is required'),
    designation: Yup.string()
        .min(3, 'Minimum 3 symbols')
        .max(50, 'Maximum 50 symbols')
        .required('Designation is required'),
    companyName: Yup.string()
        .min(3, 'Minimum 3 symbols')
        .max(50, 'Maximum 50 symbols')
        .required('Company Name is required'),
    companyType: Yup.number()
        .required('Select Company type'),
})

const initialValues = {
    name: 'admin',
    email: 'admin@demo.com',
    designation: 'Software Engineer',
    companyName: 'Crossbow Labs',
    companyType: 1,
}

const OnboardingForm: FC = () => {
    const intl = useIntl();
    const [loading, setLoading] = useState(false)

    const formik = useFormik({
        initialValues,
        validationSchema: onboardingFormSchema,
        onSubmit: async (values, { setStatus, setSubmitting }) => {
            setLoading(true)
            //   try {
            //     const {data: auth} = await login(values.email, values.password)
            //     saveAuth(auth)
            //     const {data: user} = await getUserByToken(auth.api_token)
            //     setCurrentUser(user)
            //   } catch (error) {
            //     console.error(error)
            //     saveAuth(undefined)
            //     setStatus('The login details are incorrect')
            //     setSubmitting(false)
            //     setLoading(false)
            //   }
        },
    })

    return (
        <div className='d-flex flex-lg-row-fluid bgi-size-cover bgi-position-center order-1 order-lg-2 onboarding-form py-20 ps-12'>
            <form
                className='form w-100'
                onSubmit={formik.handleSubmit}
                noValidate
                id='kt_login_signin_form'
            >
                {/* begin::Heading */}
                <div className='text-center mb-11'>
                    <h1 className='text-dark mb-3 text-uppercase theme-heading'>{intl.formatMessage({'id': 'SUBSCRIPTIONS.ONBOARDING.FORM_TITLE'})}</h1>
                    {/* <div className='text-gray-500 fw-semibold'>Your Social Campaigns</div> */}
                </div>
                {/* begin::Heading */}


                {/* begin::Form group */}
                <div className='fv-row mb-5'>
                    <label className='form-label text-dark'>Email ID</label>
                    <input
                        placeholder='Email'
                        {...formik.getFieldProps('email')}
                        className={clsx(
                            'form-control bg-transparent',
                            { 'is-invalid': formik.touched.email && formik.errors.email },
                            {
                                'is-valid': formik.touched.email && !formik.errors.email,
                            }
                        )}
                        type='email'
                        name='email'
                        autoComplete='off'
                    />
                    {formik.touched.email && formik.errors.email && (
                        <div className='fv-plugins-message-container'>
                            <span role='alert'>{formik.errors.email}</span>
                        </div>
                    )}
                </div>
                {/* end::Form group */}

                {/* begin::Form group */}
                <div className='fv-row mb-5'>
                    <label className='form-label text-dark mb-0'>Name</label>
                    <input
                        type='text'
                        autoComplete='off'
                        {...formik.getFieldProps('name')}
                        className={clsx(
                            'form-control bg-transparent',
                            {
                                'is-invalid': formik.touched.name && formik.errors.name,
                            },
                            {
                                'is-valid': formik.touched.name && !formik.errors.name,
                            }
                        )}
                    />
                    {formik.touched.name && formik.errors.name && (
                        <div className='fv-plugins-message-container'>
                            <div className='fv-help-block'>
                                <span role='alert'>{formik.errors.name}</span>
                            </div>
                        </div>
                    )}
                </div>
                {/* end::Form group */}

                {/* begin::Form group */}
                <div className='fv-row mb-5'>
                    <label className='form-label text-dark mb-0'>Designation</label>
                    <input
                        type='text'
                        autoComplete='off'
                        {...formik.getFieldProps('designation')}
                        className={clsx(
                            'form-control bg-transparent',
                            {
                                'is-invalid': formik.touched.designation && formik.errors.designation,
                            },
                            {
                                'is-valid': formik.touched.designation && !formik.errors.designation,
                            }
                        )}
                    />
                    {formik.touched.designation && formik.errors.designation && (
                        <div className='fv-plugins-message-container'>
                            <div className='fv-help-block'>
                                <span role='alert'>{formik.errors.designation}</span>
                            </div>
                        </div>
                    )}
                </div>
                {/* end::Form group */}

                {/* begin::Form group */}
                <div className='fv-row mb-5'>
                    <label className='form-label text-dark mb-0'>Company Name</label>
                    <input
                        type='text'
                        autoComplete='off'
                        {...formik.getFieldProps('companyName')}
                        className={clsx(
                            'form-control bg-transparent',
                            {
                                'is-invalid': formik.touched.companyName && formik.errors.companyName,
                            },
                            {
                                'is-valid': formik.touched.companyName && !formik.errors.companyName,
                            }
                        )}
                    />
                    {formik.touched.companyName && formik.errors.companyName && (
                        <div className='fv-plugins-message-container'>
                            <div className='fv-help-block'>
                                <span role='alert'>{formik.errors.companyName}</span>
                            </div>
                        </div>
                    )}
                </div>
                {/* end::Form group */}

                {/* begin::Form group */}
                <div className='fv-row mb-5'>
                    <label className='form-label text-dark mb-0'>Company Type</label>
                    <select
                        {...formik.getFieldProps('companyType')}
                        className={clsx(
                            'form-control bg-transparent',
                            {
                                'is-invalid': formik.touched.companyType && formik.errors.companyType,
                            },
                            {
                                'is-valid': formik.touched.companyType && !formik.errors.companyType,
                            }
                        )}
                    >
                        <option value="" label="Select company type" />
                        <option value="1" label="Type1" />
                        <option value="2" label="Type2" />
                    </select>
                    {formik.touched.companyType && formik.errors.companyType && (
                        <div className='fv-plugins-message-container'>
                            <div className='fv-help-block'>
                                <span role='alert'>{formik.errors.companyType}</span>
                            </div>
                        </div>
                    )}
                </div>
                {/* end::Form group */}

                {/* begin::Action */}
                <div className='d-grid mb-10'>
                    <button
                        type='submit'
                        id='kt_sign_in_submit'
                        className='btn btn-theme'
                        disabled={formik.isSubmitting || !formik.isValid}
                    >
                        {!loading && <span className='indicator-label'>{intl.formatMessage({'id': 'SUBSCRIPTIONS.ONBOARDING.FORM_BUTTON'})}</span>}
                        {loading && (
                            <span className='indicator-progress' style={{ display: 'block' }}>
                                {intl.formatMessage({'id': 'SUBSCRIPTIONS.ONBOARDING.PLEASE_WAIT'})}...
                                <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                            </span>
                        )}
                    </button>
                </div>
                {/* end::Action */}
            </form>
        </div>
    )
}

export default OnboardingForm