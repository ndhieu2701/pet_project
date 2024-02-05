import React from 'react'
import { View } from 'react-native'

type Props = {
    open: boolean,
    setOpen: (value: boolean) => void,
    refetch: boolean,
    setRefetch: (value: boolean) => void
}

const ModalAddTask = ({open, setOpen, refetch, setRefetch}: Props) => {
  return (
    <View>

    </View>
  )
}

export default ModalAddTask