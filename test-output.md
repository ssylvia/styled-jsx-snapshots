```sh
| => yarn test --verbose
yarn run v1.12.3
$ jest --verbose
 FAIL  src/components/Button/index.test.tsx
  Button
    ✕ Button handles click (45ms)

  ● Button › Button handles click

    StyleSheetRegistry: styleId: `jsx-undefined` not found.

      at invariant (node_modules/styled-jsx/dist/stylesheet-registry.js:267:11)
      at StyleSheetRegistry.remove (node_modules/styled-jsx/dist/stylesheet-registry.js:108:7)
      at JSXStyle.componentWillUnmount (node_modules/styled-jsx/dist/style.js:53:26)
      at callComponentWillUnmountWithTimer (node_modules/react-dom/cjs/react-dom.development.js:16699:12)
      at HTMLUnknownElement.callCallback (node_modules/react-dom/cjs/react-dom.development.js:149:14)
      at invokeEventListeners (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:193:27)
      at HTMLUnknownElementImpl._dispatch (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:119:9)
      at HTMLUnknownElementImpl.dispatchEvent (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:82:17)
      at HTMLUnknownElementImpl.dispatchEvent (node_modules/jsdom/lib/jsdom/living/nodes/HTMLElement-impl.js:30:27)
      at HTMLUnknownElement.dispatchEvent (node_modules/jsdom/lib/jsdom/living/generated/EventTarget.js:157:21)
      at Object.invokeGuardedCallbackDev (node_modules/react-dom/cjs/react-dom.development.js:199:16)
      at invokeGuardedCallback (node_modules/react-dom/cjs/react-dom.development.js:256:31)
      at safelyCallComponentWillUnmount (node_modules/react-dom/cjs/react-dom.development.js:16706:5)
      at commitUnmount (node_modules/react-dom/cjs/react-dom.development.js:17083:11)
      at commitNestedUnmounts (node_modules/react-dom/cjs/react-dom.development.js:17114:5)
      at unmountHostComponents (node_modules/react-dom/cjs/react-dom.development.js:17375:7)
      at commitDeletion (node_modules/react-dom/cjs/react-dom.development.js:17427:5)
      at commitAllHostEffects (node_modules/react-dom/cjs/react-dom.development.js:18168:11)
      at HTMLUnknownElement.callCallback (node_modules/react-dom/cjs/react-dom.development.js:149:14)
      at invokeEventListeners (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:193:27)
      at HTMLUnknownElementImpl._dispatch (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:119:9)
      at HTMLUnknownElementImpl.dispatchEvent (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:82:17)
      at HTMLUnknownElementImpl.dispatchEvent (node_modules/jsdom/lib/jsdom/living/nodes/HTMLElement-impl.js:30:27)
      at HTMLUnknownElement.dispatchEvent (node_modules/jsdom/lib/jsdom/living/generated/EventTarget.js:157:21)
      at Object.invokeGuardedCallbackDev (node_modules/react-dom/cjs/react-dom.development.js:199:16)
      at invokeGuardedCallback (node_modules/react-dom/cjs/react-dom.development.js:256:31)
      at commitRoot (node_modules/react-dom/cjs/react-dom.development.js:18392:7)
      at completeRoot (node_modules/react-dom/cjs/react-dom.development.js:19884:3)
      at performWorkOnRoot (node_modules/react-dom/cjs/react-dom.development.js:19813:9)
      at performWork (node_modules/react-dom/cjs/react-dom.development.js:19721:7)
      at performSyncWork (node_modules/react-dom/cjs/react-dom.development.js:19695:3)
      at requestWork (node_modules/react-dom/cjs/react-dom.development.js:19564:5)
      at scheduleWork (node_modules/react-dom/cjs/react-dom.development.js:19373:5)
      at scheduleRootUpdate (node_modules/react-dom/cjs/react-dom.development.js:20041:3)
      at updateContainerAtExpirationTime (node_modules/react-dom/cjs/react-dom.development.js:20069:10)
      at updateContainer (node_modules/react-dom/cjs/react-dom.development.js:20126:10)
      at ReactRoot.Object.<anonymous>.ReactRoot.render (node_modules/react-dom/cjs/react-dom.development.js:20422:3)
      at legacyRenderSubtreeIntoContainer (node_modules/react-dom/cjs/react-dom.development.js:20574:12)
      at node_modules/react-dom/cjs/react-dom.development.js:20647:9
      at unbatchedUpdates (node_modules/react-dom/cjs/react-dom.development.js:19924:10)
      at Object.unmountComponentAtNode (node_modules/react-dom/cjs/react-dom.development.js:20646:7)
      at cleanupAtContainer (node_modules/react-testing-library/dist/index.js:154:21)
          at Set.forEach (<anonymous>)
      at Object.cleanup (node_modules/react-testing-library/dist/index.js:144:21)

  console.error node_modules/jsdom/lib/jsdom/virtual-console.js:29
    Error: Uncaught [Error: StyleSheetRegistry: styleId: `jsx-undefined` not found.]
        at reportException (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/jsdom/lib/jsdom/living/helpers/runtime-script-errors.js:66:24)
        at invokeEventListeners (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:209:9)
        at HTMLUnknownElementImpl._dispatch (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:119:9)
        at HTMLUnknownElementImpl.dispatchEvent (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:82:17)
        at HTMLUnknownElementImpl.dispatchEvent (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/jsdom/lib/jsdom/living/nodes/HTMLElement-impl.js:30:27)
        at HTMLUnknownElement.dispatchEvent (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/jsdom/lib/jsdom/living/generated/EventTarget.js:157:21)
        at Object.invokeGuardedCallbackDev (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/react-dom/cjs/react-dom.development.js:199:16)
        at invokeGuardedCallback (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/react-dom/cjs/react-dom.development.js:256:31)
        at safelyCallComponentWillUnmount (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/react-dom/cjs/react-dom.development.js:16706:5)
        at commitUnmount (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/react-dom/cjs/react-dom.development.js:17083:11) Error: StyleSheetRegistry: styleId: `jsx-undefined` not found.
        at invariant (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/styled-jsx/dist/stylesheet-registry.js:267:11)
        at StyleSheetRegistry.remove (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/styled-jsx/dist/stylesheet-registry.js:108:7)
        at JSXStyle.componentWillUnmount (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/styled-jsx/dist/style.js:53:26)
        at callComponentWillUnmountWithTimer (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/react-dom/cjs/react-dom.development.js:16699:12)
        at HTMLUnknownElement.callCallback (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/react-dom/cjs/react-dom.development.js:149:14)
        at invokeEventListeners (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:193:27)
        at HTMLUnknownElementImpl._dispatch (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:119:9)
        at HTMLUnknownElementImpl.dispatchEvent (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:82:17)
        at HTMLUnknownElementImpl.dispatchEvent (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/jsdom/lib/jsdom/living/nodes/HTMLElement-impl.js:30:27)
        at HTMLUnknownElement.dispatchEvent (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/jsdom/lib/jsdom/living/generated/EventTarget.js:157:21)
        at Object.invokeGuardedCallbackDev (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/react-dom/cjs/react-dom.development.js:199:16)
        at invokeGuardedCallback (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/react-dom/cjs/react-dom.development.js:256:31)
        at safelyCallComponentWillUnmount (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/react-dom/cjs/react-dom.development.js:16706:5)
        at commitUnmount (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/react-dom/cjs/react-dom.development.js:17083:11)
        at commitNestedUnmounts (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/react-dom/cjs/react-dom.development.js:17114:5)
        at unmountHostComponents (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/react-dom/cjs/react-dom.development.js:17375:7)
        at commitDeletion (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/react-dom/cjs/react-dom.development.js:17427:5)
        at commitAllHostEffects (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/react-dom/cjs/react-dom.development.js:18168:11)
        at HTMLUnknownElement.callCallback (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/react-dom/cjs/react-dom.development.js:149:14)
        at invokeEventListeners (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:193:27)
        at HTMLUnknownElementImpl._dispatch (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:119:9)
        at HTMLUnknownElementImpl.dispatchEvent (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:82:17)
        at HTMLUnknownElementImpl.dispatchEvent (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/jsdom/lib/jsdom/living/nodes/HTMLElement-impl.js:30:27)
        at HTMLUnknownElement.dispatchEvent (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/jsdom/lib/jsdom/living/generated/EventTarget.js:157:21)
        at Object.invokeGuardedCallbackDev (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/react-dom/cjs/react-dom.development.js:199:16)
        at invokeGuardedCallback (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/react-dom/cjs/react-dom.development.js:256:31)
        at commitRoot (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/react-dom/cjs/react-dom.development.js:18392:7)
        at completeRoot (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/react-dom/cjs/react-dom.development.js:19884:3)
        at performWorkOnRoot (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/react-dom/cjs/react-dom.development.js:19813:9)
        at performWork (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/react-dom/cjs/react-dom.development.js:19721:7)
        at performSyncWork (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/react-dom/cjs/react-dom.development.js:19695:3)
        at requestWork (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/react-dom/cjs/react-dom.development.js:19564:5)
        at scheduleWork (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/react-dom/cjs/react-dom.development.js:19373:5)
        at scheduleRootUpdate (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/react-dom/cjs/react-dom.development.js:20041:3)
        at updateContainerAtExpirationTime (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/react-dom/cjs/react-dom.development.js:20069:10)
        at updateContainer (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/react-dom/cjs/react-dom.development.js:20126:10)
        at ReactRoot.Object.<anonymous>.ReactRoot.render (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/react-dom/cjs/react-dom.development.js:20422:3)
        at legacyRenderSubtreeIntoContainer (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/react-dom/cjs/react-dom.development.js:20574:12)
        at /Users/step6692/development/github/styled-jsx-snapshots/node_modules/react-dom/cjs/react-dom.development.js:20647:9
        at unbatchedUpdates (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/react-dom/cjs/react-dom.development.js:19924:10)
        at Object.unmountComponentAtNode (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/react-dom/cjs/react-dom.development.js:20646:7)
        at cleanupAtContainer (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/react-testing-library/dist/index.js:154:21)
        at Set.forEach (<anonymous>)
        at Object.cleanup (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/react-testing-library/dist/index.js:144:21)
        at Object.asyncJestLifecycle (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/jest-jasmine2/build/jasmineAsyncInstall.js:53:37)
        at resolve (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/jest-jasmine2/build/queueRunner.js:41:12)
        at new Promise (<anonymous>)
        at mapper (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/jest-jasmine2/build/queueRunner.js:26:19)
        at promise.then (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/jest-jasmine2/build/queueRunner.js:71:41)
        at process._tickCallback (internal/process/next_tick.js:68:7)

  console.error node_modules/react-dom/cjs/react-dom.development.js:16647
    The above error occurred in the <JSXStyle> component:
        in JSXStyle (created by _default)
        in button (at Button/index.tsx:10)
        in _default (at Button/index.test.tsx:11)

    Consider adding an error boundary to your tree to customize error handling behavior.
    Visit https://fb.me/react-error-boundaries to learn more about error boundaries.

 FAIL  src/storyshots.test.js
  Storyshots
    Button
      ✕ with text (35ms)
    IconClose
      ✕ Default (11ms)
      ✕ With Class (1ms)
      ✕ With Color (1ms)
      ✕ With a11y Title (1ms)
    IconSearch
      ✕ Default (1ms)
      ✕ With Class (1ms)
      ✕ With Color (1ms)
      ✕ With a11y Title (1ms)
    SearchBox
      ✕ Default (5ms)

  ● Storyshots › Button › with text

    StyleSheetRegistry: styleId: `jsx-undefined` not found.

      at invariant (node_modules/styled-jsx/dist/stylesheet-registry.js:267:11)
      at StyleSheetRegistry.remove (node_modules/styled-jsx/dist/stylesheet-registry.js:108:7)
      at JSXStyle.componentWillUnmount (node_modules/styled-jsx/dist/style.js:53:26)
      at callComponentWillUnmountWithTimer (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:8903:12)
      at HTMLUnknownElement.callCallback (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:2365:14)
      at invokeEventListeners (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:193:27)
      at HTMLUnknownElementImpl._dispatch (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:119:9)
      at HTMLUnknownElementImpl.dispatchEvent (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:82:17)
      at HTMLUnknownElementImpl.dispatchEvent (node_modules/jsdom/lib/jsdom/living/nodes/HTMLElement-impl.js:30:27)
      at HTMLUnknownElement.dispatchEvent (node_modules/jsdom/lib/jsdom/living/generated/EventTarget.js:157:21)
      at Object.invokeGuardedCallbackDev (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:2415:16)
      at invokeGuardedCallback (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:2468:31)
      at safelyCallComponentWillUnmount (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:8910:5)
      at commitUnmount (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:9287:11)
      at commitNestedUnmounts (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:9318:5)
      at unmountHostComponents (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:9577:7)
      at commitDeletion (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:9629:5)
      at commitAllHostEffects (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:10367:11)
      at HTMLUnknownElement.callCallback (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:2365:14)
      at invokeEventListeners (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:193:27)
      at HTMLUnknownElementImpl._dispatch (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:119:9)
      at HTMLUnknownElementImpl.dispatchEvent (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:82:17)
      at HTMLUnknownElementImpl.dispatchEvent (node_modules/jsdom/lib/jsdom/living/nodes/HTMLElement-impl.js:30:27)
      at HTMLUnknownElement.dispatchEvent (node_modules/jsdom/lib/jsdom/living/generated/EventTarget.js:157:21)
      at Object.invokeGuardedCallbackDev (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:2415:16)
      at invokeGuardedCallback (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:2468:31)
      at commitRoot (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:10591:7)
      at completeRoot (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:12060:3)
      at performWorkOnRoot (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11989:9)
      at performWork (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11897:7)
      at performSyncWork (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11871:3)
      at requestWork (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11740:5)
      at scheduleWork (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11550:5)
      at scheduleRootUpdate (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:12152:3)
      at updateContainerAtExpirationTime (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:12180:10)
      at updateContainer (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:12191:10)
      at Object.unmount (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:12675:9)
      at match (node_modules/@storybook/addon-storyshots/dist/test-bodies.js:31:12)
      at node_modules/@storybook/addon-storyshots/dist/test-bodies.js:39:10
      at Object.<anonymous> (node_modules/@storybook/addon-storyshots/dist/api/snapshotsTestsTemplate.js:46:33)

  ● Storyshots › IconClose › Default

    TypeError: Cannot read property 'replace' of undefined

      at StyleSheetRegistry.computeSelector (node_modules/styled-jsx/dist/stylesheet-registry.js:209:30)
      at StyleSheetRegistry.getIdAndRules (node_modules/styled-jsx/dist/stylesheet-registry.js:230:22)
      at StyleSheetRegistry.add (node_modules/styled-jsx/dist/stylesheet-registry.js:77:33)
      at JSXStyle.render (node_modules/styled-jsx/dist/style.js:65:28)
      at finishClassComponent (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:6604:31)
      at updateClassComponent (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:6559:24)
      at beginWork (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:7426:16)
      at performUnitOfWork (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:10996:12)
      at workLoop (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11028:24)
      at renderRoot (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11111:7)
      at performWorkOnRoot (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11985:7)
      at performWork (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11897:7)
      at performSyncWork (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11871:3)
      at requestWork (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11740:5)
      at scheduleWork (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11550:5)
      at scheduleRootUpdate (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:12152:3)
      at updateContainerAtExpirationTime (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:12180:10)
      at updateContainer (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:12191:10)
      at create (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:12624:5)
      at getRenderedTree (node_modules/@storybook/addon-storyshots/dist/frameworks/react/renderTree.js:25:16)
      at node_modules/@storybook/addon-storyshots/dist/test-bodies.js:21:18
      at Object.<anonymous> (node_modules/@storybook/addon-storyshots/dist/api/snapshotsTestsTemplate.js:46:33)

  ● Storyshots › IconClose › With Class

    TypeError: Cannot read property 'replace' of undefined

      at StyleSheetRegistry.computeSelector (node_modules/styled-jsx/dist/stylesheet-registry.js:209:30)
      at StyleSheetRegistry.getIdAndRules (node_modules/styled-jsx/dist/stylesheet-registry.js:230:22)
      at StyleSheetRegistry.add (node_modules/styled-jsx/dist/stylesheet-registry.js:77:33)
      at JSXStyle.render (node_modules/styled-jsx/dist/style.js:65:28)
      at finishClassComponent (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:6604:31)
      at updateClassComponent (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:6559:24)
      at beginWork (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:7426:16)
      at performUnitOfWork (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:10996:12)
      at workLoop (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11028:24)
      at renderRoot (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11111:7)
      at performWorkOnRoot (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11985:7)
      at performWork (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11897:7)
      at performSyncWork (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11871:3)
      at requestWork (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11740:5)
      at scheduleWork (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11550:5)
      at scheduleRootUpdate (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:12152:3)
      at updateContainerAtExpirationTime (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:12180:10)
      at updateContainer (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:12191:10)
      at create (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:12624:5)
      at getRenderedTree (node_modules/@storybook/addon-storyshots/dist/frameworks/react/renderTree.js:25:16)
      at node_modules/@storybook/addon-storyshots/dist/test-bodies.js:21:18
      at Object.<anonymous> (node_modules/@storybook/addon-storyshots/dist/api/snapshotsTestsTemplate.js:46:33)

  ● Storyshots › IconClose › With Color

    TypeError: Cannot read property 'replace' of undefined

      at StyleSheetRegistry.computeSelector (node_modules/styled-jsx/dist/stylesheet-registry.js:209:30)
      at StyleSheetRegistry.getIdAndRules (node_modules/styled-jsx/dist/stylesheet-registry.js:230:22)
      at StyleSheetRegistry.add (node_modules/styled-jsx/dist/stylesheet-registry.js:77:33)
      at JSXStyle.render (node_modules/styled-jsx/dist/style.js:65:28)
      at finishClassComponent (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:6604:31)
      at updateClassComponent (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:6559:24)
      at beginWork (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:7426:16)
      at performUnitOfWork (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:10996:12)
      at workLoop (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11028:24)
      at renderRoot (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11111:7)
      at performWorkOnRoot (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11985:7)
      at performWork (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11897:7)
      at performSyncWork (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11871:3)
      at requestWork (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11740:5)
      at scheduleWork (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11550:5)
      at scheduleRootUpdate (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:12152:3)
      at updateContainerAtExpirationTime (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:12180:10)
      at updateContainer (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:12191:10)
      at create (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:12624:5)
      at getRenderedTree (node_modules/@storybook/addon-storyshots/dist/frameworks/react/renderTree.js:25:16)
      at node_modules/@storybook/addon-storyshots/dist/test-bodies.js:21:18
      at Object.<anonymous> (node_modules/@storybook/addon-storyshots/dist/api/snapshotsTestsTemplate.js:46:33)

  ● Storyshots › IconClose › With a11y Title

    TypeError: Cannot read property 'replace' of undefined

      at StyleSheetRegistry.computeSelector (node_modules/styled-jsx/dist/stylesheet-registry.js:209:30)
      at StyleSheetRegistry.getIdAndRules (node_modules/styled-jsx/dist/stylesheet-registry.js:230:22)
      at StyleSheetRegistry.add (node_modules/styled-jsx/dist/stylesheet-registry.js:77:33)
      at JSXStyle.render (node_modules/styled-jsx/dist/style.js:65:28)
      at finishClassComponent (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:6604:31)
      at updateClassComponent (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:6559:24)
      at beginWork (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:7426:16)
      at performUnitOfWork (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:10996:12)
      at workLoop (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11028:24)
      at renderRoot (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11111:7)
      at performWorkOnRoot (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11985:7)
      at performWork (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11897:7)
      at performSyncWork (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11871:3)
      at requestWork (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11740:5)
      at scheduleWork (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11550:5)
      at scheduleRootUpdate (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:12152:3)
      at updateContainerAtExpirationTime (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:12180:10)
      at updateContainer (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:12191:10)
      at create (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:12624:5)
      at getRenderedTree (node_modules/@storybook/addon-storyshots/dist/frameworks/react/renderTree.js:25:16)
      at node_modules/@storybook/addon-storyshots/dist/test-bodies.js:21:18
      at Object.<anonymous> (node_modules/@storybook/addon-storyshots/dist/api/snapshotsTestsTemplate.js:46:33)

  ● Storyshots › IconSearch › Default

    TypeError: Cannot read property 'replace' of undefined

      at StyleSheetRegistry.computeSelector (node_modules/styled-jsx/dist/stylesheet-registry.js:209:30)
      at StyleSheetRegistry.getIdAndRules (node_modules/styled-jsx/dist/stylesheet-registry.js:230:22)
      at StyleSheetRegistry.add (node_modules/styled-jsx/dist/stylesheet-registry.js:77:33)
      at JSXStyle.render (node_modules/styled-jsx/dist/style.js:65:28)
      at finishClassComponent (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:6604:31)
      at updateClassComponent (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:6559:24)
      at beginWork (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:7426:16)
      at performUnitOfWork (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:10996:12)
      at workLoop (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11028:24)
      at renderRoot (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11111:7)
      at performWorkOnRoot (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11985:7)
      at performWork (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11897:7)
      at performSyncWork (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11871:3)
      at requestWork (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11740:5)
      at scheduleWork (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11550:5)
      at scheduleRootUpdate (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:12152:3)
      at updateContainerAtExpirationTime (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:12180:10)
      at updateContainer (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:12191:10)
      at create (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:12624:5)
      at getRenderedTree (node_modules/@storybook/addon-storyshots/dist/frameworks/react/renderTree.js:25:16)
      at node_modules/@storybook/addon-storyshots/dist/test-bodies.js:21:18
      at Object.<anonymous> (node_modules/@storybook/addon-storyshots/dist/api/snapshotsTestsTemplate.js:46:33)

  ● Storyshots › IconSearch › With Class

    TypeError: Cannot read property 'replace' of undefined

      at StyleSheetRegistry.computeSelector (node_modules/styled-jsx/dist/stylesheet-registry.js:209:30)
      at StyleSheetRegistry.getIdAndRules (node_modules/styled-jsx/dist/stylesheet-registry.js:230:22)
      at StyleSheetRegistry.add (node_modules/styled-jsx/dist/stylesheet-registry.js:77:33)
      at JSXStyle.render (node_modules/styled-jsx/dist/style.js:65:28)
      at finishClassComponent (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:6604:31)
      at updateClassComponent (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:6559:24)
      at beginWork (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:7426:16)
      at performUnitOfWork (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:10996:12)
      at workLoop (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11028:24)
      at renderRoot (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11111:7)
      at performWorkOnRoot (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11985:7)
      at performWork (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11897:7)
      at performSyncWork (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11871:3)
      at requestWork (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11740:5)
      at scheduleWork (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11550:5)
      at scheduleRootUpdate (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:12152:3)
      at updateContainerAtExpirationTime (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:12180:10)
      at updateContainer (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:12191:10)
      at create (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:12624:5)
      at getRenderedTree (node_modules/@storybook/addon-storyshots/dist/frameworks/react/renderTree.js:25:16)
      at node_modules/@storybook/addon-storyshots/dist/test-bodies.js:21:18
      at Object.<anonymous> (node_modules/@storybook/addon-storyshots/dist/api/snapshotsTestsTemplate.js:46:33)

  ● Storyshots › IconSearch › With Color

    TypeError: Cannot read property 'replace' of undefined

      at StyleSheetRegistry.computeSelector (node_modules/styled-jsx/dist/stylesheet-registry.js:209:30)
      at StyleSheetRegistry.getIdAndRules (node_modules/styled-jsx/dist/stylesheet-registry.js:230:22)
      at StyleSheetRegistry.add (node_modules/styled-jsx/dist/stylesheet-registry.js:77:33)
      at JSXStyle.render (node_modules/styled-jsx/dist/style.js:65:28)
      at finishClassComponent (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:6604:31)
      at updateClassComponent (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:6559:24)
      at beginWork (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:7426:16)
      at performUnitOfWork (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:10996:12)
      at workLoop (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11028:24)
      at renderRoot (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11111:7)
      at performWorkOnRoot (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11985:7)
      at performWork (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11897:7)
      at performSyncWork (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11871:3)
      at requestWork (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11740:5)
      at scheduleWork (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11550:5)
      at scheduleRootUpdate (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:12152:3)
      at updateContainerAtExpirationTime (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:12180:10)
      at updateContainer (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:12191:10)
      at create (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:12624:5)
      at getRenderedTree (node_modules/@storybook/addon-storyshots/dist/frameworks/react/renderTree.js:25:16)
      at node_modules/@storybook/addon-storyshots/dist/test-bodies.js:21:18
      at Object.<anonymous> (node_modules/@storybook/addon-storyshots/dist/api/snapshotsTestsTemplate.js:46:33)

  ● Storyshots › IconSearch › With a11y Title

    TypeError: Cannot read property 'replace' of undefined

      at StyleSheetRegistry.computeSelector (node_modules/styled-jsx/dist/stylesheet-registry.js:209:30)
      at StyleSheetRegistry.getIdAndRules (node_modules/styled-jsx/dist/stylesheet-registry.js:230:22)
      at StyleSheetRegistry.add (node_modules/styled-jsx/dist/stylesheet-registry.js:77:33)
      at JSXStyle.render (node_modules/styled-jsx/dist/style.js:65:28)
      at finishClassComponent (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:6604:31)
      at updateClassComponent (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:6559:24)
      at beginWork (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:7426:16)
      at performUnitOfWork (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:10996:12)
      at workLoop (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11028:24)
      at renderRoot (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11111:7)
      at performWorkOnRoot (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11985:7)
      at performWork (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11897:7)
      at performSyncWork (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11871:3)
      at requestWork (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11740:5)
      at scheduleWork (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11550:5)
      at scheduleRootUpdate (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:12152:3)
      at updateContainerAtExpirationTime (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:12180:10)
      at updateContainer (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:12191:10)
      at create (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:12624:5)
      at getRenderedTree (node_modules/@storybook/addon-storyshots/dist/frameworks/react/renderTree.js:25:16)
      at node_modules/@storybook/addon-storyshots/dist/test-bodies.js:21:18
      at Object.<anonymous> (node_modules/@storybook/addon-storyshots/dist/api/snapshotsTestsTemplate.js:46:33)

  ● Storyshots › SearchBox › Default

    TypeError: Cannot read property 'replace' of undefined

      at StyleSheetRegistry.computeSelector (node_modules/styled-jsx/dist/stylesheet-registry.js:209:30)
      at StyleSheetRegistry.getIdAndRules (node_modules/styled-jsx/dist/stylesheet-registry.js:230:22)
      at StyleSheetRegistry.add (node_modules/styled-jsx/dist/stylesheet-registry.js:77:33)
      at JSXStyle.render (node_modules/styled-jsx/dist/style.js:65:28)
      at finishClassComponent (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:6604:31)
      at updateClassComponent (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:6559:24)
      at beginWork (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:7426:16)
      at performUnitOfWork (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:10996:12)
      at workLoop (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11028:24)
      at renderRoot (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11111:7)
      at performWorkOnRoot (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11985:7)
      at performWork (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11897:7)
      at performSyncWork (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11871:3)
      at requestWork (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11740:5)
      at scheduleWork (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11550:5)
      at scheduleRootUpdate (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:12152:3)
      at updateContainerAtExpirationTime (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:12180:10)
      at updateContainer (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:12191:10)
      at create (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:12624:5)
      at getRenderedTree (node_modules/@storybook/addon-storyshots/dist/frameworks/react/renderTree.js:25:16)
      at node_modules/@storybook/addon-storyshots/dist/test-bodies.js:21:18
      at Object.<anonymous> (node_modules/@storybook/addon-storyshots/dist/api/snapshotsTestsTemplate.js:46:33)

Test Suites: 2 failed, 2 total
Tests:       11 failed, 11 total
Snapshots:   1 passed, 1 total
Time:        4.459s
Ran all test suites.
  console.error node_modules/jsdom/lib/jsdom/virtual-console.js:29
    Error: Uncaught [Error: StyleSheetRegistry: styleId: `jsx-undefined` not found.]
        at reportException (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/jsdom/lib/jsdom/living/helpers/runtime-script-errors.js:66:24)
        at invokeEventListeners (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:209:9)
        at HTMLUnknownElementImpl._dispatch (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:119:9)
        at HTMLUnknownElementImpl.dispatchEvent (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:82:17)
        at HTMLUnknownElementImpl.dispatchEvent (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/jsdom/lib/jsdom/living/nodes/HTMLElement-impl.js:30:27)
        at HTMLUnknownElement.dispatchEvent (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/jsdom/lib/jsdom/living/generated/EventTarget.js:157:21)
        at Object.invokeGuardedCallbackDev (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/react-test-renderer/cjs/react-test-renderer.development.js:2415:16)
        at invokeGuardedCallback (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/react-test-renderer/cjs/react-test-renderer.development.js:2468:31)
        at safelyCallComponentWillUnmount (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/react-test-renderer/cjs/react-test-renderer.development.js:8910:5)
        at commitUnmount (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/react-test-renderer/cjs/react-test-renderer.development.js:9287:11) Error: StyleSheetRegistry: styleId: `jsx-undefined` not found.
        at invariant (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/styled-jsx/dist/stylesheet-registry.js:267:11)
        at StyleSheetRegistry.remove (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/styled-jsx/dist/stylesheet-registry.js:108:7)
        at JSXStyle.componentWillUnmount (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/styled-jsx/dist/style.js:53:26)
        at callComponentWillUnmountWithTimer (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/react-test-renderer/cjs/react-test-renderer.development.js:8903:12)
        at HTMLUnknownElement.callCallback (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/react-test-renderer/cjs/react-test-renderer.development.js:2365:14)
        at invokeEventListeners (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:193:27)
        at HTMLUnknownElementImpl._dispatch (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:119:9)
        at HTMLUnknownElementImpl.dispatchEvent (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:82:17)
        at HTMLUnknownElementImpl.dispatchEvent (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/jsdom/lib/jsdom/living/nodes/HTMLElement-impl.js:30:27)
        at HTMLUnknownElement.dispatchEvent (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/jsdom/lib/jsdom/living/generated/EventTarget.js:157:21)
        at Object.invokeGuardedCallbackDev (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/react-test-renderer/cjs/react-test-renderer.development.js:2415:16)
        at invokeGuardedCallback (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/react-test-renderer/cjs/react-test-renderer.development.js:2468:31)
        at safelyCallComponentWillUnmount (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/react-test-renderer/cjs/react-test-renderer.development.js:8910:5)
        at commitUnmount (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/react-test-renderer/cjs/react-test-renderer.development.js:9287:11)
        at commitNestedUnmounts (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/react-test-renderer/cjs/react-test-renderer.development.js:9318:5)
        at unmountHostComponents (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/react-test-renderer/cjs/react-test-renderer.development.js:9577:7)
        at commitDeletion (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/react-test-renderer/cjs/react-test-renderer.development.js:9629:5)
        at commitAllHostEffects (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/react-test-renderer/cjs/react-test-renderer.development.js:10367:11)
        at HTMLUnknownElement.callCallback (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/react-test-renderer/cjs/react-test-renderer.development.js:2365:14)
        at invokeEventListeners (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:193:27)
        at HTMLUnknownElementImpl._dispatch (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:119:9)
        at HTMLUnknownElementImpl.dispatchEvent (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:82:17)
        at HTMLUnknownElementImpl.dispatchEvent (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/jsdom/lib/jsdom/living/nodes/HTMLElement-impl.js:30:27)
        at HTMLUnknownElement.dispatchEvent (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/jsdom/lib/jsdom/living/generated/EventTarget.js:157:21)
        at Object.invokeGuardedCallbackDev (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/react-test-renderer/cjs/react-test-renderer.development.js:2415:16)
        at invokeGuardedCallback (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/react-test-renderer/cjs/react-test-renderer.development.js:2468:31)
        at commitRoot (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/react-test-renderer/cjs/react-test-renderer.development.js:10591:7)
        at completeRoot (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/react-test-renderer/cjs/react-test-renderer.development.js:12060:3)
        at performWorkOnRoot (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11989:9)
        at performWork (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11897:7)
        at performSyncWork (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11871:3)
        at requestWork (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11740:5)
        at scheduleWork (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11550:5)
        at scheduleRootUpdate (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/react-test-renderer/cjs/react-test-renderer.development.js:12152:3)
        at updateContainerAtExpirationTime (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/react-test-renderer/cjs/react-test-renderer.development.js:12180:10)
        at updateContainer (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/react-test-renderer/cjs/react-test-renderer.development.js:12191:10)
        at Object.unmount (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/react-test-renderer/cjs/react-test-renderer.development.js:12675:9)
        at match (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/@storybook/addon-storyshots/dist/test-bodies.js:31:12)
        at /Users/step6692/development/github/styled-jsx-snapshots/node_modules/@storybook/addon-storyshots/dist/test-bodies.js:39:10
        at Object.<anonymous> (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/@storybook/addon-storyshots/dist/api/snapshotsTestsTemplate.js:46:33)
        at Object.asyncJestTest (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/jest-jasmine2/build/jasmineAsyncInstall.js:102:37)
        at resolve (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/jest-jasmine2/build/queueRunner.js:41:12)
        at new Promise (<anonymous>)
        at mapper (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/jest-jasmine2/build/queueRunner.js:26:19)
        at promise.then (/Users/step6692/development/github/styled-jsx-snapshots/node_modules/jest-jasmine2/build/queueRunner.js:71:41)
        at process._tickCallback (internal/process/next_tick.js:68:7)

  console.error node_modules/react-test-renderer/cjs/react-test-renderer.development.js:8851
    The above error occurred in the <JSXStyle> component:
        in JSXStyle (created by _default)
        in button (at Button/index.tsx:10)
        in _default (at Button/index.stories.tsx:7)

    Consider adding an error boundary to your tree to customize error handling behavior.
    Visit https://fb.me/react-error-boundaries to learn more about error boundaries.

  console.error node_modules/react-test-renderer/cjs/react-test-renderer.development.js:8851
    The above error occurred in the <JSXStyle> component:
        in JSXStyle (created by IconClose)
        in span (at IconBase.tsx:50)
        in IconClose (at _iconStoriesGenerator.stories-helper.tsx:14)
        in div (at _iconStoriesGenerator.stories-helper.tsx:13)

    Consider adding an error boundary to your tree to customize error handling behavior.
    Visit https://fb.me/react-error-boundaries to learn more about error boundaries.

  console.error node_modules/react-test-renderer/cjs/react-test-renderer.development.js:8851
    The above error occurred in the <JSXStyle> component:
        in JSXStyle (created by IconClose)
        in span (at IconBase.tsx:50)
        in IconClose (at _iconStoriesGenerator.stories-helper.tsx:24)
        in div (at _iconStoriesGenerator.stories-helper.tsx:23)

    Consider adding an error boundary to your tree to customize error handling behavior.
    Visit https://fb.me/react-error-boundaries to learn more about error boundaries.

  console.error node_modules/react-test-renderer/cjs/react-test-renderer.development.js:8851
    The above error occurred in the <JSXStyle> component:
        in JSXStyle (created by IconClose)
        in span (at IconBase.tsx:50)
        in IconClose (at _iconStoriesGenerator.stories-helper.tsx:34)
        in div (at _iconStoriesGenerator.stories-helper.tsx:33)

    Consider adding an error boundary to your tree to customize error handling behavior.
    Visit https://fb.me/react-error-boundaries to learn more about error boundaries.

  console.error node_modules/react-test-renderer/cjs/react-test-renderer.development.js:8851
    The above error occurred in the <JSXStyle> component:
        in JSXStyle (created by IconClose)
        in span (at IconBase.tsx:50)
        in IconClose (at _iconStoriesGenerator.stories-helper.tsx:44)
        in div (at _iconStoriesGenerator.stories-helper.tsx:43)

    Consider adding an error boundary to your tree to customize error handling behavior.
    Visit https://fb.me/react-error-boundaries to learn more about error boundaries.

  console.error node_modules/react-test-renderer/cjs/react-test-renderer.development.js:8851
    The above error occurred in the <JSXStyle> component:
        in JSXStyle (created by IconSearch)
        in span (at IconBase.tsx:50)
        in IconSearch (at _iconStoriesGenerator.stories-helper.tsx:14)
        in div (at _iconStoriesGenerator.stories-helper.tsx:13)

    Consider adding an error boundary to your tree to customize error handling behavior.
    Visit https://fb.me/react-error-boundaries to learn more about error boundaries.

  console.error node_modules/react-test-renderer/cjs/react-test-renderer.development.js:8851
    The above error occurred in the <JSXStyle> component:
        in JSXStyle (created by IconSearch)
        in span (at IconBase.tsx:50)
        in IconSearch (at _iconStoriesGenerator.stories-helper.tsx:24)
        in div (at _iconStoriesGenerator.stories-helper.tsx:23)

    Consider adding an error boundary to your tree to customize error handling behavior.
    Visit https://fb.me/react-error-boundaries to learn more about error boundaries.

  console.error node_modules/react-test-renderer/cjs/react-test-renderer.development.js:8851
    The above error occurred in the <JSXStyle> component:
        in JSXStyle (created by IconSearch)
        in span (at IconBase.tsx:50)
        in IconSearch (at _iconStoriesGenerator.stories-helper.tsx:34)
        in div (at _iconStoriesGenerator.stories-helper.tsx:33)

    Consider adding an error boundary to your tree to customize error handling behavior.
    Visit https://fb.me/react-error-boundaries to learn more about error boundaries.

  console.error node_modules/react-test-renderer/cjs/react-test-renderer.development.js:8851
    The above error occurred in the <JSXStyle> component:
        in JSXStyle (created by IconSearch)
        in span (at IconBase.tsx:50)
        in IconSearch (at _iconStoriesGenerator.stories-helper.tsx:44)
        in div (at _iconStoriesGenerator.stories-helper.tsx:43)

    Consider adding an error boundary to your tree to customize error handling behavior.
    Visit https://fb.me/react-error-boundaries to learn more about error boundaries.

  console.error node_modules/react-test-renderer/cjs/react-test-renderer.development.js:8851
    The above error occurred in the <JSXStyle> component:
        in JSXStyle (created by IconSearch)
        in span (at IconBase.tsx:50)
        in IconSearch (at SearchBox/index.tsx:45)
        in div (at SearchBox/index.tsx:43)
        in SearchBox (at SearchBox/index.stories.tsx:11)

    Consider adding an error boundary to your tree to customize error handling behavior.
    Visit https://fb.me/react-error-boundaries to learn more about error boundaries.

  console.error node_modules/react-test-renderer/cjs/react-test-renderer.development.js:8851
    The above error occurred in the <JSXStyle> component:
        in JSXStyle (created by IconClose)
        in span (at IconBase.tsx:50)
        in IconClose (at SearchBox/index.tsx:62)
        in button (at SearchBox/index.tsx:56)
        in div (at SearchBox/index.tsx:43)
        in SearchBox (at SearchBox/index.stories.tsx:11)

    Consider adding an error boundary to your tree to customize error handling behavior.
    Visit https://fb.me/react-error-boundaries to learn more about error boundaries.

  console.error node_modules/react-test-renderer/cjs/react-test-renderer.development.js:8851
    The above error occurred in the <JSXStyle> component:
        in JSXStyle (created by SearchBox)
        in div (at SearchBox/index.tsx:43)
        in SearchBox (at SearchBox/index.stories.tsx:11)

    Consider adding an error boundary to your tree to customize error handling behavior.
    Visit https://fb.me/react-error-boundaries to learn more about error boundaries.

error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
________________________________________________________________________________
| ~/development/github/styled-jsx-snapshots @ ssmac (step6692)
| =>
```
