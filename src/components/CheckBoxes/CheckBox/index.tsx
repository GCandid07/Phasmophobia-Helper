'use client'
import { Correct } from '@/components/UI/Icons/Correct'
import React, { useState } from 'react'

type CheckboxProps = {
  onChange: (checked: boolean) => void
  initialChecked?: boolean
  label: string
  labelPosition?: 'top' | 'bottom' | 'left' | 'right'
}

/**
 * Checkbox component
 * @param {function} onChange - Callback function to handle checkbox state changes
 * @param {boolean} initialChecked - Initial checked state of the checkbox
 * @param {string} label - Label for the checkbox
 * @param {string} labelPosition - Position of the label (top, bottom, left, right)
 * @returns {JSX.Element} - Checkbox component
 * @example
 * <Checkbox onChange={handleCheckboxChange} label="Example" />
 */

const Checkbox: React.FC<CheckboxProps> = ({
  onChange,
  initialChecked = false,
  label,
  labelPosition = 'right',
}) => {
  const [checked, setChecked] = useState(initialChecked)

  const handleClick = () => {
    const nextChecked = !checked
    setChecked(nextChecked)
    onChange(nextChecked)
  }

  const renderIcon = () =>
    checked ? <Correct className="text-success h-6 w-6" /> : null

  const renderLabel = () => (
    <span
      className={`text-lg transition-all ${checked ? 'text-success font-bold' : ''}`}
    >
      {label}
    </span>
  )

  const renderCheckbox = () => (
    <button
      className={`flex h-6 w-6 items-center justify-center rounded-md border-2 border-gray-300 transition-colors focus:outline-none ${
        checked ? 'bg-green-100' : 'bg-white'
      }`}
    >
      {renderIcon()}
    </button>
  )

  const renderContent = () => {
    const horizontal = labelPosition === 'left' || labelPosition === 'right'
    const reverse = labelPosition === 'left' || labelPosition === 'top'

    return (
      <div
        className={`inline-flex ${
          horizontal ? 'items-center gap-1' : 'flex-col items-center gap-1'
        }`}
      >
        {reverse ? renderLabel() : renderCheckbox()}
        {reverse ? renderCheckbox() : renderLabel()}
      </div>
    )
  }

  return (
    <div className="w-max cursor-pointer text-white" onClick={handleClick}>
      {renderContent()}
    </div>
  )
}

export default Checkbox
