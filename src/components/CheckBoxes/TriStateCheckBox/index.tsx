'use client'
import React, { useState } from 'react'
import { Incorrect } from '../../UI/Icons/Incorrect'
import { Correct } from '../../UI/Icons/Correct'

type TriStateCheckboxProps = {
  onChange: (state: number) => void
  initialState?: number
  label: string
  labelPosition?: 'top' | 'bottom' | 'left' | 'right'
}

/**
 * TriStateCheckbox component
 * @param {function} onChange - Callback function to handle checkbox state changes
 * @param {number} initialState - Initial state of the checkbox (0 = unchecked, 1 = checked, 2 = cross)
 * @param {string} label - Label for the checkbox
 * @param {string} labelPosition - Position of the label (top, bottom, left, right)
 * @returns {JSX.Element} - TriStateCheckbox component
 * @example
 * <TriStateCheckbox onChange={handleCheckboxChange} label="Example" />
 */

const TriStateCheckbox: React.FC<TriStateCheckboxProps> = ({
  onChange,
  initialState = 0,
  label,
  labelPosition = 'right',
}) => {
  const [state, setState] = useState(initialState)

  const handleClick = () => {
    const nextState = (state + 1) % 3
    setState(nextState)
    onChange(nextState)
  }

  const renderIcon = () => {
    if (state === 1) {
      return <Correct className="h-6 w-6 text-success" />
    } else if (state === 2) {
      return <Incorrect className="h-6 w-6 text-alert" />
    }
    return null
  }

  const renderLabel = () => (
    <span
      className={`text-lg transition-all ${
        state === 1 ? 'font-bold text-success' : ''
      } ${state === 2 ? 'text-alert line-through' : ''}`}
    >
      {label}
    </span>
  )

  const renderCheckbox = () => (
    <button
      className={`flex h-6 w-6 items-center justify-center rounded-md border-2 border-gray-300 transition-colors focus:outline-none ${
        state === 1 ? 'bg-green-100' : state === 2 ? 'bg-red-100' : 'bg-white'
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

export default TriStateCheckbox
