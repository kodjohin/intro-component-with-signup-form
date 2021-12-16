import { FC } from "react";
import "./App.css";
import styled from "styled-components";
import SignupForm from "./components/SignupForm";

const StyledApp = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 300px;
	height: 100vh;
	color: white;
	text-align: center;
	gap: 20px;
`;
const StyledTexts = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 20px;

	p {
		font-size: 0.9rem;
		line-height: 24px;
	}
`;
const StyledTryButton = styled.button`
	cursor: pointer;
	padding: 20px 60px;
	border-radius: var(--radius);
	color: var(--grayish-blue);
	width: 300px;
	background-color: var(--blue);
	span {
		font-weight: 600;
		color: white;
	}
	:hover,
	:focus {
		background-color: #3d3670;
	}
  transition: background-color .5s ease;
`;

const App: FC = () => {
	return (
		<StyledApp>
			<StyledTexts>
				<h2>Learn to code by watching others</h2>
				<p>
					See how experienced developers solve problems in real-time. Watching
					scripted tutorials is great, but understanding how developers think is
					invaluable.
				</p>
			</StyledTexts>
			<StyledTryButton>
				<span>Try it free 7 days</span> then <br />
				$20/mo. thereafter
			</StyledTryButton>
			<SignupForm />
		</StyledApp>
	);
};

export default App;
