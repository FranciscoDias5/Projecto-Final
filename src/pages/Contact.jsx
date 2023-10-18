import React from 'react';
import styles from '../style';
import { useState } from 'react';
import { useFormik } from 'formik';
import signupSchema from '../components/ValidationSchema';
import Hero from '../components/Hero';

const Contact = () => {
	const [formData, setFormData] = useState(null);

	const formik = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
			age: '',
		},
		validationSchema: signupSchema,
		onSubmit: values => {
			console.log(values);
			setFormData(values);
			formik.resetForm();
		},
	});

	const formFields = [
		{ name: 'firstName', placeholder: 'First Name' },
		{ name: 'lastName', placeholder: 'Last Name' },
		{ name: 'email', placeholder: 'Email' },
		{ name: 'age', placeholder: 'Age' },
	];

	return (
		<div>
			<Hero />
			<div className={styles.formContainer}>
				<div className={styles.formCenter}>
					<div className={styles.formTitle}>Contacte-nos aqui...</div>
				</div>
				<form onSubmit={formik.handleSubmit}>
					<div className={styles.formCenter}>
						{formFields.map(field => (
							<React.Fragment key={field.name}>
								<input type={field.name === 'email' ? 'email' : 'text'} name={field.name} placeholder={field.placeholder} {...formik.getFieldProps(field.name)} className={styles.formInput} />
								<p className={styles.formErrorText}>{formik.errors[field.name]}</p>
							</React.Fragment>
						))}
						<button type='submit' id='submit' className={styles.formSubmitButton}>
							Submit
						</button>
					</div>
				</form>

				{formData && (
					<div className={styles.formSubmittedData}>
						<h2 className={styles.formBlackText}>Dados Enviados:</h2>
						<pre className={styles.formBlackText}>{JSON.stringify(formData, null, 2)}</pre>
					</div>
				)}
			</div>
		</div>
	);
};

export default Contact;
