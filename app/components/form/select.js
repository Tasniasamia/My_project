import {Form, Select} from "antd";

const FormSelect = ({label, name, required,onSearch, initialValue, options, search, rules = [], multi, tags, placeholder, onSelect, onChange, allowClear, disabled, title}) => {
    let initRules = [
        {required: required, message: `Please select ${label || 'a option'}`},
    ]

    return (
        <Form.Item
            label={label}
            name={name}
            className="mb-3"
            rules={[...initRules, ...rules]}
            initialValue={initialValue}
        >
            <Select
                placeholder={placeholder}
                mode={multi ? 'multiple' : tags ? 'tags' : 'default'}
                popupClassName={tags ? 'd-none' : ''}
                allowClear={allowClear}
                onSelect={onSelect}
                disabled={disabled}
                onChange={onChange}
                
                filterOption={(input, option) => {
                    if (typeof option.children === 'string') {
                        return option.children?.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                    return 0
                }}
                showSearch={search}
                title={title}
                onSearch={onSearch}
            >
                {options?.map((option, index) => (
                    <Option key={index} disabled={option.disabled}
                                   value={option?._id || option?.value}>{option.name || option?.label}</Option>
                ))}
            </Select>
        </Form.Item>

    )
}

export default FormSelect