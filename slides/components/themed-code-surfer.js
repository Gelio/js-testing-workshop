import React from 'react';

import { CodeSurfer } from 'mdx-deck-code-surfer';
import oceanicNext from 'prism-react-renderer/themes/oceanicNext';

const ThemedCodeSufer = (props) => (
  <CodeSurfer theme={oceanicNext} {...props} />
);

export default ThemedCodeSufer;
