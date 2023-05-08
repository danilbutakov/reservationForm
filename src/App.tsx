import { styled } from 'styled-components';
import ReservationForm from './components/ReservationForm';

const Container = styled.div`
	background-color: blue;
	min-height: 100vh;
	display: flex;
	align-items: center;
	flex-direction: column;
`;

const Text = styled.h1`
	font-size: 30px;
	font-weight: bold;
	background-color: white;
	padding: 10px 20px;
	border-radius: 16px;
	color: #1e1e1f;
	text-align: center;
	width: 75%;
	margin: 20px 0 20px 0;

	@media (max-width: 500px) {
		width: 95%;
		padding: 5px 10px;
		font-size: 24px;
	}

	@media (max-width: 810px) {
		width: 95%;
		padding: 10px 20px;
		font-size: 24px;
	}
`;

const App = () => {
	return (
		<Container>
			<Text>Форма бронирования переговорной</Text>
			<ReservationForm />
		</Container>
	);
};

export default App;
