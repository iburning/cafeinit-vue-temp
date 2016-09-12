<template src="./_grid.html"></template>

<script>
import config from './_grid'

config.props.ns = {
  type: String,
  default: 'ci-'
}

export default config
</script>
