import * as yup from 'yup';

const signupSchema = yup.object().shape({
	firstName: yup.string().required('O primeiro nome é obrigatório'),
	lastName: yup.string().required('O sobrenome é obrigatório'),
	email: yup.string().email('Insira um e-mail válido').required('O e-mail é obrigatório'),
	age: yup
		.number()
		.typeError('A idade deve ser um número válido')
		.min(18, 'Tens de ser maior de idade')
		.max(65, 'Estás reformado, larga o computador e aproveita a vida!!!')
		.positive()
		.integer()
		.required('A idade é obrigatória'),
});

export default signupSchema;
