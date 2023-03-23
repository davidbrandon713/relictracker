import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import FormElement from '../../components/form-element/form-element'

import './form.css'

const schema = yup.object().shape({
	name: yup.string().required(),
	id: yup.string().required(),
	drop1: yup.string().required(),
	drop2: yup.string().required(),
	drop3: yup.string().required(),
	drop4: yup.string().required(),
	drop5: yup.string().required(),
	drop6: yup.string().required(),
})

const Form = ({ onCreateRelic, setPopupTrigger }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	})

	const onSubmit = (data) => {
		console.log(data)
		onCreateRelic(data.id, data.name, [
			data.drop1,
			data.drop2,
			data.drop3,
			data.drop4,
			data.drop5,
			data.drop6,
		])
		setPopupTrigger(false)
	}

	return (
		<div className="form-container">
			<div className="title-container">
				<h2 className="form-title">Add a new relic</h2>
				<button
					className="btnClose"
					onClick={() => setPopupTrigger(false)}
				>
					&#10006;
				</button>
			</div>
			<form
				className="form-component"
				onSubmit={handleSubmit(onSubmit)}
			>
				<FormElement
					title="Name"
					name="name"
					type="text"
					error={errors.name}
					errorMsg="*"
					tabIndex={1}
					register={register}
				/>
				<FormElement
					title="ID"
					name="id"
					type="text"
					error={errors.id}
					errorMsg="*"
					tabIndex={2}
					register={register}
				/>
				<FormElement
					title="Rare drop"
					name="drop1"
					type="text"
					error={errors.drop1}
					errorMsg="*"
					tabIndex={3}
					register={register}
				/>
				<FormElement
					title="Uncommon drop"
					name="drop2"
					type="text"
					error={errors.drop2}
					errorMsg="*"
					tabIndex={3}
					register={register}
				/>
				<FormElement
					title="Uncommon drop"
					name="drop3"
					type="text"
					error={errors.drop3}
					errorMsg="*"
					tabIndex={3}
					register={register}
				/>
				<FormElement
					title="Common drop"
					name="drop4"
					type="text"
					error={errors.drop4}
					errorMsg="*"
					tabIndex={3}
					register={register}
				/>
				<FormElement
					title="Common drop"
					name="drop5"
					type="text"
					error={errors.drop5}
					errorMsg="*"
					tabIndex={3}
					register={register}
				/>
				<FormElement
					title="Common drop"
					name="drop6"
					type="text"
					error={errors.drop6}
					errorMsg="*"
					tabIndex={3}
					register={register}
				/>
				<button
					type="submit"
					id="btnSubmit"
				>
					Submit
				</button>
			</form>
		</div>
	)
}

export default Form
