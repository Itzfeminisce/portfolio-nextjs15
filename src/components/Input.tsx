import React, { HtmlHTMLAttributes, FC } from 'react'

interface InputProps extends HtmlHTMLAttributes<HTMLInputElement> {
    id: string;
    label: string;
    onChange: () => void
}

const Input: FC<InputProps> = ({...props}) => {
    return (
        <div>
            <label htmlFor={props.id}>{props.label}</label>
            <input
                type="text"
                name="subject"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
            />
        </div>
    )
}

export default Input