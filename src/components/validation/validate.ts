import * as Yup from "yup";
// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
interface UserInput {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
}
interface Errors {
	firstName?: string;
	lastName?: string;
	email?: string;
	password?: string;
}
export const validate = (values: UserInput) => {
	const errors: Errors = {};
	if (!values.firstName) {
		errors.firstName = "Required";
	} else if (values.firstName.length > 15) {
		errors.firstName = "Must be 15 characters or less";
	}

	if (!values.lastName) {
		errors.lastName = "Required";
	} else if (values.lastName.length > 20) {
		errors.lastName = "Must be 20 characters or less";
	}

	if (!values.email) {
		errors.email = "Required";
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = "Invalid email address";
	}
	if (!values.password) {
		errors.password = "Required";
	} else if (values.password.length < 6) {
		errors.password = "Must be 6 characters or more";
	}

	return errors;
};

export const validationSchema = Yup.object({
	firstName: Yup.string()
		.max(15, "Must be 15 characters or less")
		.required("Don't you have a name?"),
	lastName: Yup.string()
		.max(20, "Must be 20 characters or less")
		.required("Yo mama did give you a name!"),
	email: Yup.string().email("Invalid email address").required("no@no.com works!"),
	password: Yup.string()
		.required("Seriously?")
		.min(8, "Password is too short - should be 8 chars minimum.")
});
