<script>
export default {
  name: 'Icon',
  functional: true,
  inheritAttrs: true,
  props: {
    type: {
      type: String,
      required: true,
    },
    width: {
      type: [String, Number],
    },
    height: {
      type: [String, Number],
    },
    w: {
      type: [String, Number],
    },
    h: {
      type: [String, Number],
    },
    sw: {
      type: [String, Number],
    },
  },
  render(createElement, context) {
    const { data } = context
    data.attrs.width = context.props.width || context.props.w
    data.attrs.height = context.props.height || context.props.h
    const sw = context.props.strokeWidth || context.props.sw
    if (sw != null) {
      data.attrs['stroke-width'] = sw
    }
    return createElement('svg', data, [
      createElement('use', {
        attrs: {
          'xlink:href': `/icons/icons.svg#${context.props.type}`,
        },
      }),
    ])
  },
}
</script>
