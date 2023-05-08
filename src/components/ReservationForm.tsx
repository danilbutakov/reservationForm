import React, { useState } from 'react';
import Select from 'react-select';
import DatePicker from 'react-datetime-picker';
import TextareaAutosize from 'react-textarea-autosize';
import { styled } from 'styled-components';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';

const Main = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: white;
	padding: 20px 30px;
	border-radius: 16px;
	width: 75%;

	@media (max-width: 810px) {
		width: 95%;
		padding: 10px 15px;
		margin-bottom: 20px;
	}
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 75%;
	margin-bottom: 10px;

	@media (max-width: 810px) {
		width: 90%;
		padding: 10px 15px;
		margin-bottom: 20px;
	}

	@media (max-width: 500px) {
		padding: 5px 10px;
		margin-bottom: 10px;
	}
`;

const Label = styled.label`
	font-size: 20px;
	font-weight: 400;
`;

const ButtonSection = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 50%;

	@media (max-width: 810px) {
		width: 70%;
	}

	@media (max-width: 500px) {
		width: 80%;
	}
`;

const Button = styled.button`
	background-color: #1e1e1f;
	border-radius: 16px;
	padding: 20px 20px;
	color: white;
	font-size: 18px;

	@media (max-width: 810px) {
		padding: 10px 10px;
	}
`;

interface TowersType {
	value: string;
	label: string;
}

const towers: TowersType[] = [
	{ value: 'a', label: 'Башня А' },
	{ value: 'b', label: 'Башня Б' }
];

interface FloorsType {
	value: number;
	label: string;
}

const floors: FloorsType[] = Array.from(Array(25), (_, i) => ({
	value: i + 3,
	label: `Этаж ${i + 3}`
}));

interface RoomsType {
	value: number;
	label: string;
}

const rooms: RoomsType[] = Array.from(Array(10), (_, i) => ({
	value: i + 1,
	label: `Переговорка ${i + 1}`
}));

const ReservationForm = () => {
	const [selectedTower, setSelectedTower] = useState<TowersType | null>(null);
	const [selectedFloor, setSelectedFloor] = useState<FloorsType | null>(null);
	const [selectedRoom, setSelectedRoom] = useState<RoomsType | null>();
	const [selectedDate, setSelectedDate] = useState<Date | null>(null);
	const [comment, setComment] = useState('');

	const handleClear = () => {
		setSelectedTower({ value: '', label: '' });
		setSelectedFloor({ value: 0, label: '' });
		setSelectedRoom({ value: 0, label: '' });
		setSelectedDate(null);
		setComment('');
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log({
			selectedTower,
			selectedFloor,
			selectedRoom,
			selectedDate,
			comment
		});

		handleClear();
	};

	return (
		<Main onSubmit={handleSubmit}>
			<Container>
				<Label>Выберите башню:</Label>
				<Select
					options={towers}
					value={selectedTower}
					onChange={(option: TowersType | null) => setSelectedTower(option)}
				/>
			</Container>

			<Container>
				<Label>Выберите этаж:</Label>
				<Select
					options={floors}
					value={selectedFloor}
					onChange={(option: FloorsType | null) => setSelectedFloor(option)}
				/>
			</Container>

			<Container>
				<Label>Выберите переговорку:</Label>
				<Select
					options={rooms}
					value={selectedRoom}
					onChange={(option: RoomsType | null) => setSelectedRoom(option)}
				/>
			</Container>

			<Container>
				<Label>Выберите дату и время:</Label>
				<DatePicker
					value={selectedDate}
					onChange={(option: Date | null) => setSelectedDate(option)}
				/>
			</Container>

			<Container>
				<Label>Введите комментарий:</Label>
				<TextareaAutosize
					value={comment}
					onChange={e => setComment(e.target.value)}
					style={{
						backgroundColor: 'lightgray',
						height: 30,
						padding: '20px 20px',
						fontSize: '20px',
						maxWidth: '100%'
					}}
				/>
			</Container>

			<ButtonSection>
				<Button type='submit'>Отправить</Button>
				<Button type='button' onClick={handleClear}>
					Очистить
				</Button>
			</ButtonSection>
		</Main>
	);
};

export default ReservationForm;
