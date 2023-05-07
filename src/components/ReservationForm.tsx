import React, { useState } from 'react';
import Select from 'react-select';
import DatePicker from 'react-datetime-picker';
import TextareaAutosize from 'react-textarea-autosize';
import { styled } from 'styled-components';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';

const towers = [
	{ value: 'a', label: 'Башня А' },
	{ value: 'b', label: 'Башня Б' }
];

const floors = Array.from(Array(25), (_, i) => ({
	value: i + 3,
	label: `Этаж ${i + 3}`
}));

const rooms = Array.from(Array(10), (_, i) => ({
	value: i + 1,
	label: `Переговорка ${i + 1}`
}));

const Main = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: white;
	padding: 20px 30px;
	border-radius: 16px;
	width: 75%;
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 75%;
	margin-bottom: 10px;
`;

const Label = styled.label`
	font-size: 20px;
	font-weight: 400;
`;

const Section = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 50%;
`;

const Button = styled.button`
	background-color: #1e1e1f;
	border-radius: 16px;
	padding: 20px 20px;
	color: white;
	font-size: 18px;
`;

const ReservationForm = () => {
	const [tower, setTower] = useState<{ value: string; label: string }>();
	const [floor, setFloor] = useState<{ value: number; label: string }>();
	const [room, setRoom] = useState<{ value: number; label: string }>();
	const [date, setDate] = useState<Date>();
	const [comment, setComment] = useState('');

	const handleClear = () => {
		setTower({ value: '', label: '' });
		setFloor({ value: 0, label: '' });
		setRoom({ value: 0, label: '' });
		setDate(new Date());
		setComment('');
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log({
			tower,
			floor,
			room,
			date,
			comment
		});

		handleClear();
	};

	return (
		<Main onSubmit={handleSubmit}>
			<Container>
				<Label>Выберите башню:</Label>
				<Select options={towers} value={tower} onChange={setTower} />
			</Container>

			<Container>
				<Label>Выберите этаж:</Label>
				<Select options={floors} value={floor} onChange={setFloor} />
			</Container>

			<Container>
				<Label>Выберите переговорку:</Label>
				<Select options={rooms} value={room} onChange={setRoom} />
			</Container>

			<Container>
				<Label>Выберите дату и время:</Label>
				<DatePicker value={date} onChange={setDate} />
			</Container>

			<Container>
				<Label>Введите комментарий:</Label>
				<TextareaAutosize
					value={comment}
					onChange={e => setComment(e.target.value)}
					style={{
						backgroundColor: 'lightgray',
						height: '30px',
						padding: '20px 20px',
						fontSize: '20px',
						maxWidth: '100%'
					}}
				/>
			</Container>

			<Section>
				<Button type='submit'>Отправить</Button>
				<Button type='button' onClick={handleClear}>
					Очистить
				</Button>
			</Section>
		</Main>
	);
};

export default ReservationForm;
