"use client";

import React, { useState, FormEvent } from 'react';
import { useTranslations } from 'next-intl';

interface FormData {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  location: string;
  timeline: string;
  details: string;
  website: string; // Honeypot
}

export default function ContactForm() {
  const t = useTranslations('ContactPage.form');
  
  const initialData: FormData = {
    fullName: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    location: '',
    timeline: '',
    details: '',
    website: ''
  };

  const [formData, setFormData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [serverMessage, setServerMessage] = useState<string>('');

  const validateField = (name: keyof FormData, value: string) => {
    let errorMsg = '';
    
    if (name === 'fullName' && !value.trim()) {
      errorMsg = t('validation.required');
    } else if (name === 'email') {
      if (!value.trim()) {
        errorMsg = t('validation.required');
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        errorMsg = t('validation.emailInvalid');
      }
    } else if (name === 'phone') {
      if (!value.trim()) {
        errorMsg = t('validation.required');
      } else if (!/^\+?[0-9\s\-()]{7,18}$/.test(value)) {
        errorMsg = t('validation.phoneInvalid');
      }
    } else if ((name === 'service' || name === 'timeline') && !value) {
      errorMsg = t('validation.required');
    }

    setErrors(prev => ({
      ...prev,
      [name]: errorMsg
    }));

    return !errorMsg;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear validation error on type
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    validateField(name as keyof FormData, value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (status === 'submitting') return;

    // Validate all required fields
    const isNameValid = validateField('fullName', formData.fullName);
    const isEmailValid = validateField('email', formData.email);
    const isPhoneValid = validateField('phone', formData.phone);
    const isServiceValid = validateField('service', formData.service);
    const isTimelineValid = validateField('timeline', formData.timeline);

    if (!isNameValid || !isEmailValid || !isPhoneValid || !isServiceValid || !isTimelineValid) {
      setStatus('error');
      setServerMessage(t('errorMsg'));
      return;
    }

    setStatus('submitting');
    setServerMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus('success');
        setServerMessage(t('successMsg'));
        setFormData(initialData); // Reset form
        setErrors({});
      } else {
        setStatus('error');
        setServerMessage(result.error || t('errorMsg'));
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
      setServerMessage(t('errorMsg'));
    }
  };

  return (
    <div className="contact-form-card">
      <h3 className="contact-form-heading">{t('title')}</h3>
      
      {status === 'success' && (
        <div className="form-alert alert-success" role="alert" aria-live="assertive">
          <i className="fa-solid fa-circle-check"></i>
          <span>{serverMessage}</span>
        </div>
      )}

      {status === 'error' && (
        <div className="form-alert alert-error" role="alert" aria-live="assertive">
          <i className="fa-solid fa-circle-exclamation"></i>
          <span>{serverMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        {/* Honeypot Spam Bot Field (hidden from screen/users) */}
        <div style={{ display: 'none' }} aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input
            type="text"
            id="website"
            name="website"
            value={formData.website}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="form-fields-grid">
          
          <div className="form-row-2col">
            {/* Full Name */}
            <div className="form-group">
              <label htmlFor="fullName" className="form-label">
                {t('fields.fullName')} <span className="required-asterisk" aria-hidden="true">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={status === 'submitting'}
                className={`form-input ${errors.fullName ? 'input-error' : ''}`}
                placeholder={t('fields.fullName')}
                required
                autoComplete="name"
                aria-invalid={!!errors.fullName}
                aria-describedby={errors.fullName ? "fullName-error" : undefined}
              />
              {errors.fullName && (
                <span id="fullName-error" className="form-error-msg" role="alert">
                  {errors.fullName}
                </span>
              )}
            </div>

            {/* Company */}
            <div className="form-group">
              <label htmlFor="company" className="form-label">
                {t('fields.company')}
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                disabled={status === 'submitting'}
                className="form-input"
                placeholder={t('fields.company')}
                autoComplete="organization"
              />
            </div>
          </div>

          <div className="form-row-2col">
            {/* Email Address */}
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                {t('fields.email')} <span className="required-asterisk" aria-hidden="true">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={status === 'submitting'}
                className={`form-input ${errors.email ? 'input-error' : ''}`}
                placeholder="example@domain.com"
                required
                autoComplete="email"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                dir="ltr"
              />
              {errors.email && (
                <span id="email-error" className="form-error-msg" role="alert">
                  {errors.email}
                </span>
              )}
            </div>

            {/* Phone Number */}
            <div className="form-group">
              <label htmlFor="phone" className="form-label">
                {t('fields.phone')} <span className="required-asterisk" aria-hidden="true">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={status === 'submitting'}
                className={`form-input ${errors.phone ? 'input-error' : ''}`}
                placeholder="+20 123 456 7890"
                required
                autoComplete="tel"
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "phone-error" : undefined}
                dir="ltr"
              />
              {errors.phone && (
                <span id="phone-error" className="form-error-msg" role="alert">
                  {errors.phone}
                </span>
              )}
            </div>
          </div>

          <div className="form-row-2col">
            {/* Required Service Dropdown */}
            <div className="form-group">
              <label htmlFor="service" className="form-label">
                {t('fields.service')} <span className="required-asterisk" aria-hidden="true">*</span>
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={status === 'submitting'}
                className={`form-input form-select ${errors.service ? 'input-error' : ''}`}
                required
                aria-invalid={!!errors.service}
                aria-describedby={errors.service ? "service-error" : undefined}
              >
                <option value="">-- {t('fields.service')} --</option>
                <option value="booths">{t('services.booths')}</option>
                <option value="planning">{t('services.planning')}</option>
                <option value="tents">{t('services.tents')}</option>
                <option value="printing">{t('services.printing')}</option>
                <option value="audio">{t('services.audio')}</option>
                <option value="registration">{t('services.registration')}</option>
                <option value="conferences">{t('services.conferences')}</option>
                <option value="other">{t('services.other')}</option>
              </select>
              {errors.service && (
                <span id="service-error" className="form-error-msg" role="alert">
                  {errors.service}
                </span>
              )}
            </div>

            {/* Event Date or Timeline Dropdown */}
            <div className="form-group">
              <label htmlFor="timeline" className="form-label">
                {t('fields.timeline')} <span className="required-asterisk" aria-hidden="true">*</span>
              </label>
              <select
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={status === 'submitting'}
                className={`form-input form-select ${errors.timeline ? 'input-error' : ''}`}
                required
                aria-invalid={!!errors.timeline}
                aria-describedby={errors.timeline ? "timeline-error" : undefined}
              >
                <option value="">-- {t('fields.timeline')} --</option>
                <option value="urgent">{t('timelines.urgent')}</option>
                <option value="weeks">{t('timelines.weeks')}</option>
                <option value="months1">{t('timelines.months1')}</option>
                <option value="months2">{t('timelines.months2')}</option>
                <option value="planning">{t('timelines.planning')}</option>
              </select>
              {errors.timeline && (
                <span id="timeline-error" className="form-error-msg" role="alert">
                  {errors.timeline}
                </span>
              )}
            </div>
          </div>

          {/* Event Location */}
          <div className="form-group full-width">
            <label htmlFor="location" className="form-label">
              {t('fields.location')}
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              disabled={status === 'submitting'}
              className="form-input"
              placeholder={t('fields.location')}
            />
          </div>
          
          {/* Project Details */}
          <div className="form-group full-width">
            <label htmlFor="details" className="form-label">
              {t('fields.details')}
            </label>
            <textarea
              id="details"
              name="details"
              rows={5}
              value={formData.details}
              onChange={handleChange}
              disabled={status === 'submitting'}
              className="form-input form-textarea"
              placeholder={t('fields.details')}
            />
          </div>

        </div>

        {/* Submit Area */}
        <div className="form-submit-container">
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="form-submit-btn"
          >
            {status === 'submitting' ? t('submitBtnLoading') : t('submitBtn')}
          </button>
          <p className="form-subtext">{t('subtext')}</p>
        </div>
      </form>
    </div>
  );
}
