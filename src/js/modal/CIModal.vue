<template src="./_modal.html"></template>

<script>
import config from './_modal'

config.props.ns = {
  type: String,
  default: 'ci-'
}

export default config
</script>
