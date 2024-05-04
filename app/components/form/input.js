import { DatePicker, Form } from 'antd';

const FormInput = ({ label, name, placeholder, required, isEmail, initialValue, rules = [], textArea, type, readOnly, onChange }) => {
    let initRules = [
        {
            required: required,
            message: `Please provide ${typeof label === 'string' && label?.toLowerCase() || 'a value'}`
        },
    ]
    if (isEmail) {
        initRules.push({ type: 'email', message: 'Please enter a valid email address' })
    }

    let input = <input className="form-input border border-2 w-full p-1" type={type} onChange={onChange} placeholder={placeholder} readOnly={readOnly} />
    textArea && (input = <textarea className="form-input" />)
    type === 'date' && (input = <DatePicker />)

    return (
        <Form.Item
            name={name}
            label={label}
            rules={[...initRules, ...rules]}
            className="mb-4"
            initialValue={initialValue || ''}
            placeholder={placeholder}
        >
            {input}
        </Form.Item>
    )
}

export default FormInput;


export const HiddenInput = ({ name, initialValue }) => {
    return (
        <Form.Item
            name={name}
            initialValue={initialValue || ''}
            hidden
        >
            <input className="form-input" />
        </Form.Item>
    )
}