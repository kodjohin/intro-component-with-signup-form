import { FC } from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import { validationSchema } from "./validation/validate";
import ErrorIcon from "../images/icon-error.svg";

const StyledForm = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	background-color: white;
	border-radius: var(--radius);
	padding-bottom: 20px;
	gap: 10px;
	
	form {
		
		input {
			width: 90%;
			border: 1px solid rgb(62, 60, 73, 0.2);
			font-size: 0.9rem;
			padding: 0 10px;
			border-radius: var(--radius);
			margin-top: 15px;
			font-weight: 600;
			color: var(--dark-blue);
			outline: none;
            height: 50px;
			caret-color: var(--blue);
			
            ::placeholder{
                color: rgb(62, 60, 73, 0.5);
            }
			:focus {
				border: 1px solid var(--blue);
			}
			transition: background-position .3s ease;
		}

		button {
			background-color: var(--green);
			color: white;
			text-transform: uppercase;
			padding: 20px 50px;
			border-radius: var(--radius);
			font-size: 0.7rem;
			letter-spacing: 1.6px;
			margin-top: 15px;
			cursor: pointer;
			outline: none;

			:hover,
			:focus {
				background-color: rgb(5 158 92);
			}
			transition: background-color .5s ease;
		}
		.error {
			color: var(--red);
			font-size: 0.7rem;
			text-align: right;
			width: 90%;
			transition: visibility 1s ease;
		}
	}
	small {
		width: 80%;
		color: var(--grayish-blue);
		font-size: 0.6rem;
		margin: 0 auto;
		span {
			color: var(--red);
			font-weight: 600;
		}
	}
`;

const SignupForm: FC = () => {
	const formik = useFormik({
		initialValues: {
			firstName: "",
			lastName: "",
			email: "",
			password: "",
		},
		validationSchema,
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
	});

    const inputStyle = (param:string | false | undefined) => param
    ? {
            backgroundImage: ` url(${ErrorIcon}) `,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 5% bottom 45%",
            right: "0",
            border: "1px solid var(--red)",
      }
    : {}

	return (
		<StyledForm>
			<form action="" onSubmit={formik.handleSubmit}>
				<input
					type="text"
					id="firstName"
					name="firstName"
					placeholder="First Name"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.firstName}
                    style={inputStyle(formik.touched.firstName && formik.errors.firstName)}
				/>
				{formik.touched.firstName && formik.errors.firstName ? (
					<div className="error">{formik.errors.firstName}</div>
				) : null}
				<input
					type="text"
					id="lastName"
					name="lastName"
					placeholder="Last Name"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.lastName}
					style={inputStyle(formik.touched.lastName && formik.errors.lastName)}
				/>
				{formik.touched.lastName && formik.errors.lastName ? (
					<div className="error">{formik.errors.lastName}</div>
				) : null}
				<input
					type="email"
					id="email"
					name="email"
					placeholder="Email Address"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.email}
                    style={inputStyle(formik.touched.email && formik.errors.email)}
				/>
				{formik.touched.email && formik.errors.email ? (
					<div className="error">{formik.errors.email}</div>
				) : null}
				<input
					type="password"
					id="password"
					name="password"
					placeholder="password"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.password}
                    style={inputStyle(formik.touched.password && formik.errors.password)}
				/>
				{formik.touched.password && formik.errors.password ? (
					<div className="error">{formik.errors.password}</div>
				) : null}
				<button type="submit">Claim your free trial </button>
			</form>
			<small>
				By clicking the button, you are agreeing to our{" "}
				<span>Terms and Services</span>
			</small>
		</StyledForm>
	);
};

export default SignupForm;
