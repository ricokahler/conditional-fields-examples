import {useDocumentOperation} from '@sanity/react-hooks'
import defaultResolve from 'part:@sanity/base/document-actions'

// See here: https://www.sanity.io/docs/document-actions-api
function usePublishAction(props) {
  const [useOriginalPublishAction] = defaultResolve(props)
  const originalPublishAction = useOriginalPublishAction(props)
  // https://www.sanity.io/docs/studio-react-hooks#c3cb2ad19cf3
  const operation = useDocumentOperation(props.id, props.type)

  return {
    ...originalPublishAction,
    onHandle: async () => {
      if (props.type === 'oneTimeField') {
        const result = operation.patch.execute([{set: {slugLockedIn: true}}])
        console.log(result)
      }

      await originalPublishAction.onHandle?.()
    },
  }
}

export default function resolveDocumentActions(props) {
  return [
    usePublishAction,
    // remove the default publish action
    ...defaultResolve(props).slice(1),
  ]
}
