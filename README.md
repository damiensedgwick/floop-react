# @feedback-loop/react

The Floop widget for React apps.

## Usage

### Install the Floop react package

`pnpm install @feedback-loop/react`

`npm install @feedback-loop/react`

`yarn add @feedback-loop/react`

### Import the widget into your application

`import { FloopWidget } from "@feedback-loop/react"`

### Use the Floop widget within your code

```tsx
import { FloopWidget } from "@feedback-loop/react"

export const MyComponent = () => {
  return (
    <FloopWidget projectId="..." userEmail="...">
      <button>Give feedback</button>
    </FloopWidget>
  );
};
```

## License

Licensed under the MIT license.
