import React from 'react'
import PropTypes from 'prop-types'

export default function HealthEngine (props) {
  const {className, ...restProps} = props

  return (
    <svg className={className} {...restProps} viewBox="0 0 48 38" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(0.000000, 0.000000)">
        <path fill="#5BC0C9" d="M12.894883,32.7452837 C13.1630685,35.6739197 15.6192085,37.9154191 18.5600981,37.9154191 C21.5009878,37.9154191 23.9571278,35.6739197 24.2253133,32.7452837 L24.2253133,25.1600585 L12.894883,25.1600585 L12.894883,32.7452837 L12.894883,32.7452837 Z" />
        <path fill="#5BC0C9" d="M24.2253133,6.2159583 L24.2253133,6.2159583 C24.4219874,4.06823902 23.387262,1.99397789 21.553185,0.8592795 C19.719108,-0.275418886 17.4010882,-0.275418886 15.5670112,0.8592795 C13.7329342,1.99397789 12.6982088,4.06823902 12.894883,6.2159583 L12.894883,6.2159583 L12.894883,13.8011836 L24.2253133,13.8011836 L24.2253133,6.2159583 Z" />
        <path fill="#C6E400" d="M37.489976,25.1410954 L31.801057,25.1410954 L31.801057,32.7263207 C32.0692425,35.6549566 34.5253825,37.896456 37.4662721,37.896456 C40.4071618,37.896456 42.8633018,35.6549566 43.1314873,32.7263207 L43.1314873,19.4521764 C43.1315957,22.5756585 40.6133496,25.1150664 37.489976,25.1410954 L37.489976,25.1410954 Z" />
        <path fill="#C6E400" d="M37.489976,0.546002402 C34.3480728,0.546002402 31.801057,3.09301818 31.801057,6.23492137 L31.801057,13.8201467 L37.489976,13.8201467 C40.6318792,13.8201467 43.1788949,16.3671624 43.1788949,19.5090656 L43.1788949,6.23492137 C43.1788949,3.09301818 40.6318792,0.546002402 37.489976,0.546002402 L37.489976,0.546002402 Z" />
        <path fill="#FFFFFF" d="M5.17013534,14.0434783 C2.24149938,14.3116637 8.42129176e-16,16.7678037 0,19.7086934 C-8.42129176e-16,22.6495831 2.24149938,25.1057231 5.17013534,25.3739085 L12.7553606,25.3739085 L12.7553606,14.0434783 L5.17013534,14.0434783 L5.17013534,14.0434783 Z" />
        <path fill="#FFFFFF" d="m 24.225313,13.820147 h 7.604189 v 11.33043 h -7.604189 z" />
        <path fill="#008EC8" d="m 12.894883,13.820147 h 11.33043 v 11.33043 h -11.33043 z" />
        <path fill="#48B400" d="M37.7640488,13.8201467 L31.801057,13.8201467 L31.801057,25.1410954 L37.7640488,25.1410954 C40.8113797,24.8492731 43.1314873,22.4024989 43.1314873,19.480621 C43.1314873,16.5587431 40.8113797,14.111969 37.7640488,13.8201467 L37.7640488,13.8201467 Z" />
      </g>
    </svg>
  )
}

HealthEngine.propTypes = {
  className: PropTypes.string
}