import React from 'react'
import FormSection from '../'
import Radio from '../../../Form/Radio'
import SingleDatePicker from '../../../Form/SingleDatePicker'

export default {
  component: FormSection,
  props: {
    heading: 'Section Heading',
    description: 'This generally provides some further explanation about what the user can / should do.'
  },
  children: (
    <Radio label="Run for how long?" value={false} options={[
      {label: 'Indefinitely', value: false},
      {label: 'Specific date...', value: true, child: <SingleDatePicker id="demo2" name="demo2" />, showChild: false}
    ]} />
  )
}
