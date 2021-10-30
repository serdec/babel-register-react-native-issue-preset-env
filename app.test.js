import React from 'react'
import {describe} from 'riteway';
import {View} from 'react-native';
import {render} from '@testing-library/react-native';

describe('test', async assert => {
  const {queryAllByTestId} = render(<View testID='home'/>)
  assert({
    given: 'no arguments',
    should: 'compare 1 and 1',
    actual: 1,
    expected: queryAllByTestId('home').length,
  })
})